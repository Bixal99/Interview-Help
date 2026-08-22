# PHASE 83 - Caching

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Choose a cache strategy (cache-aside, read-through, write-through/write-behind) for a concrete read path and explain the invalidation risk, TTL trade-off, and stampede failure mode if the data changes or the cache goes cold.

**WHAT YOU SHOULD KNOW FIRST:** Phase 82 — you only cache after you know what is slow. Phases 60–65 — the source of truth is still the database. Phase 48 — LRU is one eviction policy you already built.

**LEARNING RESOURCES:**

- [Cache Invalidation (CodeOpinion)](https://www.youtube.com/watch?v=OYZCcVbKCKE)
- Caching section in [system-design-primer](https://github.com/donnemartin/system-design-primer)
- [Patterns of Distributed Systems (Fowler catalog)](https://martinfowler.com/articles/patterns-of-distributed-systems/)
- Redis docs: eviction policies overview (skim; mechanisms matter more than product)

## 83.1 Speed With a Staleness Budget

Phase 82 can multiply app servers until every replica still asks Postgres for the same bestseller ISBN. More boxes do not help when the scarce resource is **repeated origin reads**. A cache is a copy kept for speed. Copies go wrong. This phase owns **who fills the cache**, **who updates it on write**, and **what users see when the copy is stale or missing** — including stampede, penetration, and cold-start failure modes. Full distributed consistency across replicas is Phase 85; here you own the *application cache* contract.

**WHY A CACHE BECOMES NECESSARY NOW:**

When estimates (Phase 81) show read peaks far above what the origin can serve, or profiles (Phase 82) show the same keys dominating DB time, you introduce a faster tier closer to the app. The new problem is not “Redis config.” It is: **how wrong may the answer be, for how long, and what happens when everyone misses at once.**

**CACHE-ASIDE (THE DEFAULT YOU SHOULD BE ABLE TO DRAW):**

```text
Read path:
  Client → App → Cache ─hit→ return
                   │
                 miss
                   ↓
                  DB → fill cache → return

Write path (invalidate):
  Client → App → update DB → DELETE cache key
  Next read misses and refills with fresh data
```

Cache-aside (lazy loading) keeps the database as source of truth. The app owns the fill and the invalidate. That is why it is the most common interview and production pattern for read-heavy catalog data.

| Pattern | Read miss | Write | Typical risk |
| ------- | --------- | ----- | ------------ |
| **Cache-aside** | App loads DB → fills cache | App updates DB, then deletes/updates key | Stale if delete fails; thundering herd on miss |
| **Read-through** | Cache library loads DB | Usually paired with a write policy | Hides DB details; still need TTL/invalidation |
| **Write-through** | From cache | Write cache + DB together | Slower writes; cache and DB stay closer |
| **Write-behind** | From cache | Write cache, flush DB async | Fast writes; **data-loss window** if crash before flush |

**STALENESS BUDGET — SAY IT EXPLICITLY:**

Every cache choice is a product decision wearing infrastructure clothes:

- **Price / stock for checkout** — often needs short TTL *plus* invalidate-on-write; money and inventory are where “eventually” hurts.
- **Book cover URL / blurb** — minutes of staleness may be fine.
- **Immutable short-link target** (bookstore campaign URLs) — almost free to cache forever until expiry; invalidation is rare.

TTL alone is not a correctness strategy for permissions or money. Use explicit invalidation, or short TTL plus careful read paths. Eviction (LRU/LFU) only bounds **memory**; it does not guarantee freshness.

**THE NEW PROBLEMS CACHING INTRODUCES:**

1. **Stale reads** — write succeeded in DB; cache still holds yesterday’s price.
2. **Cache penetration** — repeated reads for keys that do not exist hammer the DB (negative caching / bloom filters help; do not invent them as magic).
3. **Stampede / thundering herd** — popular key expires; thousands of apps miss together; origin melts. Mitigations: singleflight (one filler), soft TTL + probabilistic early refresh, lock around fill.
4. **Cold cache after restart** — traffic that was fine suddenly looks like an origin DDoS.

```text
STAMPEDE (why “just add Redis” can make outages worse):

  t=0   key "isbn:978..." expires
  t=0+  5,000 app workers miss at once → 5,000 identical DB queries
  t=1   DB CPU pegged → even uncached paths fail

  Fix idea: only ONE worker fills; others wait or serve slightly stale
```

**BOOKSTORE CATALOG — WORKED CHOICE:**

```text
Hot path: GET /books/{isbn}  (read-heavy, Zipfian bestsellers)

Choose: cache-aside in Redis
  key: book:{isbn}
  value: JSON of display fields
  on admin update title/price: UPDATE db; DEL book:{isbn}
  TTL: 5 minutes as safety net if delete fails

Not choose write-behind for price:
  crash between cache write and DB flush → wrong price sold
```

Distributed “is this replica consistent?” questions wait for Phase 85. Here the contract is simpler and still hard: **app cache vs database of record**, with an explicit staleness budget.

```python playground=cs-phase-83-cache-aside
# Cache-aside toy: dict cache + "DB". Write deletes the key (invalidate).
# Also shows a tiny singleflight lock so two misses do not double-fill.

import threading

db = {"book:1": {"title": "Dune", "price": 12}}
cache = {}
fill_locks = {}
lock_guard = threading.Lock()

def get_book(bid):
    key = f"book:{bid}"
    if key in cache:
        print("HIT", cache[key])
        return cache[key]
    with lock_guard:
        filler = fill_locks.setdefault(key, threading.Lock())
    with filler:
        if key in cache:  # another waiter may have filled
            print("HIT-after-wait", cache[key])
            return cache[key]
        row = dict(db[key])
        cache[key] = row
        print("MISS→fill", row)
        return row

def update_price(bid, price):
    key = f"book:{bid}"
    db[key]["price"] = price
    cache.pop(key, None)  # invalidate
    print("WRITE+invalidate", price)

get_book(1)
get_book(1)
update_price(1, 15)
get_book(1)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define cache-aside in three steps (read miss, fill, write invalidate) |
| Medium | Argue TTL vs delete-on-write for a bookstore product price page |
| Medium | Explain stampede: what triggers it, what it does to the origin, one mitigation |
| Hard | Design cache keys + invalidation for “book detail” vs “inventory remaining” with different staleness budgets |

**WHAT THIS UNLOCKS NEXT:**

Not every slow thing should be cached. Some work — receipt email, search reindex, thumbnail resize — should leave the request path entirely. Synchronous call chains couple failure: if email is down, checkout looks down. Queues and events decouple producers from consumers. That is Phase 84.

---

> **Phase 83 complete?** [Continue to Phase 84](#phase-84)

---
