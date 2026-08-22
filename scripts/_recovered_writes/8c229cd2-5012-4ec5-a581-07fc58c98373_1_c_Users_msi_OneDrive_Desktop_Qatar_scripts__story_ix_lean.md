# PHASE 66 - Security Foundations

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Draw trust boundaries for a small web app, name CIA failures and a light STRIDE pass, and explain why "encrypt the wire later" is not a substitute for knowing who you trust.

**WHAT YOU SHOULD KNOW FIRST:** Phase 55–58 — packets and HTTP cross machines you do not control; Phase 60–65 — durable data concentrates blast radius.

**LEARNING RESOURCES:**

- [Trust Boundaries vs Attack Surfaces (Practical DevSecOps)](https://www.youtube.com/watch?v=wkqzZZBe6jE)
- [STRIDE Threat Modeling for Beginners (Netsec Explained)](https://www.youtube.com/watch?v=rEnJYNkUde0)
- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [Cloudflare — What is the CIA triad?](https://www.cloudflare.com/learning/privacy/what-is-the-cia-triad/)

## 66.1 Threats, Trust Boundaries & the CIA Triad

Story VIII made the bookstore's data survive restarts, answer JOINs, stay correct under concurrency, and stretch across replicas. None of that asks *who* may read Ada's orders, change stock, or dump the customer table — or what happens when the browser and the public internet are untrusted. Packets already crossed machines you do not control. A durable store concentrates the blast radius of a stolen dump, a forged identity, or a query that turns input into instructions. Security foundations are the map; crypto, auth, and app defenses later hang on that map.

**WHERE TRUST STOPS:**

A **trust boundary** is a line where data or control crosses from a less-trusted place to a more-trusted place. Attacks concentrate on those lines. For the bookstore:

```text
Browser  --HTTPS-->  API / app  --SQL-->  Postgres
   ^                    ^                   ^
 untrusted          semi-trusted         most trusted
                    (after AuthN)        (DB creds + network)

Also: CI runner → production secrets
      Mobile app → same API
      Admin laptop → ops tooling
```

TLS protects the first hop *in transit*. Password hashing protects secrets if the DB dump leaks. Authorization stops elevation after login. Parameterized SQL stops "data" becoming "instructions" at the DB boundary. Each defense sits on a named boundary — without the map, you buy locks for the wrong door.

**CIA — WHAT YOU ARE TRYING TO PRESERVE:**

| Letter | Means | Broken when… |
| ------ | ----- | ------------ |
| **Confidentiality** | Only intended parties can read | Packet sniffing, leaked dump, chatty logs |
| **Integrity** | Data is not silently altered | Tampered cookies, unsigned updates, bit-flips |
| **Availability** | The service can be used when needed | DDoS, lockout-as-DoS, accidental `DROP TABLE` |

"Encrypt everything" alone is not a strategy: encryption buys confidentiality (and sometimes integrity). It does not decide who may act, and it does not keep the site up under a flood of login attempts.

**LIGHT STRIDE — NAME THE THREAT CLASS:**

You are not running a pen-test course. You are naming *kinds* of bad things so later phases have a vocabulary:

1. **S**poofing identity — pretend to be Ada  
2. **T**ampering — change an order total in transit or in a cookie  
3. **R**epudiation — deny placing an order with no audit trail  
4. **I**nformation disclosure — dump the customer table  
5. **D**enial of service — exhaust login hashing or scrape the catalog  
6. **E**levation of privilege — viewer becomes admin  

A museum analogy still helps: the street is untrusted, the lobby is semi-trusted, the vault is trusted. Guards (auth), locked cases (encryption), badges (sessions), and "staff only" ropes (authorization) protect different boundaries. A better street door (TLS) does not replace knowing which rooms are vaults.

```python playground=cs-phase-66-trust-map
# Sketch trust boundaries for a tiny bookstore. Not crypto — ownership of risk.

components = ["browser", "load_balancer", "app", "postgres", "object_storage"]
edges = [
    ("browser", "load_balancer", "public internet"),
    ("load_balancer", "app", "private VPC"),
    ("app", "postgres", "private VPC + DB creds"),
    ("app", "object_storage", "cloud IAM"),
]

print("Trust map:")
for src, dst, zone in edges:
    print(f"  {src:14} -> {dst:14}  [{zone}]")

threats = {
    "browser->load_balancer": "eavesdropping / MITM if no TLS (Phase 67)",
    "app->postgres": "SQLi if input crosses as instructions (Phase 69)",
    "stolen postgres dump": "password hashes must not be reversible (Phase 67)",
}
print("\nNamed risks:")
for k, v in threats.items():
    print(f"  {k}: {v}")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define CIA in your own words with one bookstore failure each |
| Medium | STRIDE a login form: one concrete threat per letter (no fancy tooling) |
| Hard | Draw trust boundaries for "mobile app + API + managed DB + third-party email" |

**WHAT THIS UNLOCKS NEXT:**

You can name *what* must stay secret, intact, and available — and *where* trust ends. You still cannot protect the channel or stored passwords with the right developer tools. Hashing, encryption, signing, TLS, and password hashing are Phase 67 — not a cryptography degree, a toolbox keyed to this map.

---

> **Phase 66 complete?** [Continue to Phase 67](#phase-67)

---

# PHASE 67 - Cryptography for Developers

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Separate hashing, encryption, and signing; sketch a TLS handshake at developer depth; store passwords with a slow adaptive hash (Argon2id / bcrypt) — never plaintext, never a fast general-purpose hash alone.

**WHAT YOU SHOULD KNOW FIRST:** Phase 66 — trust boundaries and CIA; Phase 55–58 — HTTP rides TCP across untrusted networks.

**LEARNING RESOURCES:**

- [7 Cryptography Concepts EVERY Developer Should Know (Fireship)](https://www.youtube.com/watch?v=NuyzuNBFWxQ)
- [SSL, TLS, HTTPS Explained (ByteByteGo)](https://www.youtube.com/watch?v=j9QmMEWmcfo)
- [The Illustrated TLS 1.3 Connection](https://tls13.xargs.org/)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [How NOT to Store Passwords! (Computerphile)](https://www.youtube.com/watch?v=8ZtInClXe1Q)
- [Cloudflare — What happens in a TLS handshake?](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)

## 67.1 Hashing vs Encryption vs Signing

Phase 66 named the bookstore vault and the street. Interviews and production bugs both start from mixing three words that are different tools: one-way fingerprints, reversible secrecy, and proof of origin. TLS and password storage are *applications* of these ideas — not synonyms for "crypto."

**THREE TOOLS, THREE JOBS:**

| Tool | Direction | Main job | Example use |
| ---- | --------- | -------- | ----------- |
| **Hash** | One-way | Integrity / fingerprints / password storage (with slow KDF) | `SHA-256(file)`, Argon2id(password) |
| **Encryption** | Reversible with a key | Confidentiality | TLS record layer, sealed DB fields |
| **Signing** | Private key signs; public verifies | Authenticity + integrity | TLS certificates, JWT `RS256`, software updates |

```text
Hash:        message ──► digest          (cannot get message back)
Encrypt:     plaintext + key ──► ciphertext ──(+ key)──► plaintext
Sign:        message + private key ──► signature
             verify(message, signature, public key) → ok / fail
```

Rules of thumb: hashes are not encryption; encrypting a password for login is usually the wrong design (use a slow hash); a signature proves who produced the bytes, not that the bytes are secret. Prefer battle-tested libraries — never invent protocols.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | For each of hash / encrypt / sign, name one bookstore use and one misuse |
| Medium | Explain why "we encrypt passwords with AES" is usually the wrong login design |
| Hard | Sketch which tool protects a downloadable ebook update vs a TLS session vs a password dump |

**WHAT THIS UNLOCKS NEXT:**

You can tell the tools apart. The bookstore's HTTP channel is still readable text on an untrusted path (Phases 55–58). TLS is how browsers and servers combine asymmetric crypto (handshake / certificates) with symmetric crypto (bulk data) to buy confidentiality, integrity, and *server authentication* on that channel — Phase 67.2.

---

## 67.2 TLS/HTTPS - Securing the Connection Itself (Canonical)

Every layer from Phase 55 and Phase 58 assumed a network where nobody was listening. IP routes through machines you cannot see. TCP delivers bytes intact and says nothing about who else read them. HTTP writes credentials and cookies as plain text into those bytes. Phase 66 named the trust boundary; TLS is the protocol that defends the wire.

**THREE PROPERTIES, NOT ONE WORD:**

TLS buys **confidentiality** (observer cannot read), **integrity** (observer cannot modify undetected), and **authentication** (you know who you are talking to). Encryption alone gives only the first. An encrypted connection to an attacker is worthless — authentication does the heavy lifting.

**WHY BOTH KINDS OF CRYPTO:**

**Asymmetric** crypto (keypair) solves agreeing on a secret while someone watches, but it is slow. **Symmetric** crypto is fast once both sides share a key, but cannot invent that shared key in public. TLS uses asymmetric work during the handshake to establish a **session key**, then uses that key for every application byte.

Modern TLS uses **Diffie–Hellman key exchange**: both sides contribute randomness and derive the same secret without sending it. That buys **forward secrecy** — steal the server's long-term private key next year and yesterday's recorded traffic still stays sealed. TLS 1.3 made forward secrecy mandatory and cut the handshake toward one round trip.

**CERTIFICATES ARE SIGNED STATEMENTS:**

A certificate holds the server's public key, valid names, expiry, and a signature from a **certificate authority**. Your browser trusts a root store; validation walks the chain and checks signature, dates, hostname (SAN), and revocation. Self-signed encryption can still work — authentication fails, which is why the browser warns.

```text
Client -> Server: ClientHello (versions, cipher suites, key share)
Server -> Client: ServerHello + certificate + key share + Finished
Client verifies chain; both derive session keys
        -- from here, HTTP bytes are ciphertext on the wire --
```

```text
TLS 1.2: often 2 RTTs after TCP before application data
TLS 1.3: 1 RTT (resumption / 0-RTT can go lower; 0-RTT data is replayable
         — only safe for idempotent requests, Phase 59)
```

**Operational details that bite:** **SNI** names the hostname before the cert is chosen (still visible to observers unless Encrypted Client Hello). **HSTS** tells the browser to refuse plain HTTP later, closing the "first request in the clear" gap. Prefer TLS 1.3; disable ancient suites.

```python
import socket, ssl

HOST = "example.com"
context = ssl.create_default_context()  # verify chain + hostname; TLS ≥ 1.2

with socket.create_connection((HOST, 443), timeout=10) as raw:
    with context.wrap_socket(raw, server_hostname=HOST) as tls:
        print("version:", tls.version())
        print("cipher :", tls.cipher()[0])
        cert = tls.getpeercert()
        print("subject:", dict(x[0] for x in cert["subject"]).get("commonName"))
        tls.sendall(f"GET / HTTP/1.1\r\nHost: {HOST}\r\nConnection: close\r\n\r\n".encode())
        print("http   :", tls.recv(256).split(b"\r\n")[0])

# badssl.com shows authentication failures, not "encryption broke":
for host in ["expired.badssl.com", "wrong.host.badssl.com", "self-signed.badssl.com"]:
    try:
        with socket.create_connection((host, 443), timeout=10) as raw:
            with context.wrap_socket(raw, server_hostname=host):
                print(host, "connected (unexpected)")
    except ssl.SSLCertVerificationError as e:
        print(host, "refused:", e.verify_message)
```

| Property | Plain HTTP | TLS 1.3 (typical) |
| -------- | ---------- | ----------------- |
| Confidentiality / integrity | none | yes |
| Forward secrecy | n/a | mandatory |
| Hostname visible (SNI) | yes | usually yes |
| Real cost | — | handshake latency more than bulk AES |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain in three sentences why TLS uses asymmetric crypto for the handshake and symmetric for data |
| Easy | Run the `badssl.com` loop; name which verification step failed for each host |
| Medium | Use `openssl s_client -connect example.com:443 -servername example.com` and report version, issuer, expiry |
| Hard | Read [Illustrated TLS 1.3](https://tls13.xargs.org/) once; annotate which messages establish the session key vs authenticate the server |

**WHAT THIS UNLOCKS NEXT:**

TLS protects secrets *in transit*. The bookstore still must verify passwords later (Phase 68) without storing them readable in Postgres. That storage design — slow salted hashes, not cracking tutorials — is Phase 67.3.

---

## 67.3 Password Hashing

When Phase 68 builds login, verification must not require storing Ada's real password. Backups, replicas, logs, and admins all touch the database. People reuse passwords; a plaintext dump becomes a breach of email and banking elsewhere. Password hashing exists because the naive storage design makes your DB the most dangerous asset you own.

**FAST HASHES FAIL HERE ON PURPOSE:**

General-purpose hashes (SHA-256) are built for *speed*. An attacker with a stolen table does not "decrypt" — they guess, hash, compare. GPUs do billions of fast hashes per second. The defense is a **deliberately slow**, tunable function: **bcrypt**, **scrypt**, or **Argon2id** (current recommendation). Raise the work factor as hardware improves.

**SALT (AND OPTIONAL PEPPER):**

Identical passwords must not produce identical stored values. A **salt** is unique random bytes per user, stored with the hash — not secret; its job is to kill rainbow tables and force per-row work. A **pepper** is an optional app-wide secret kept *outside* the DB so a pure dump is harder to attack.

**WHAT YOU STORE AND HOW YOU VERIFY:**

```text
REGISTER
  salt = random(16+)
  hash = Argon2id(password, salt, memory, time, parallelism)
  store one string: algorithm + params + salt + hash

LOGIN
  look up by username (if missing: still burn hash time → same error)
  recompute with stored params; compare with CONSTANT-TIME compare
  if ok and params outdated: rehash at new cost (transparent upgrade)
```

Never invent the primitive — use `argon2-cffi`, `bcrypt`, or libsodium. Comparison with `==` can leak match length via timing; use `hmac.compare_digest` or the library's verify. Wrong password and unknown user must look the same (no user-enumeration oracle). NIST guidance favors long passphrases and breached-password checks over mandatory rotation theater.

```python
import hmac, hashlib, secrets, time

# Production: argon2-cffi / bcrypt. PBKDF2 here only to show work factor.
def pbkdf2_hash(password: str, iterations: int = 600_000) -> str:
    salt = secrets.token_bytes(16)
    dk = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, iterations)
    return f"pbkdf2_sha256${iterations}${salt.hex()}${dk.hex()}"

def pbkdf2_verify(stored: str, submitted: str) -> bool:
    _, iters, salt_hex, hash_hex = stored.split("$")
    dk = hashlib.pbkdf2_hmac(
        "sha256", submitted.encode(), bytes.fromhex(salt_hex), int(iters)
    )
    return hmac.compare_digest(dk.hex(), hash_hex)

pw = "correct horse battery staple"
h1, h2 = pbkdf2_hash(pw), pbkdf2_hash(pw)
print("same password, different salts → different strings:", h1 != h2)
print("verify ok:", pbkdf2_verify(h1, pw))
print("verify bad:", pbkdf2_verify(h1, "wrong"))

t0 = time.perf_counter()
hashlib.sha256(pw.encode()).hexdigest()
fast = (time.perf_counter() - t0) * 1000
t0 = time.perf_counter()
pbkdf2_hash(pw)
slow = (time.perf_counter() - t0) * 1000
print(f"sha256 ~{fast:.3f} ms vs pbkdf2 ~{slow:.1f} ms — asymmetry is the defense")
```

| Approach | Verdict for password storage |
| -------- | ---------------------------- |
| Plaintext / MD5 / unsalted SHA | broken |
| Salted SHA-256 alone | still too fast |
| PBKDF2 (high iterations) | acceptable where required |
| bcrypt / scrypt / **Argon2id** | preferred |

Budget the cost: slow verify is a DoS surface — rate-limit *before* hashing (Phase 69.2).

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Hash the same password twice with a real library; explain why outputs differ |
| Medium | Implement register/login with Argon2id or bcrypt; same message + similar timing for bad user vs bad password |
| Hard | Design transparent rehash-on-login when raising cost factor; list what an attacker still can do during migration from unsalted MD5 |

**WHAT THIS UNLOCKS NEXT:**

Crypto protects channels and stored secrets. It still does not answer *who* is calling the bookstore API or *what* they may do. Sessions, MFA, RBAC, JWT, and OAuth live in Phase 68.

---

> **Phase 67 complete?** [Continue to Phase 68](#phase-68)

---

# PHASE 68 - Authentication & Authorization

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Explain sessions vs JWT; apply MFA and RBAC at working depth; design a permission check (authentication vs authorization); choose cookie attributes that close common session-theft paths.

**WHAT YOU SHOULD KNOW FIRST:** Phase 58 — HTTP is stateless; Phase 66 — trust boundaries; Phase 67 — TLS in transit, slow password hashes at rest.

**LEARNING RESOURCES:**

- [Session Vs JWT (ByteByteGo)](https://www.youtube.com/watch?v=fyTxwIa-1U0)
- [HTTP Cookies Crash Course (Web Dev Simplified)](https://www.youtube.com/watch?v=sovAIX4doOE)
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [RBAC vs ABAC (IBM Technology)](https://www.youtube.com/watch?v=rvZ35YW4t5k)
- [OAuth 2 Explained (ByteByteGo)](https://www.youtube.com/watch?v=ZV5yTm4pT8g)
- [MDN — Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## 68.1 Authentication, Sessions & Cookies

TLS gave the bookstore a private channel. Privacy is not identity. HTTP's statelessness means the next request arrives with no memory of login. Resending the password on every click is worse. Sessions carry identity forward without re-transmitting the secret that established it.

**COOKIE AS TRANSPORT, SESSION AS MEMORY:**

A cookie is a small string the browser stores and **automatically attaches** to matching requests. That automatic attachment is both the feature and the CSRF surface (Phase 69).

In the **server-side session** model, the cookie holds only an opaque, unguessable id. Real state (`user_id`, roles) lives in a server store. Generate ids with `secrets`, not `random`. At **login**, regenerate the id (session fixation). At **logout**, delete the server record — clearing the cookie alone leaves a stolen copy valid. Use idle and absolute timeouts.

**Authentication** asks who you are. **Authorization** asks whether this identity may perform this action on this object — checked every request, not inferred from "logged in." An endpoint that trusts `invoice_id` from the URL because a session exists is a classic bug.

**COOKIE ATTRIBUTES THAT MATTER:**

```text
Set-Cookie: sid=…; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=…

  HttpOnly  — JS cannot read it (blunts XSS session theft)
  Secure    — never sent on plain HTTP
  SameSite  — not attached to most cross-site POSTs (CSRF)
  Path/Domain — scope narrowly; avoid Domain=.example.com sprawl
```

```python
import secrets, time

SESSIONS = {}
IDLE, ABSOLUTE = 30 * 60, 12 * 3600

def login(user_id: int, old_sid: str | None) -> str:
    if old_sid:
        SESSIONS.pop(old_sid, None)  # fixation defense
    sid = secrets.token_urlsafe(32)
    now = time.time()
    SESSIONS[sid] = {"user_id": user_id, "created": now, "last_seen": now}
    return sid

def resolve(sid: str | None) -> int | None:
    if not sid or sid not in SESSIONS:
        return None
    s = SESSIONS[sid]
    now = time.time()
    if now - s["created"] > ABSOLUTE or now - s["last_seen"] > IDLE:
        SESSIONS.pop(sid, None)
        return None
    s["last_seen"] = now
    return s["user_id"]

def get_order(sid: str, order_id: int, db):
    user_id = resolve(sid)
    if user_id is None:
        return 401, "not authenticated"
    order = db.fetch_order(order_id)
    if order is None:
        return 404, "not found"
    if order.owner_id != user_id:
        return 403, "not authorized"  # AuthN ≠ AuthZ
    return 200, order
```

| Concern | Server session | Signed cookie / JWT (68.3) |
| ------- | -------------- | -------------------------- |
| Revocation | delete record | hard without a store |
| Scaling | shared store or sticky | verify signature |
| Lookup | every request | often none |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Inspect a real session cookie in DevTools; explain HttpOnly / Secure / SameSite |
| Medium | Sketch login that regenerates sid; show why reusing the pre-login id enables fixation |
| Hard | Add ownership checks to a bookstore `GET /orders/{id}` and write the test that fails without them |

**WHAT THIS UNLOCKS NEXT:**

A password plus session proves *something Ada knows*. Credential stuffing and phishing still win against single-factor login. Real systems add *something she has* (MFA) and then decide *what that identity may do* (RBAC) — otherwise every logged-in user is effectively staff. That is Phase 68.2.

---

## 68.2 MFA & RBAC

Password theft still defeats single-factor login. **MFA** adds an independent factor. Separately, knowing *who* someone is does not say whether they may delete a user or refund an order — that is **authorization**, commonly **RBAC**.

**FACTOR CLASSES:**

1. **Something you know** — password, PIN  
2. **Something you have** — TOTP app, hardware key; SMS is weaker (SIM swap)  
3. **Something you are** — biometrics (usually unlocks a device key)

Prefer TOTP / WebAuthn over SMS when you can. After MFA succeeds, **regenerate the session id** (same fixation rule). Use step-up MFA for dangerous actions (change payout bank, delete account).

**RBAC:**

```text
user Ada  → roles {editor, billing_viewer}
role editor → {post:write, post:read}
role billing_viewer → {invoice:read}

DELETE /users/9  needs user:delete
  Ada logged in? yes
  Ada has user:delete? no  → 403 (authenticated, not authorized)
```

Least privilege; deny by default. Roles do not replace per-object checks ("may Ada edit *this* book listing?").

```python playground=cs-phase-68-rbac
ROLE_PERMS = {
    "viewer": {"book:read"},
    "editor": {"book:read", "book:write"},
    "admin": {"book:read", "book:write", "user:delete"},
}

def allowed(roles, permission):
    have = set()
    for r in roles:
        have |= ROLE_PERMS.get(r, set())
    return permission in have

ada = ["editor"]
print("Ada write book?", allowed(ada, "book:write"))
print("Ada delete user?", allowed(ada, "user:delete"))
print("step-up MFA for user:delete: yes")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three MFA factor classes; say why SMS is weaker than TOTP |
| Medium | Design roles for the bookstore (customer, clerk, admin) and list permissions |
| Hard | Sketch middleware that returns 401 vs 403 correctly; note where object ownership still applies |

**WHAT THIS UNLOCKS NEXT:**

Server-side sessions fit one app and one session store. Many services, or "print my Google Photos at a third-party shop," need self-verifying tokens and **delegated** access without sharing passwords. JWT and OAuth address those shapes — Phase 68.3.

---

## 68.3 JWT & OAuth

Once requests land on many bookstore services, every instance consulting one session store is awkward. Separately, sessions have no good answer for *another company's* app acting on Ada's behalf without her password. JWT makes assertions self-verifying; OAuth makes delegation first-class.

**JWT — SIGNED CLAIMS, NOT ENCRYPTION:**

Three base64url segments: header, payload, signature. The payload is **readable to anyone holding the token** — never put secrets in it. The signature proves integrity and issuer.

- **HS256** — shared secret; every verifier can also mint tokens  
- **RS256 / ES256** — private signs, public verifies; better across services  

Verifiers must enforce expected `alg`, check `exp` / `iss` / `aud`, and **not** trust the token's requested algorithm (`alg: none` and algorithm-confusion bugs are library mistakes, not magic crypto).

**REVOCATION PROBLEM → TWO-TOKEN DESIGN:**

A session row can be deleted. A JWT cannot be un-issued. Mitigate with a short-lived **access token** (JWT, minutes) plus a long-lived **refresh token** (opaque, server-stored, rotated). Stolen access tokens die quickly; stolen refresh tokens are revocable.

**OAUTH IS DELEGATION; OIDC ADDS LOGIN:**

OAuth answers "may this client access these scopes on this user's behalf?" — not "who is this user?" **OpenID Connect** adds identity (`id_token`). Prefer **authorization code + PKCE**; the implicit flow is deprecated. User authenticates at the provider; the client receives scoped tokens, never Ada's Google password.

```text
HEADER   { "alg": "RS256", "kid": "2026-08" }   # never let token choose alg
PAYLOAD  { "sub": "5", "aud": "api.bookstore", "exp": …, "scope": "orders:read" }
SIGNATURE over base64(header)+"."+base64(payload)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Decode a sample JWT at jwt.io; change one payload character; explain why verify fails |
| Medium | Compare session logout vs JWT logout; justify access+refresh lifetimes for the bookstore API |
| Hard | Sketch authorization-code + PKCE for "Sign in with IdP"; list roles: resource owner, client, authorization server, resource server |

**WHAT THIS UNLOCKS NEXT:**

Identity and permissions are in place. A correctly encrypted, correctly authenticated request can still make the app obey malicious *input* or forged browser intent — SQL injection, XSS, CSRF — and floods can burn your Argon2 budget. Application security and rate limits are Phase 69.

---

> **Phase 68 complete?** [Continue to Phase 69](#phase-69)

---

# PHASE 69 - Application Security

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Stop common web failures — SQL injection with parameterized queries, XSS with context-aware escaping, CSRF with SameSite plus tokens — apply basic rate limiting, and map each to an OWASP Top Ten risk.

**WHAT YOU SHOULD KNOW FIRST:** Phase 61 — SQL is an injection surface; Phase 58 — browsers attach cookies; Phase 68 — sessions are what CSRF rides.

**LEARNING RESOURCES:**

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [SQL Injection (Computerphile)](https://www.youtube.com/watch?v=_jKylhJtPmI)
- [Cross-Site Scripting (Computerphile)](https://www.youtube.com/watch?v=L5l9lSnNMxg)
- [Cross-Site Request Forgery (Computerphile)](https://www.youtube.com/watch?v=vRBihr41JTo)
- [CORS in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=4KHiSt0oLJ0)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — practice labs (authorized / educational)

## 69.1 The Web Attack Surface - SQL Injection, XSS, CSRF, CORS

Phases 66–68 secured the channel and established identity. A valid, encrypted request can still make your code treat **data as instructions**. TLS does not help — the attack rides inside the tunnel. Auth does not always help — CSRF borrows a real session; some injections need none. This is defense education: failure mode + fix, not an exploit playbook.

**ONE PATTERN:**

At a boundary, ordinary data enters a place that may interpret it as code. Safe design keeps data separate from instructions — not "filter the bad characters."

**SQL INJECTION → PARAMETERIZE:**

Concatenation builds one string the DB parses as SQL. A prepared statement sends the **template first**, then binds values as data. Quotes in input cannot change the parse tree. Placeholders cannot substitute identifiers — allowlist column/sort names. Run the app DB user with least privilege.

```text
UNSAFE:  "SELECT * FROM books WHERE title = '" + q + "'"
SAFE:    "SELECT * FROM books WHERE title = ?"  + bind(q)
```

**XSS → ESCAPE IN CONTEXT (+ CSP):**

User text rendered as HTML becomes script in visitors' browsers (stored / reflected / DOM-based). Escape with a context-aware template engine; prefer `textContent` over `innerHTML`. Sanitize with a maintained library if HTML is required. **Content-Security-Policy** is depth when escaping fails. `HttpOnly` cookies (Phase 68) blunt cookie theft if XSS still occurs.

**CSRF → TOKEN + SAMESITE:**

The browser attaches cookies automatically. A third-party page can trigger a state-changing request; your server sees a valid session. Defenses: synchronizer CSRF token (attacker cannot read your HTML), `SameSite=Lax/Strict` on the session cookie, custom headers for JSON APIs. CORS blocking the *response* does **not** stop the side effect — CSRF is not cured by CORS.

**CORS → RELAX SAME-ORIGIN ON PURPOSE:**

Same-origin policy: script may often *send* cross-origin requests but may not *read* responses unless the server allows. Allowlist exact origins; never reflect arbitrary `Origin` with `Allow-Credentials: true`.

```python
import sqlite3, html, secrets

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT);
INSERT INTO books VALUES (1, 'Dune'), (2, 'Neuromancer');
""")

def vulnerable_search(q):
    return db.execute(f"SELECT id, title FROM books WHERE title = '{q}'").fetchall()

def safe_search(q):
    return db.execute("SELECT id, title FROM books WHERE title = ?", (q,)).fetchall()

for q in ["Dune", "' OR '1'='1"]:
    print("input", repr(q))
    print("  unsafe:", vulnerable_search(q))
    print("  safe  :", safe_search(q))

comment = "<script>alert(1)</script>"
print("escaped comment:", html.escape(comment))

csrf = secrets.token_urlsafe(32)  # embed in form; verify on POST
print("csrf token set for session")
```

| Failure | Fix |
| ------- | --- |
| SQLi | Prepared statements; allowlist identifiers |
| XSS | Context-aware escaping; CSP; careful DOM APIs |
| CSRF | SameSite + synchronizer token |
| CORS misconfig | Exact origin allowlist; no credentialed wildcards |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Rewrite one concatenated bookstore query as parameterized; explain why the parse tree cannot change |
| Medium | For a comment box, list stored vs reflected vs DOM XSS and one defense each |
| Hard | Explain why CORS does not stop CSRF; design SameSite + token for `POST /orders` |

**PRACTICE WITH A SMALL PROJECT:**

Harden a tiny bookstore endpoint set against SQLi/XSS/CSRF and document rate limits on login — then build the [Phase 69 mini-project](../guides/Projects.md#cs-phase-69-project).

**WHAT THIS UNLOCKS NEXT:**

Injection and CSRF defenses assume the attacker still has to *reach* expensive endpoints. Without a throttle, Argon2 login, password spraying, and scrapers become availability and cost problems. Basic rate limiting is Phase 69.2 — not distributed system-design depth (that returns in Story XI).

---

## 69.2 Basic Rate Limiting

Application security is also "too many attempts." Rate limiting bounds how often an IP, user, or API key may call a sensitive route. Keep this **basic**: fixed window or token bucket on one machine. Multi-region limiters belong with later system design.

**ALGORITHMS:**

| Algorithm | Idea | Good for |
| --------- | ---- | -------- |
| Fixed window | Count per minute/hour | Simple quotas |
| Sliding window | Smooth the window edge | Fairer quotas |
| Token bucket | Refill tokens; spend per request | Bursts + sustained cap |

Apply limits **before** expensive work (Argon2, SMS). Keys like `(ip, route)` anonymous and `(user_id, route)` when authenticated. Return **429** with `Retry-After`. Naive per-username lockout without care becomes DoS against Ada's account.

```text
Login:
  1. rate_limit(ip) and rate_limit(username_attempt)
  2. only then Argon2 verify
  3. on success: regenerate session; optional MFA
```

```python playground=cs-phase-69-rate-limit
import time

class TokenBucket:
    def __init__(self, capacity, refill_per_sec):
        self.capacity = capacity
        self.refill = refill_per_sec
        self.tokens = float(capacity)
        self.t = time.monotonic()

    def allow(self):
        now = time.monotonic()
        self.tokens = min(self.capacity, self.tokens + (now - self.t) * self.refill)
        self.t = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False

bucket = TokenBucket(5, 1.0)
print([bucket.allow() for _ in range(7)])  # five True, then False…
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain 429 and when to send `Retry-After` |
| Medium | Place different limits on bookstore login vs public catalog read; justify |
| Hard | Show how account lockout without rate limits becomes DoS against a victim username |

**WHAT THIS UNLOCKS NEXT:**

Defenses exist — and users still write passwords on sticky notes, click through warnings, and approve every MFA prompt. A secure system that is confusing will be circumvented. Usable security and HCI heuristics are Phase 70.

---

> **Phase 69 complete?** [Build the Phase 69 mini-project](../guides/Projects.md#cs-phase-69-project) · [Continue to Phase 70](#phase-70)

---

# PHASE 70 - Human-Computer Interaction

**Track:** Human-Centered Software

**WHAT YOU WILL BE ABLE TO DO:** Critique and redesign a confusing interface using Nielsen's usability heuristics, and explain why usable security (clear recovery, password managers, honest defaults) is part of defense — not optional polish.

**WHAT YOU SHOULD KNOW FIRST:** Phase 68–69 — auth and attack surfaces create UI states users must navigate safely.

**LEARNING RESOURCES:**

- [Jakob Nielsen's 10 Usability Heuristics (IxDF)](https://www.youtube.com/watch?v=ETGtsleVOpE)
- [10 Usability Heuristics for User Interface Design (NN/g)](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [How to Conduct a Heuristic Evaluation (NN/g)](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)
- [NIST SP 800-63B — Digital Identity (passwords & authenticators)](https://pages.nist.gov/800-63-3/sp800-63b.html)

## 70.1 Users, Heuristics, and Usable Security

You can parameterize SQL and hash passwords — and still lose if the secure path is harder than the insecure one. A login that forbids paste blocks password managers. An MFA prompt on every low-risk click trains blind approval. HCI is a short survey with a sharp security edge: make the right behavior the easy behavior.

**NIELSEN'S HEURISTICS AS A CHECKLIST:**

1. **Visibility of system status** — loading, saved, failed  
2. **Match the real world** — words users know  
3. **User control and freedom** — undo, cancel, escape  
4. **Consistency and standards** — same words mean the same things  
5. **Error prevention** — disable impossible actions  
6. **Recognition rather than recall** — show options  
7. **Flexibility and efficiency** — shortcuts for experts  
8. **Aesthetic and minimalist design** — every extra element competes  
9. **Help recognize, diagnose, recover from errors** — plain language + a fix  
10. **Help and documentation** — short, task-oriented  

**USABLE SECURITY — SAME LIST, AUTH UI:**

```text
Insecure-but-easy                 Secure-but-hard (today)
-----------------                 ----------------------
Reuse Password1!                  Unique passphrase + manager
Click through cert warning        Read, cancel, ask IT
Approve every 2FA prompt          Approve only intentional logins

HCI goal: make the RIGHT column the easier column.
```

Bookstore login example: "wrong password" vs "user not found" trades enumeration risk against recovery clarity — pair vague errors with rate limits (69.2). Do not disable paste. Certificate errors need human language (heuristic 9), not only `NET::ERR_CERT_AUTHORITY_INVALID`. Step-up MFA for refunds; friction proportional to risk.

```text
Heuristic review (5 minutes) — bookstore login:

  [ ] Status: failed login recoverable without support?
  [ ] Prevention: is paste disabled? (usually anti-pattern)
  [ ] Consistency: "Sign in" same on mobile and desktop?
  [ ] Freedom: forgot-password path exists and is rate-limited?
  [ ] Errors: plain language + next step, not a stack trace

One redesign note per failing item is an HCI deliverable.
```

This phase is intentionally survey-depth: enough vocabulary to critique and redesign, not a UX career track.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List five Nielsen heuristics and one bookstore UI example each |
| Medium | Heuristic-evaluate a settings or checkout page; file three issues with severity |
| Hard | Redesign MFA enrollment so the secure path is the default path |

**WHAT THIS UNLOCKS NEXT:**

Interfaces are not only forms — interactive software draws pixels on a budget and reacts to input. Understanding the rendering/input loop lets you reason about laggy UIs, visualizations, and simple games. That survey is Phase 71.

---

> **Phase 70 complete?** [Continue to Phase 71](#phase-71)

---

# PHASE 71 - Graphics & Interactive Computing

**Track:** Human-Centered Software / Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain a basic rendering and input loop — scene → transform → rasterize → framebuffer → display — and say why frame time and input latency feel like "responsiveness."

**WHAT YOU SHOULD KNOW FIRST:** Phase 49 — CPU vs parallel GPU work; Phase 70 — perceived lag is often a missed frame budget.

**LEARNING RESOURCES:**

- [The Programmable Graphics Pipeline (Mike Shah)](https://www.youtube.com/watch?v=kpA5X6eI6fM)
- [LearnOpenGL — Hello Triangle](https://learnopengl.com/Getting-started/Hello-Triangle)
- [An intro to modern OpenGL — The Graphics Pipeline](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-chapter-1:-the-graphics-pipeline)
- [A Jog Down the Pipeline (Udacity)](https://www.youtube.com/watch?v=kNrJTjKoYx4)

## 71.1 The Rendering and Input Loop

Secure, usable software still has to *present* itself. Every interactive program — a game, a map, a chart, even a scrolling feed — is a loop: read input, update state, draw a frame, present to the display. Missing that structure makes "the UI is janky" an unsolvable mystery. This is CS vocabulary, not a game-engine course.

**THE LOOP:**

```text
while running:
    process_input()   # keyboard, mouse, touch, gamepad
    update(dt)        # simulate for dt seconds
    render(scene)     # produce pixels
    present()         # swap buffers / vsync
```

Miss the frame budget (often ~16.7 ms at 60 Hz) and motion stutters; delay between input and the frame that shows it and the UI feels laggy — Phase 70's "responsiveness" in milliseconds.

**PIPELINE (SIMPLIFIED):**

1. **Vertices** — points with attributes (position, color, UV)  
2. **Vertex transform** — model → world → camera → clip  
3. **Rasterization** — triangles → fragments  
4. **Fragment shading** — color (textures, lights)  
5. **Framebuffer** — image in memory; **swap** shows it  

GPUs run steps 2–4 massively in parallel (Phase 49). **Double buffering** draws off-screen while the previous frame displays; **vsync** can reduce tearing and add a frame of latency — a real trade-off.

```python playground=cs-phase-71-tiny-framebuffer
# Tiny CPU "framebuffer": bounce a block. Mental model only — not OpenGL.

WIDTH, HEIGHT = 40, 12
buf = [[" "] * WIDTH for _ in range(HEIGHT)]
x, y, vx = 2, 5, 1

def clear():
    for row in buf:
        for i in range(WIDTH):
            row[i] = " "

def draw_block(px, py):
    for dy in range(3):
        for dx in range(5):
            r, c = py + dy, px + dx
            if 0 <= r < HEIGHT and 0 <= c < WIDTH:
                buf[r][c] = "#"

def present():
    print("\n".join("".join(row) for row in buf))
    print("-" * WIDTH)

for _ in range(8):
    clear()
    draw_block(x, y)
    present()
    x += vx
    if x <= 0 or x + 5 >= WIDTH:
        vx = -vx
# update position → render into buf → present (print)
```

Survey honesty: real engines add scene graphs, materials, compute passes, and audio. You now know where "frame time" and "input lag" live so later systems talk stays grounded.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Draw the while-loop of input → update → render → present from memory |
| Medium | Explain why vsync can reduce tearing but add input lag |
| Hard | Skim LearnOpenGL Hello Triangle; name which pipeline stage each major call configures |

**WHAT THIS UNLOCKS NEXT:**

Story IX made software *responsible*: you can map trust, use crypto correctly for developers, prove identity and authorize actions, defend the web attack surface, design for humans, and present interactive pixels. Building alone still breaks the moment more than one person (or one person across time) must change the same codebase safely. Shared history, review, and recovery are Story X — Git & Collaboration starts at Phase 72.

---

> **Phase 71 complete?** [Continue to Phase 72](#phase-72)

---
