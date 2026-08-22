---

# STORY XVI — DEPLOYMENT & OPERATIONS

**Track:** Deployment

Story XV proved your module under tests. That is necessary — and still not enough. A business does not run inside your laptop’s `--dev=reload` process. It runs on a Linux host (or Odoo.sh), behind HTTPS, with workers that survive concurrent users, a PostgreSQL that you can restore, and logs you can read when something breaks at 2 a.m.

This story teaches you to **ship and operate** Odoo: configuration, Linux service layout, reverse proxy, workers, database ops, backups, Odoo.sh, Docker concepts, and monitoring. By the end you will deploy a real system — not just install modules.

---

<a id="phase-69"></a>

# PHASE 69 - Odoo Configuration

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Author a production-minded `odoo.conf` (or equivalent CLI flags): database connection, `addons_path`, `admin_passwd`, `dbfilter`, logging, data/filestore paths, and the difference between “works on my machine” and “safe on the internet.”

**WHAT YOU SHOULD KNOW FIRST:** Phase 5 — local config and `addons_path`. Phase 8 — install/upgrade lifecycle. Phase 68 — you can test a module before you trust it in production.

**LEARNING RESOURCES:**

- [Source install (Odoo 18)](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [System configuration / deploy](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [CLI reference](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [odoo/odoo](https://github.com/odoo/odoo) — read `odoo/tools/config.py` for option names

## 69.1 Config Is Policy, Not Convenience

Locally you may launch:

```bash
python3 odoo-bin -d mydb --addons-path=addons,~/addons -i sale --dev=reload
```

That is fine for learning. In production, every flag is a **policy decision**: who may create databases, which DB a website hostname maps to, where attachments live, how loud the logs are, whether the DB manager UI is reachable.

Odoo reads options from (in practice) a configuration file and/or the command line. Packaged installs often use `/etc/odoo/odoo.conf`. Source installs commonly use a file you pass with `-c /path/to/odoo.conf`.

**A MINIMAL PRODUCTION-SHAPED CONF:**

```ini
[options]
admin_passwd = REPLACE_WITH_LONG_RANDOM_SECRET
db_host = False
db_port = False
db_user = odoo
db_password = False
db_name = False
dbfilter = ^mycompany$
list_db = False
addons_path = /opt/odoo/odoo/addons,/opt/odoo/custom
data_dir = /var/lib/odoo
logfile = /var/log/odoo/odoo.log
log_level = info
proxy_mode = True
```

Walk the lines that matter most:

| Option | What it means |
| --- | --- |
| `admin_passwd` | Master password for **database manager** operations (create/drop/duplicate). Not the `admin` user login. Must be strong and secret. |
| `db_*` | How Odoo reaches PostgreSQL. `False`/`None` often means local defaults (Unix socket). Remote Postgres needs host, port, password, and often `db_sslmode`. |
| `addons_path` | Ordered list of addon directories. Enterprise path (if any) typically before Community `addons`, then your custom path. |
| `data_dir` | Filestore and sessions root. Backups must include this directory (Phase 74). |
| `dbfilter` | Regex selecting which DB a request may use — critical for website/portal multi-DB hosts (Phase 71 context). |
| `list_db` | When `False` (with a tight `dbfilter`), you hide the database list from the login screen. |
| `proxy_mode` | Trust `X-Forwarded-*` headers **only** when behind a reverse proxy you control. |
| `logfile` / `log_level` | Where operators look when users say “it’s slow” or “it error’d.” |

**THE DATABASE MANAGER IS A LOADED GUN:**

Anyone who can open `/web/database/manager` and know `admin_passwd` can create or drop databases. On internet-facing hosts: strong `admin_passwd`, prefer `list_db = False`, and often block the manager paths at the reverse proxy once you no longer need them.

## 69.2 One Host, Many Databases — Why `dbfilter` Exists

Odoo is multi-tenant: one server process can serve many PostgreSQL databases. Logged-in backend users pick a DB at login. **Anonymous** website/portal traffic has no login yet — Odoo must decide which DB owns `https://shop.example.com/`.

That decision is `dbfilter`: a regex, optionally with `%h` (hostname) or `%d` (first subdomain). Official guidance: for production multi-DB with website, set `dbfilter` or features break. Once one hostname maps to one DB, lock down listing.

```text
Request Host: shop.acme.com
dbfilter = ^%d$
        |
        v
Candidate DB name: "shop"
        |
        v
Load website + portal for that DB only
```

**Single-company production tip:** set `dbfilter` to an exact name (`^mycompany$`) even if you only have one DB. Ambiguity is how accidental cross-DB mistakes start.

## 69.3 Paths, Secrets, and Environment Split

Treat **dev**, **staging**, and **prod** as different configs that share module code:

- Different `db_name` / `dbfilter`
- Different `admin_passwd` and DB passwords
- Staging may allow `list_db = True`; prod should not
- Never commit real secrets into Git — use env-specific files or secret managers

`addons_path` should point at **version-pinned** code (Git tags/branches), not “whatever was last on the laptop.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write an `odoo.conf` for a single DB named `training` with custom addons under `/opt/odoo/custom`, logging to a file. |
| Medium | Explain in writing the difference between `admin_passwd` and the Odoo user `admin`. |
| Hard | Design a three-file layout (`odoo.dev.conf`, `odoo.staging.conf`, `odoo.prod.conf`) listing which keys differ and why. |

**WHAT THIS UNLOCKS NEXT:** Config names the paths and secrets — but someone still has to install Odoo on a real Linux host, run it as a service user, and keep it alive across reboots. That is Linux deployment.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 69:** You can explain every critical `odoo.conf` key and why `dbfilter` + `admin_passwd` are security controls, not developer conveniences.

> **Phase 69 complete?** [Continue to Phase 70](#phase-70---linux-deployment)

<a id="phase-70"></a>

# PHASE 70 - Linux Deployment

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Describe a sane on-premise layout: dedicated OS user, Python venv or packaged install, PostgreSQL role (not superuser), systemd service, and a repeatable start/stop/upgrade routine aligned with the [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) docs.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — configuration as policy. Phase 5 — you have already run Odoo locally.

**LEARNING RESOURCES:**

- [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [Deploy / system configuration](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [odoo/odoo](https://github.com/odoo/odoo) — `setup/debinstall.sh`, debian packaging hints

## 70.1 From “It Runs in My Shell” to “It Survives Reboot”

A developer session dies when the SSH window closes. Production needs:

1. A **non-root** OS user that owns the code and filestore (commonly `odoo`).
2. PostgreSQL role for that app — **not** the `postgres` superuser (Odoo forbids connecting as `postgres`; docs also warn the DB user must not be a superuser).
3. A **process supervisor** (`systemd`) that starts Odoo on boot and restarts it on crash.
4. Clear directories: code, config, logs, data.

**TYPICAL LAYOUT:**

```text
/opt/odoo/
  odoo/              # Community source (git clone --branch 18.0)
  enterprise/        # optional Enterprise addons
  custom/            # your addons (git)
  venv/              # Python virtualenv
/etc/odoo/
  odoo.conf
/var/lib/odoo/       # data_dir (filestore, sessions)
/var/log/odoo/
  odoo.log
```

Clone Community (and Enterprise if licensed) on the target branch, create a venv, install dependencies (`setup/debinstall.sh` on Debian/Ubuntu or pip from requirements), create the PostgreSQL role with createdb rights only if you still need the DB manager — many prod setups later remove createdb.

## 70.2 systemd Is Your Operator Interface

A minimal unit sketch:

```ini
[Unit]
Description=Odoo 18
After=network.target postgresql.service

[Service]
Type=simple
User=odoo
Group=odoo
ExecStart=/opt/odoo/venv/bin/python /opt/odoo/odoo/odoo-bin -c /etc/odoo/odoo.conf
Restart=on-failure
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

Operators then use:

```bash
sudo systemctl enable --now odoo
sudo systemctl status odoo
sudo journalctl -u odoo -f
```

**Upgrade ritual (module code):** pull Git → restart or rolling restart → run `-u module` in a maintenance window on a known DB — never “edit production files by hand and hope.”

**Install ritual (new server):** OS packages → Postgres role → clone → venv → conf → systemd → create DB → install base apps → deploy custom addons → verify HTTPS (next phases).

## 70.3 Permissions and Blast Radius

- Filestore under `data_dir` must be writable by the service user.
- Config files with passwords: mode `640`, owned by `root:odoo` or `odoo:odoo`.
- Do not run Odoo as root.
- Separate “deploy key” Git access from personal developer SSH keys when possible.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Draw the directory layout above and label which paths belong in backups. |
| Medium | Write a systemd unit for your lab machine and verify `systemctl status` after start. |
| Hard | Document a runbook: “deploy new addon version” with pull, restart, `-u`, smoke tests, and rollback. |

**WHAT THIS UNLOCKS NEXT:** Binding Odoo to port 8069 on localhost is not how the internet should talk to it. You need a reverse proxy and HTTPS.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 70:** You can place Odoo under a service user with systemd and explain why the PostgreSQL role is not a superuser.

> **Phase 70 complete?** [Continue to Phase 71](#phase-71---reverse-proxy--https)

<a id="phase-71"></a>

# PHASE 71 - Reverse Proxy & HTTPS

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Put nginx (or similar) in front of Odoo for TLS termination, HTTP→HTTPS redirect, long timeouts, and websocket/livechat upstreams — with `proxy_mode = True` only when the proxy is trusted.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — `proxy_mode` and `dbfilter`. Phase 70 — Odoo listening on localhost:8069.

**LEARNING RESOURCES:**

- [Deploy — HTTPS section](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Security recommendations](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html) (same deploy doc)
- Official nginx samples in the deploy documentation

## 71.1 Why Odoo Must Not Speak Cleartext on the Internet

Odoo transmits authentication material over HTTP unless you terminate TLS. Official deploy docs are blunt: a secure deployment **must** use HTTPS. The usual pattern:

```text
Browser  --TLS-->  nginx:443  --HTTP-->  127.0.0.1:8069 (Odoo HTTP)
                              --HTTP-->  127.0.0.1:8072 (livechat worker port)
```

nginx holds certificates; Odoo stays on loopback. Enable `proxy_mode = True` so Odoo trusts `X-Forwarded-For` / `X-Forwarded-Proto` from **that** proxy — never enable proxy mode on a naked public port (clients could spoof headers).

## 71.2 What the Proxy Must Do

From the official nginx sketch:

- `upstream odoo` → `127.0.0.1:8069`
- `upstream odoochat` → `127.0.0.1:8072` for websocket/livechat
- Long `proxy_*_timeout` values (Odoo examples use ~720s) for long requests/reports
- Redirect port 80 → 443
- Forward headers: Host, X-Forwarded-Host, X-Forwarded-For, X-Forwarded-Proto
- Optional: serve `/web/static/` with longer cache headers

**COMMON FAILURES:**

| Symptom | Likely cause |
| --- | --- |
| Mixed content / wrong URLs | `proxy_mode` off or missing `X-Forwarded-Proto` |
| Livechat/websocket dies | chat upstream or Upgrade headers missing |
| Timeouts on PDF/report | proxy read timeout too low |
| Wrong DB on website | `dbfilter` not aligned with hostname |

Certificates: Let’s Encrypt via certbot is common for labs; enterprises may use their own PKI. Renewals must be automated — expired certs look like “Odoo is down.”

## 71.3 Hardening at the Edge

Once DB selection is correct:

- Consider blocking `/web/database/*` at nginx in production.
- Rate-limit login paths if under attack.
- Do not expose PostgreSQL to the public internet.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Explain why `proxy_mode = True` is dangerous without a reverse proxy. |
| Medium | Write an nginx server block for `odoo.example.com` with HTTP redirect and two upstreams. |
| Hard | Trace a login request: TLS → nginx → Odoo → Postgres, listing headers at each hop. |

**WHAT THIS UNLOCKS NEXT:** One threaded process behind HTTPS still collapses under real concurrent users. Production needs **workers**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 71:** You can terminate TLS at a proxy, set `proxy_mode` correctly, and name the livechat port’s role.

> **Phase 71 complete?** [Continue to Phase 72](#phase-72---workers--production-configuration)

<a id="phase-72"></a>

# PHASE 72 - Workers & Production Configuration

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Choose multi-processing workers vs the default multi-threaded server; apply official rules of thumb for worker count and RAM; set memory/time/request limits; and explain cron and livechat workers.

**WHAT YOU SHOULD KNOW FIRST:** Phase 71 — proxy in front. Phase 60–63 — transactions and performance (workers amplify bad queries).

**LEARNING RESOURCES:**

- [Builtin server / workers (deploy docs)](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [CLI options](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)

## 72.1 Two Servers Inside One Binary

Odoo’s built-in HTTP stack can run two ways:

**Multi-threaded (`workers = 0`, default):** one process, threads for HTTP and cron. Fine for **development**, demos, and Docker defaults. Python’s GIL limits CPU scaling. Available on more OSes (including Windows for the threaded mode).

**Multi-processing (`workers > 0`):** a pool of worker **processes** for HTTP, plus cron workers, plus an event-driven livechat HTTP worker on an alternate port. Opt-in for **production**. Highly tuned for Linux — **not** available on Windows.

```text
workers = 0 (dev)
  [ one process ]
     +-- HTTP threads
     +-- cron threads

workers = 8 (prod Linux)
  [ master ]
     +-- HTTP worker × 8
     +-- cron worker(s)
     +-- livechat worker :8072
     +-- reaper (kills/restarts runaway workers)
```

## 72.2 Sizing — Official Rules of Thumb

From Odoo’s deploy documentation:

- **Worker count rule of thumb:** `(#CPU × 2) + 1`
- Rough concurrency: **1 worker ≈ 6 concurrent users**
- Cron needs CPU too — count it in capacity planning
- RAM estimate assumes ~20% heavy / ~80% light requests  
  - Heavy worker ≈ ~1 GB  
  - Light worker ≈ ~150 MB  
  - `Needed RAM ≈ #workers × (0.8×150MB + 0.2×1024MB)`

**Worked example (from docs):** 4 CPU, ~60 concurrent users → theoretical workers ≈ 10 by users, ≈ 9 by CPU formula → use **8 HTTP workers + 1 cron**, ~3 GB for Odoo processes alone (Postgres and OS need more).

```ini
[options]
workers = 8
max_cron_threads = 1
limit_memory_soft = 629145600
limit_memory_hard = 1677721600
limit_request = 8192
limit_time_cpu = 600
limit_time_real = 1200
```

**What the limits do:**

| Limit | Role |
| --- | --- |
| `limit_memory_soft` | Worker recycled after request when RSS exceeds soft limit |
| `limit_memory_hard` | Worker killed immediately if hard limit exceeded |
| `limit_request` | Recycle after N requests (fights slow leaks) |
| `limit_time_cpu` / `limit_time_real` | Kill runaway CPU / wall-clock requests |

These are **safety rails**, not substitutes for fixing N+1 queries (Story XIV).

## 72.3 Failure Modes You Must Recognize

- Setting `workers` high on a small RAM box → OOM killer → random 502s
- Forgetting livechat upstream when workers enabled → chat broken
- Running workers on Windows → unsupported; stay threaded or use Linux
- Long PDF reports hitting `limit_time_real` → raise carefully or move heavy jobs to queue/cron
- `proxy_mode` off behind nginx → wrong scheme/host with workers still “up”

**Interview staple:** “How many workers?” — answer with CPU formula, concurrent-user estimate, RAM math, and “measure with monitoring,” not a magic number.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Contrast threaded vs multiprocessing in one paragraph. |
| Medium | Size workers+RAM for 8 vCPU and 120 concurrent users; show arithmetic. |
| Hard | Given OOM kills every afternoon, list three config checks and three code checks before raising memory limits. |

**WHAT THIS UNLOCKS NEXT:** Workers talk to PostgreSQL hard. You need database operations that keep connections, vacuum, and roles healthy.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 72:** You can justify a `workers` value with CPU, concurrency, and RAM — and name what soft/hard memory limits do.

> **Phase 72 complete?** [Continue to Phase 73](#phase-73---postgresql-operations)

<a id="phase-73"></a>

# PHASE 73 - PostgreSQL Operations

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Operate the Postgres side of Odoo: roles and privileges, connection limits vs worker counts, basic vacuum/analyze awareness, and when Odoo and Postgres live on separate hosts.

**WHAT YOU SHOULD KNOW FIRST:** Phase 58–61 — schema and plans. Phase 72 — each worker opens DB connections.

**LEARNING RESOURCES:**

- [Deploy — PostgreSQL section](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [PostgreSQL docs — routine vacuuming](https://www.postgresql.org/docs/current/routine-vacuuming.html)

## 73.1 Odoo Is Only as Healthy as Its Database

Every ORM write becomes SQL. Workers multiply connections. Official sample configs raise `max_connections` thoughtfully (example values around 80 on a small dedicated Postgres). Rough planning:

```text
max_connections ≳ (odoo workers × connections per worker) + cron + admin + margin
```

If Postgres refuses connections, users see errors that look like “Odoo is down.”

**Roles:** create an `odoo` role that owns the application database. Do **not** use a superuser. For locking down the DB manager: no `CREATEDB` on the app role and a different owner strategy — see deploy docs.

**Remote Postgres:** configure `pg_hba.conf` and `listen_addresses` carefully; prefer SSL (`db_sslmode` in Odoo: `require` / `verify-full` as appropriate). Prefer private network over public exposure.

## 73.2 Maintenance Without Superstition

- **Autovacuum** usually handles dead tuples; giant bulk deletes/imports may need attention.
- **ANALYZE** keeps the planner honest after large data shape changes (Story XIV).
- Watch disk for WAL and data growth — a full disk stops Odoo cold.
- Extensions and custom SQL in modules must be upgrade-safe (Story XVII).

**Operator checklist weekly:** connections in use, slow queries, disk %, backup success (next phase), checkpoint/WAL warnings.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List why the Odoo DB user must not be a superuser. |
| Medium | Given `workers = 8`, propose a `max_connections` floor and justify. |
| Hard | Write a one-page ops note: separate DB host, SSL mode, and firewall rules. |

**WHAT THIS UNLOCKS NEXT:** A perfect Postgres that you cannot restore after ransomware or human error is still a single point of failure. Backups.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 73:** You can connect worker count to Postgres connections and state the non-superuser rule.

> **Phase 73 complete?** [Continue to Phase 74](#phase-74---backups--restore)

<a id="phase-74"></a>

# PHASE 74 - Backups & Restore

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Design and test backups that include **both** the PostgreSQL dump **and** the filestore; practice restore on a spare host; define RPO/RTO in plain language.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — `data_dir`. Phase 73 — Postgres ownership.

**LEARNING RESOURCES:**

- [Deploy documentation](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html) (security + ops context)
- [PostgreSQL backup/restore](https://www.postgresql.org/docs/current/backup.html)
- Odoo database manager backup (dev/small) vs `pg_dump` (production discipline)

## 74.1 Two Halves of One System

Odoo state is not “just the database.”

```text
BUSINESS STATE
  ├── PostgreSQL database  (records, settings, attachments metadata)
  └── Filestore under data_dir/filestore/<db>/  (binary attachments)

Restore only the dump  →  broken attachment links
Restore only filestore →  orphan files, empty business data
```

A backup is valid only if **both** pieces match the same point in time as closely as your RPO allows.

**RPO (Recovery Point Objective):** how much data you can afford to lose (e.g. 24h if nightly backups).  
**RTO (Recovery Time Objective):** how long until the business is usable again.

## 74.2 Production-Grade Pattern

1. `pg_dump` (custom or plain) of the DB — or continuous WAL archiving for tighter RPO.
2. Snapshot/rsync/tar of `data_dir` filestore for that DB.
3. Store **off-box** (another machine, object storage) — backups on the same disk die with the disk.
4. Encrypt backups if they leave your secure network.
5. **Restore test** monthly on a staging host. An untested backup is a rumor.

```bash
# Sketch — adapt paths/users; run under maintenance discipline
pg_dump -Fc -U odoo mycompany > /backup/mycompany-$(date +%F).dump
tar -C /var/lib/odoo/filestore -czf /backup/mycompany-filestore-$(date +%F).tgz mycompany
```

Odoo’s web database manager can dump a DB for small/lab use; serious production prefers scripted `pg_dump` + filestore with monitoring of job success.

## 74.3 Restore Drill

1. Provision Postgres + empty data_dir.
2. Restore dump into a new DB name.
3. Extract filestore into `data_dir/filestore/<dbname>/`.
4. Point `odoo.conf` at the restored DB; start Odoo.
5. Smoke-test: login, open a record with an attachment, run a report, confirm cron.

Document who can restore, where keys live, and how long the last drill took.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Explain why filestore must join DB backups. |
| Medium | Write a backup script outline and a restore checklist. |
| Hard | Define RPO/RTO for a company that invoices daily, and size backup frequency accordingly. |

**WHAT THIS UNLOCKS NEXT:** Not every team runs bare metal. Odoo.sh is the official PaaS path many projects use instead of self-managed Linux.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 74:** You can define a backup that includes dump + filestore and describe a restore drill.

> **Phase 74 complete?** [Continue to Phase 75](#phase-75---odoosh)

<a id="phase-75"></a>

# PHASE 75 - Odoo.sh

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Explain what Odoo.sh provides (Git-based builds, staging/production databases, CI-ish checks) versus self-hosted Linux, and when each fits.

**WHAT YOU SHOULD KNOW FIRST:** Phase 70–74 — you understand what Odoo.sh is automating for you.

**LEARNING RESOURCES:**

- [Odoo.sh documentation hub](https://www.odoo.com/documentation/18.0/administration/odoo_sh.html) (follow current official pages for branches, builds, and databases)
- [Odoo developer docs](https://www.odoo.com/documentation/18.0/developer.html)

## 75.1 Git Push as Deploy

Odoo.sh is Odoo’s cloud platform: you connect a Git repository; pushes build servers; branches map to environments (typically production + staging/dev databases). You still write the same modules — the platform owns much of OS, Postgres, HTTPS, and backup plumbing.

```text
feature branch  -->  build  -->  test DB
staging branch  -->  build  -->  staging DB (often prod copy)
production      -->  build  -->  live DB
```

You trade control for speed: less SSH DIY, more platform conventions (manifest versions, test status, build logs).

## 75.2 What You Still Own

- Module quality, security, and upgrade scripts
- Not stuffing secrets into Git
- Reviewing build failures and test red builds
- Functional UAT on staging before production merges
- Understanding limits (custom system packages, exotic daemons)

**When self-host instead:** strict data residency, unusual network integrations, heavy custom infra, or org policy against PaaS.  
**When Odoo.sh fits:** standard Odoo apps + custom addons, team already on Git, want staging clones without inventing ops from scratch.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List three responsibilities Odoo.sh takes vs three you keep. |
| Medium | Design a branch strategy: feature → staging → production. |
| Hard | Compare cost/control of Odoo.sh vs the Linux stack from Phases 70–74 for a 40-user SME. |

**WHAT THIS UNLOCKS NEXT:** Containers are another packaging story — Docker concepts for Odoo without pretending containers erase ops.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 75:** You can describe Odoo.sh’s Git→build→DB loop and what it does not absolve you from.

> **Phase 75 complete?** [Continue to Phase 76](#phase-76---docker-concepts-for-odoo)

<a id="phase-76"></a>

# PHASE 76 - Docker Concepts for Odoo

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Reason about official [odoo/docker](https://github.com/odoo/docker) images: Odoo container + Postgres container, volumes for filestore and DB data, env vars, and the fact that default images lean on the **threaded** server unless you configure otherwise.

**WHAT YOU SHOULD KNOW FIRST:** Phase 70–74 — same concerns, different packaging.

**LEARNING RESOURCES:**

- [odoo/docker](https://github.com/odoo/docker)
- [Deploy docs — workers note for Docker](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) for non-container comparison

## 76.1 Containers Package Processes, Not Magic

A typical compose mental model:

```text
[odoo container]  --TCP-->  [postgres container]
       |                         |
   volume: filestore         volume: pgdata
       |
   bind/mount: custom addons
```

You still need: backups of **both** volumes, HTTPS in front (Traefik/nginx/Caddy), resource limits, and upgrade discipline. Docker does not remove `dbfilter`, secrets, or worker sizing — it changes how you start processes.

Official images are a starting point; read their docs for env vars (`HOST`, `USER`, `PASSWORD`, etc.) and mounted addon paths. Default worker mode for containers is often threaded (`workers = 0`) per deploy docs — production containers on Linux can enable multiprocessing if the image/process setup allows, with the same RAM math as Phase 72.

## 76.2 Pitfalls Specific to Containers

- Losing unnamed volumes = losing filestore or Postgres
- Running as root inside casually
- Putting production secrets in compose files committed to Git
- “It works on Docker Desktop” ≠ production kernel/cgroup limits
- Upgrading the image tag without a tested `-u` / migration plan

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Sketch compose services for odoo + db + proxy. |
| Medium | List which volumes must be in the backup set. |
| Hard | Write a short ADR: Docker Compose vs bare systemd for a client with one VPS. |

**WHAT THIS UNLOCKS NEXT:** Whatever you deploy on, you need eyes — monitoring and logs — before users become your alerting system.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 76:** You can map containers to the same backup and proxy requirements as bare metal.

> **Phase 76 complete?** [Continue to Phase 77](#phase-77---monitoring--logs)

<a id="phase-77"></a>

# PHASE 77 - Monitoring & Logs

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Read Odoo and nginx/Postgres logs under load; watch worker memory kills, HTTP 5xx rates, disk, and backup job success; set a minimal alert set for production.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — logging mindset. Phase 72 — worker limits leave fingerprints in logs.

**LEARNING RESOURCES:**

- [CLI / logging](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Deploy documentation](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)

## 77.1 Logs Are the First Timeline

Configure `logfile` and a sensible `log_level` (`info` for prod; temporarily `debug` for incidents). Correlate:

```text
nginx access/error  →  odoo.log worker events  →  postgres log
        |                      |                      |
   502/504 timing        traceback / MemoryError   fatal / connection
```

Workers recycled by `limit_memory_*` or time limits often precede “random” user errors. Cron failures hide in logs until invoices stop generating.

## 77.2 Minimum Useful Monitoring

| Signal | Why |
| --- | --- |
| Process up (systemd/container) | Cold downtime |
| HTTP 5xx rate | User-visible failure |
| Disk % on data + PG | Silent death when full |
| Backup job success | Future you |
| CPU / RAM / load | Capacity before meltdown |
| Certificate expiry | Avoidable outage |

Optional deeper: slow query logs, pg_stat_activity, APM — after basics work.

**Alerting rule:** pages should be rare and actionable. Email on backup failure; page on site down.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given a traceback timestamp, list which three log files you open first. |
| Medium | Design a five-alert starter pack for a 2-vCPU Odoo VM. |
| Hard | Walk an incident: “reports timeout after 10 minutes” using limits from Phase 72 and proxy timeouts from Phase 71. |

**WHAT THIS UNLOCKS NEXT:** You can keep a system alive — Story XVI project asks you to deploy one end-to-end. After that, Story XVII faces the other half of operations: **upgrades** without destroying live data.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 77:** You can name a minimal monitor set and correlate nginx/Odoo/Postgres logs during an incident.

> **Phase 77 complete?** [Build the Story XVI project](#story-project---deploy-an-odoo-system) · [Continue to Story XVII](#story-xvii--upgrades--maintenance)

<a id="story-project---deploy-an-odoo-system"></a>

# STORY PROJECT — Deploy an Odoo System

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Deploy a working Odoo environment (Linux **or** Docker Compose **or** Odoo.sh) with HTTPS (or a documented local TLS stand-in for labs), sane config, backup/restore drill, and a short runbook — mapped to [`Projects.md`](../guides/Projects.md) when a matching card exists.

## The Brief

Take a module you already trust from earlier stories (or a small custom addon) and put it on a **non-laptop** path:

1. Write production-shaped `odoo.conf` (dbfilter, admin_passwd, paths, proxy_mode as appropriate).
2. Run behind a reverse proxy with HTTPS **or** document why your lab uses a tunnel/self-signed cert.
3. Enable workers **if** on Linux multiprocessing; otherwise document threaded mode limits.
4. Perform backup of DB **and** filestore; restore onto a second database name and prove attachments open.
5. Capture logs for one controlled failure (e.g. stop Postgres briefly) and write what you saw.
6. Deliver a one-page runbook: start/stop, deploy addon, backup, restore, rollback.

**Acceptance:** a second person (or future you in a week) can follow the runbook without Slack archaeology.

**WHAT COMES NEXT:** Deployment keeps today’s version alive. Businesses change modules and Odoo versions. Story XVII — Upgrades & Maintenance — teaches how to change a living system without gambling the database.

---

# STORY XVII — UPGRADES & MAINTENANCE

**Track:** Upgrades

A deployed Odoo that never changes is rare. Fields get renamed, workflows tighten, Odoo itself ships a new major version. Story XVII teaches the discipline that keeps living databases alive: **module versioning**, schema evolution, data migrations, major version upgrades, upgrade-safe customization, and debugging legacy modules.

The golden rule: **never invent a one-off SQL fix on production that you cannot replay on a clone.**

---

<a id="phase-78"></a>

# PHASE 78 - Module Versioning

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Use `__manifest__.py` `version` intentionally (series + module revision), know when `-u` runs, and relate version bumps to migration script folders.

**WHAT YOU SHOULD KNOW FIRST:** Phase 8 — module lifecycle. Phase 65–66 — tests that should pass before and after `-u`.

**LEARNING RESOURCES:**

- [Module manifests](https://www.odoo.com/documentation/18.0/developer/reference/backend/module.html)
- [Upgrades reference](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)
- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)

## 78.1 Version Is a Contract with the Database

In the manifest:

```python
{
    "name": "Library",
    "version": "18.0.1.2.0",
    "depends": ["base", "mail"],
    ...
}
```

Common Odoo convention: `odoo_series.major.minor.patch` (exact house style varies by team — pick one and stay consistent). The series prefix (`18.0`) signals which Odoo generation the module targets.

When you change Python models, XML, or security, you typically:

1. Bump `version`
2. Ship code
3. Run `odoo-bin -u library -d thedb` (or install update from Apps)

`-u` reloads module data/updates according to rules (`noupdate`, etc.) and can trigger **migration scripts** keyed to version directories (Phase 80).

**Without a bump:** teammates and CI cannot tell “new code needs upgrade.”  
**With a careless bump and no migrations:** `-u` may create columns but leave old data stranded.

## 78.2 What an Upgrade Pass Actually Does

```text
Detect module version change
        |
        v
Run pre-migrate scripts (if any) for crossing versions
        |
        v
Update registry / schema from Python field definitions
        |
        v
Reload XML/CSV per noupdate rules
        |
        v
Run post-migrate scripts
        |
        v
Store new module version in the database
```

Interview answer: “We bump the manifest, write migrations when data must move, test `-u` on a staging clone, then schedule production.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Read a third-party module’s version history and list what each bump likely meant. |
| Medium | Propose a versioning policy for a team (when to bump patch vs minor). |
| Hard | Explain how CI should fail if models change but version did not. |

**WHAT THIS UNLOCKS NEXT:** Version bumps meet reality when columns rename or types change — schema changes.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 78:** You can explain why manifest version and `-u` are paired, and what happens in an upgrade pass at a high level.

> **Phase 78 complete?** [Continue to Phase 79](#phase-79---schema-changes)

<a id="phase-79"></a>

# PHASE 79 - Schema Changes

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Evolve fields safely: add columns, rename with data preservation, change types carefully, and avoid “delete field in prod on Friday” disasters.

**WHAT YOU SHOULD KNOW FIRST:** Phase 9–12 — fields. Phase 78 — versioning.

**LEARNING RESOURCES:**

- [ORM fields](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)

## 79.1 ORM Schema Is Not Free-Form SQL

When you add `priority = fields.Selection(...)`, an upgrade usually creates the column. When you **remove** a field from Python, Odoo may leave the column or clean it depending on version/tools — never assume production data is disposable.

**Safe patterns:**

| Change | Approach |
| --- | --- |
| Add field | Add field + bump version + `-u`; set defaults carefully |
| Rename field | Add new field → migrate data (Phase 80) → deprecate old → remove later |
| Change Selection keys | Map old keys to new in migration; do not silently orphan values |
| Char → Many2one | Create relation, migrate values, then switch UI |
| Shorten size / change type | Validate existing data first on a clone |

**Dangerous patterns:** drop column with live reports depending on it; reuse a column name for a different meaning; change `company_id` semantics casually.

```text
BAD:  rename field in Python only, hope values follow
GOOD: pre-migrate copies old_column → new_column, then model uses new name
```

## 79.2 Staging Clone Is Mandatory

Copy production (or a sanitized subset) → run `-u` → run tests → open critical forms → only then plan the maintenance window. Schema surprises love large tables and weird historical NULLs.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List three schema changes that need a migration script, not just `-u`. |
| Medium | Plan renaming `x_code` → `legacy_code` without downtime longer than a short window. |
| Hard | Design a two-release deprecation for removing a field used in QWeb reports. |

**WHAT THIS UNLOCKS NEXT:** Schema is structure; **data migrations** move the meaning sitting in the rows.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 79:** You prefer expand-migrate-contract over in-place destructive renames.

> **Phase 79 complete?** [Continue to Phase 80](#phase-80---data-migrations)

<a id="phase-80"></a>

# PHASE 80 - Data Migrations

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Write and test upgrade scripts (`migrations/` / official upgrade script API) that move data idempotently where possible, and know pre vs post migrate timing.

**WHAT YOU SHOULD KNOW FIRST:** Phase 79 — schema strategy. Phase 65 — TransactionCase for business rules after migrate.

**LEARNING RESOURCES:**

- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)
- [Upgrade utils](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_utils.html)
- [Upgrades index](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)

## 80.1 Why Migrations Exist

`-u` can create a new column. It will not invent business meaning: “every old `state='open'` becomes `'confirmed'`,” or “copy `old_code` into `legacy_code`.” That is **your** script.

Classic layout (know the exact API for your Odoo series — official upgrade scripts docs are authoritative):

```text
my_module/
  migrations/
    18.0.1.1.0/
      pre-migrate.py
      post-migrate.py
```

**Pre-migrate:** often runs before schema sync — good for renaming columns SQL-side so ORM does not lose data.  
**Post-migrate:** after ORM schema — good for filling new fields, recomputing, cleaning.

```python
# Conceptual pre-migrate sketch — verify against current upgrade script docs
def migrate(cr, version):
    cr.execute(
        """
        UPDATE library_book
           SET legacy_code = old_code
         WHERE legacy_code IS NULL
           AND old_code IS NOT NULL
        """
    )
```

## 80.2 Idempotency and Reality

Scripts may be re-run in recovery scenarios. Prefer:

- `WHERE new_col IS NULL AND old_col IS NOT NULL`
- Existence checks before DDL
- Logging row counts

Never assume a laptop DB’s shape matches production. Test on a **clone with ugly data**.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write SQL that copies `old_code` → `legacy_code` only when needed. |
| Medium | Design pre vs post steps for replacing a Char status with Selection. |
| Hard | Make a migration that also fixes invalid emails found during the move, with a report of skipped rows. |

**WHAT THIS UNLOCKS NEXT:** Module migrations are one ladder. Jumping **Odoo 16 → 17 → 18** is a bigger ladder — major version upgrades.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 80:** You can place logic in pre vs post migrate and test on a clone before production.

> **Phase 80 complete?** [Continue to Phase 81](#phase-81---odoo-version-upgrades)

<a id="phase-81"></a>

# PHASE 81 - Odoo Version Upgrades

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Plan a major Odoo version upgrade: inventory custom modules, check deprecated APIs, use official upgrade paths/tools where applicable, and rehearse on staging.

**WHAT YOU SHOULD KNOW FIRST:** Phase 78–80 — module-level discipline. Phase 82 will deepen upgrade-safe coding.

**LEARNING RESOURCES:**

- [Upgrades reference](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)
- [Odoo 18 developer docs](https://www.odoo.com/documentation/18.0/developer.html)
- Platform upgrade offerings / Odoo.sh upgrade docs (official pages for your edition)

## 81.1 Major Versions Change the Platform

A major upgrade can touch: ORM APIs, view architectures, JS/OWL, accounting engines, website builders, and removed modules. Custom code that monkey-patched core is the first to burn.

**Planning checklist:**

1. Inventory installed modules (standard + OCA + custom).
2. Ensure custom modules declare the target series and pass tests on it.
3. Read release notes / migration notes for broken changes.
4. Clone production → upgrade path on staging (often hop versions as required by tooling).
5. Fix custom modules; retest critical flows (quote→invoice, payments, inventory).
6. Schedule production with rollback plan (Phase 74 backups taken **immediately before**).

```text
Prod backup
    |
    v
Staging restore → platform upgrade scripts → -u customs → UAT
    |
    v
Fix → repeat until green
    |
    v
Maintenance window on prod
```

## 81.2 Community vs Enterprise Notes

Enterprise upgrades may involve Odoo’s upgrade service or Odoo.sh flows. Community teams often combine OpenUpgrade-style community tooling (evaluate carefully for your version) with manual custom work. Prefer **official** docs and supported paths for the edition you run; do not gamble production on a blog post.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List five areas of a custom Sales module that might break on a major upgrade. |
| Medium | Write an upgrade project plan with roles: DBA, functional tester, developer. |
| Hard | Given three brittle `_inherit` overrides of private methods, propose a safer redesign before upgrading. |

**WHAT THIS UNLOCKS NEXT:** Surviving upgrades is easier if you wrote **upgrade-safe customizations** from day one.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 81:** You can outline a major-version upgrade rehearsal with backup and UAT gates.

> **Phase 81 complete?** [Continue to Phase 82](#phase-82---upgrade-safe-customization)

<a id="phase-82"></a>

# PHASE 82 - Upgrade-Safe Customization

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Prefer extension (`_inherit`, xpath, intentional APIs) over editing core files; avoid private method dependence; keep overrides thin and tested.

**WHAT YOU SHOULD KNOW FIRST:** Phases 32–35 — inheritance. Phase 81 — what breaks on upgrades.

**LEARNING RESOURCES:**

- [Inheritance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#inheritance)
- [View inheritance](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [odoo/odoo](https://github.com/odoo/odoo) — study how official modules extend each other

## 82.1 The Customization Ladder (Safest First)

1. **Configuration** — settings, studio/automated actions (when appropriate), options
2. **Data** — secure XML with `noupdate` discipline
3. **Extension modules** — `_inherit`, view xpath, new models related to standard ones
4. **Copy-paste of standard module** — last resort; you inherit every upstream bugfix as a merge hell
5. **Editing `addons/sale` in place** — forbidden in professional work

```text
NEED: extra field on sale.order
SAFE: custom module _inherit sale.order + xpath on form
UNSAFE: edit sale/models/sale_order.py on the server
```

## 82.2 Thin Overrides, Public Methods, Tests

- Call `super()` unless you have a documented reason not to
- Prefer hooking documented methods / adding new methods called from buttons you own
- If you must override, write TransactionCase covering the flow (Story XV)
- JS patches: same rule — patch narrowly (Story XIII)

Upgrade-safe code is not “clever.” It is **boring, tested, and upstream-friendly.**

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Find one override in a sample module and judge if it calls `super()`. |
| Medium | Refactor a hypothetical core edit into an extension module outline. |
| Hard | Review a module that overrides `create` on `account.move` and list upgrade risks. |

**WHAT THIS UNLOCKS NEXT:** Real projects inherit **legacy** modules written before these rules. Debugging them is Phase 83.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 82:** You can argue against editing core and show an extension-shaped alternative.

> **Phase 82 complete?** [Continue to Phase 83](#phase-83---debugging-legacy-modules)

<a id="phase-83"></a>

# PHASE 83 - Debugging Legacy Modules

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Triage old modules: map depends, find brittle inherits, isolate monkey patches, add characterization tests before changing behavior.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — debugging. Phase 82 — what “good” looks like.

**LEARNING RESOURCES:**

- [Testing](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Logging / CLI](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)

## 83.1 Legacy Means “Unknown Invariants”

Before rewriting, **characterize**:

1. What models does it touch?
2. Which views/xpath are load-bearing?
3. Are there SQL constraints or raw `cr.execute`?
4. Does it patch JS?
5. Which business flows depend on it (ask users)?

Add tests that lock current behavior — even ugly behavior — so refactors do not “fix” the only process accounting still uses.

## 83.2 Common Legacy Smells

| Smell | Risk |
| --- | --- |
| `sudo()` everywhere | Security holes |
| Overridden `create` without `super` | Missed standard side effects |
| XPath on brittle absolute paths | Breaks when standard view changes |
| Copy of entire standard form | Unmergeable |
| No manifest version discipline | Mystery production state |
| Hardcoded IDs instead of xmlids | DB-specific landmines |

**Strategy:** strangler pattern — wrap, add tests, replace piece by piece, delete dead code only when coverage exists.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given a legacy manifest, list depends and guess blast radius. |
| Medium | Write two characterization tests for a buggy `action_confirm` override. |
| Hard | Propose a three-sprint plan to make a legacy module upgrade-safe for 18.0. |

**WHAT THIS UNLOCKS NEXT:** Story XVII project — upgrade an existing module end-to-end. Then Story XVIII steps back from mechanics to **engineering judgment**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 83:** You characterize before you rewrite, and you can name legacy smells that break upgrades.

> **Phase 83 complete?** [Build the Story XVII project](#story-project---upgrade-an-existing-module) · [Continue to Story XVIII](#story-xviii--real-odoo-engineering)

<a id="story-project---upgrade-an-existing-module"></a>

# STORY PROJECT — Upgrade an Existing Module

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Take a module with intentional “old” schema, bump version, write migrations, run `-u` on a clone, and prove data survived — see also [`Projects.md`](../guides/Projects.md).

## The Brief

1. Start from a module that has a Char field you will replace or rename.
2. Bump manifest version.
3. Add pre/post migrate scripts that preserve data.
4. Update views/security as needed.
5. Run tests before and after `-u` on a database with seed rows.
6. Document rollback (restore backup) if upgrade fails.

**Acceptance:** a reviewer can read your migration notes and reproduce the upgrade on a fresh DB with fixtures.

**WHAT COMES NEXT:** You can deploy and upgrade. Clients still ask harder questions: should we customize at all? Story XVIII — Real Odoo Engineering — builds that judgment.

---

# STORY XVIII — REAL ODOO ENGINEERING

**Track:** Engineering Practice

Stories I–XVII taught you to build, secure, integrate, test, deploy, and upgrade. Story XVIII is about **judgment**: turning messy requirements into ERP design, splitting modules, choosing configuration vs customization vs integration, writing maintainable code, and collaborating with Git and code review like a professional team.

This is the difference between “I can write a module” and “I can be trusted with a production ERP.”

---

<a id="phase-84"></a>

# PHASE 84 - Requirements → ERP Design

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Interview stakeholders, map processes to Odoo apps, identify master data vs transactions, and produce a design that names modules and ownership — before writing models.

**WHAT YOU SHOULD KNOW FIRST:** Story I — ERP thinking. Phase 3 — core apps flow. Stories IV–IX — what custom modules can do.

**LEARNING RESOURCES:**

- [Odoo functional apps overview](https://www.odoo.com/documentation/18.0/) (Applications section)
- [`Projects.md`](../guides/Projects.md) — process-map style deliverables
- [`Interview.md`](../guides/Interview.md) — explaining design under pressure

## 84.1 Code Is the Last Step

A client says: “We need a better approval for vendor bills.” A junior opens `models/` and invents `x_approval`. An engineer asks:

- Who requests, who approves, who pays?
- Is this Accounting, Purchase, or a custom committee?
- Does standard Odoo already cover it with approvals / studio / tiers?
- What reporting must remain true for auditors?

**Design artifacts (lightweight):**

```text
Process map:  request → approve → post → pay
Master data:  vendors, products, analytic accounts
Transactions: bills, payments
Apps:         purchase? account? hr? custom?
Risks:        multi-company, tax, existing custom modules
```

Only then: module boundaries (Phase 85) and config vs code (Phase 86).

## 84.2 Requirements Smell Test

| Statement | Engineer hears |
| --- | --- |
| “Like Excel but shared” | Need audit trail, concurrency, permissions |
| “Just one more field” | Often a new process hiding |
| “Copy our old system” | Migrate process debt |
| “Make it flexible” | Undefined rules — push for examples |

Always collect **examples**: three real documents, three edge cases, one “this must never happen.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Turn “manage company cars” into master data vs transactions. |
| Medium | Interview script for a leave-approval ERP feature (10 questions). |
| Hard | Write a one-page design for quote→delivery→invoice with two companies sharing a catalog. |

**WHAT THIS UNLOCKS NEXT:** Design implies **module architecture** — how addons split and depend.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 84:** You refuse to start coding until process, apps, and risks are named.

> **Phase 84 complete?** [Continue to Phase 85](#phase-85---module-architecture)

<a id="phase-85"></a>

# PHASE 85 - Module Architecture

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Split features into addons with a clean `depends` graph; avoid god-modules; separate glue from core business.

**WHAT YOU SHOULD KNOW FIRST:** Phase 7–8 — anatomy and depends. Phase 84 — requirements map.

**LEARNING RESOURCES:**

- [Modules](https://www.odoo.com/documentation/18.0/developer/reference/backend/module.html)
- Study `depends` in [odoo/odoo](https://github.com/odoo/odoo) official apps

## 85.1 Depends Are Architecture

```text
BAD:  everything_custom  depends on  sale, stock, account, hr, website, ...
GOOD:
  my_partner_ext          → base
  my_sale_approval        → sale, my_partner_ext
  my_sale_stock_bridge    → my_sale_approval, stock
```

Small modules:

- Install only what a DB needs
- Upgrade blast radius stays small
- Tests stay focused
- Teams can own areas

**Glue modules** connect two apps without forcing every DB to install both stacks until needed.

## 85.2 Naming and Layers

- `*_account` for accounting specifics
- Avoid circular depends (A→B→A)
- Keep HTTP/portal in modules that already depend on `website`/`portal`
- Shared abstract models in a thin base module

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Draw depends for library + portal borrower history. |
| Medium | Split a god-module list of models into 3 manifests. |
| Hard | Detect a circular depends risk in a hypothetical graph and fix it. |

**WHAT THIS UNLOCKS NEXT:** Even perfect module splits fail if you customized something that should have been **configuration**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 85:** You can sketch a depends graph that keeps upgrade and install blast radius small.

> **Phase 85 complete?** [Continue to Phase 86](#phase-86---choosing-customization-vs-configuration)

<a id="phase-86"></a>

# PHASE 86 - Choosing Customization vs Configuration

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Decide when settings, automated actions, studio/optional tools, or standard workflows beat writing Python — and when they do not.

**WHAT YOU SHOULD KNOW FIRST:** Phase 39 — automated actions. Phase 84 — requirements.

**LEARNING RESOURCES:**

- Odoo Applications documentation for the apps you configure
- [Automated actions / studio](https://www.odoo.com/documentation/18.0/) (edition-dependent features — verify what your edition includes)

## 86.1 Configuration First

Prefer configuration when:

- Standard fields/workflows already express the rule
- Business users must change thresholds without deploys
- The rule is simple (email on stage change, required field via form)

Prefer **customization** when:

- Invariants must be enforced server-side with tests
- Performance-sensitive logic
- Complex multi-model transactions
- Security must not rely on a UI-only rule
- You need upgrade-safe, reviewable code in Git

```text
“Discount over 20% needs manager”
  → try standard approval / activity / group button first
  → customize if audit + multi-company + pricing engine demand it
```

## 86.2 The Hidden Cost of “No Code”

Automated actions and studio edits can become invisible spaghetti: no PR review, no tests, broken after upgrades. If configuration grows complex, **graduate it to a module** with tests.

**Interview scenario:** Client wants a field “Urgent” that emails the CEO. Your answer should compare: mail subtype / automated action / custom `write()` override — with security and upgrade notes.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Give one example best as config and one as code. |
| Medium | Critique a DB with 40 automated actions and propose graduation criteria. |
| Hard | Decision matrix for 5 real requests (you invent) with config/custom/integrate columns. |

**WHAT THIS UNLOCKS NEXT:** Sometimes the right answer is neither config nor custom Odoo code — it is **integration**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 86:** You can defend “don’t write a module” as an engineering decision.

> **Phase 86 complete?** [Continue to Phase 87](#phase-87---choosing-customization-vs-integration)

<a id="phase-87"></a>

# PHASE 87 - Choosing Customization vs Integration

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Decide when another system should own a fact (payments, WMS, tax engine, e-commerce) and Odoo should integrate — with idempotency and ownership clarity from Stories XI–XII.

**WHAT YOU SHOULD KNOW FIRST:** Phases 46–51 — APIs and integrations. Phase 86 — config vs custom.

**LEARNING RESOURCES:**

- [Web services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)

## 87.1 Who Owns the Truth?

| Fact | Often owned by |
| --- | --- |
| Chart of accounts / invoices | Odoo Accounting |
| Card capture / PCI | Payment PSP |
| Carrier rates | Shipping provider |
| Marketing email blasts | ESP |
| Deep e-commerce storefront | Sometimes website, sometimes external shop |

**Customize inside Odoo** when Odoo is the system of record and logic is ERP-native.  
**Integrate** when another system already specializes, must stay compliant, or already holds the master data.

## 87.2 Integration Costs You Must Price

- Auth, retries, idempotency (Phase 49)
- Mapping and reconciliation
- Partial failure UX
- Monitoring and replay tools
- Duplicate prevention

**Bad compromise:** half-building a payment gateway inside Odoo “to avoid Stripe fees.”  
**Good compromise:** Odoo owns orders/invoices; PSP owns card data; webhooks reconcile.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | For “sync HubSpot leads,” say who owns the lead and why. |
| Medium | Design ownership for inventory between Odoo and an external WMS. |
| Hard | Write an ADR: customize vs integrate for tax calculation in 3 countries. |

**WHAT THIS UNLOCKS NEXT:** Whatever you build, someone else must read it next year — maintainable Odoo code.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 87:** You can name system-of-record ownership and the operational cost of integrations.

> **Phase 87 complete?** [Continue to Phase 88](#phase-88---maintainable-odoo-code)

<a id="phase-88"></a>

# PHASE 88 - Maintainable Odoo Code

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Write modules that future teammates can navigate: clear models, thin controllers, tested business methods, honest names, and no cleverness that fights the ORM.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–VI, XV — craft + tests. Phase 82 — upgrade-safe patterns.

**LEARNING RESOURCES:**

- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Testing](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)

## 88.1 Maintainability Checklist

- Names match business language (`action_confirm`, not `do_stuff`)
- Business rules in model methods, not buried only in XML `button` contexts
- Domains and record rules readable
- No unexplained `sudo()`
- Avoid huge `create`/`write` overrides — extract helpers
- Prefetch-friendly loops (Story XIV)
- Tests for every invariant you would hate to lose

```python
# Prefer
def action_approve(self):
    self._check_can_approve()
    self.write({"state": "approved"})
    self._notify_requester()

# Avoid
def write(self, vals):
    # 200 lines of unrelated side effects
    return super().write(vals)
```

## 88.2 Documentation That Helps

README: purpose, depends, config steps, known limits.  
Code comments: *why*, not *what*.  
Migration notes: when you bump versions.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Rename three vague methods on a sample module to business verbs. |
| Medium | Split a fat `write()` override into helpers with tests. |
| Hard | Review a module and produce a maintainability debt list prioritized by upgrade risk. |

**WHAT THIS UNLOCKS NEXT:** Maintainable code still needs a **Git workflow** so teams do not overwrite each other.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 88:** You can list concrete habits that make an Odoo module reviewable six months later.

> **Phase 88 complete?** [Continue to Phase 89](#phase-89---git-workflow)

<a id="phase-89"></a>

# PHASE 89 - Git Workflow

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Use branch → review → merge → deploy habits for Odoo addons; keep secrets out of Git; align with Odoo.sh or self-hosted release tags.

**WHAT YOU SHOULD KNOW FIRST:** Phase 75 — Odoo.sh Git builds. [`Git.md`](./Git.md) basics if needed.

**LEARNING RESOURCES:**

- [`Git.md`](./Git.md) Phases 2–3
- [`Projects.md`](../guides/Projects.md) Git checkpoints
- [Odoo.sh docs](https://www.odoo.com/documentation/18.0/administration/odoo_sh.html)

## 89.1 Branches Match Environments

```text
feature/leave-approval  →  PR + tests
develop / staging       →  UAT database
main / production       →  production deploy
```

Commit **addon directories**, not whole filestore dumps. Never commit `odoo.conf` passwords or API keys — use examples (`odoo.conf.example`).

Tag releases that match manifest versions when you ship.

## 89.2 What Belongs in the Repo

| Include | Exclude |
| --- | --- |
| Modules, tests, README | Filestore, sessions |
| Example config | Real secrets |
| Upgrade notes | Production DB dumps (use secure backup storage) |

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write a `.gitignore` sketch for an Odoo project. |
| Medium | Describe PR rules: tests required, who approves security-sensitive modules. |
| Hard | Design hotfix flow when production needs a one-line fix during peak hours. |

**WHAT THIS UNLOCKS NEXT:** PRs only help if **code review** catches Odoo-specific landmines.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 89:** You can describe a branch/PR/deploy path that never commits secrets.

> **Phase 89 complete?** [Continue to Phase 90](#phase-90---code-review)

<a id="phase-90"></a>

# PHASE 90 - Code Review

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Review Odoo PRs for security, upgrade risk, performance, XML/data hazards, and missing tests — not just style.

**WHAT YOU SHOULD KNOW FIRST:** Phases 27–31 — security. Phase 82 — upgrade safety. Story XIV — performance.

**LEARNING RESOURCES:**

- [Security](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [`Interview.md`](../guides/Interview.md) — explaining trade-offs

## 90.1 Odoo-Specific Review Lens

Ask, every PR:

1. **ACL / record rules** — new models covered? Portal-safe?
2. **`sudo()`** — justified? Still scoped?
3. **Multi-company** — `company_id` checked?
4. **`super()`** — called on overrides?
5. **Migrations** — needed for field renames?
6. **XML** — `noupdate`, xpath fragility?
7. **Performance** — searches in loops?
8. **Tests** — AccessError and business path covered?
9. **Dependencies** — manifest `depends` complete?

A polite “looks fine” without these checks is not a review.

## 90.2 Review as Teaching

Prefer comments that teach: “This `sudo()` bypasses partner rules — use an integration user group instead.” Catch issues in PR, not in production AccessError tickets.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Make a 9-point review checklist card for your team. |
| Medium | Review a hypothetical diff that adds `sudo()` in a portal controller; write your comments. |
| Hard | Find three defects in a sample legacy PR description (invented) and rank severity. |

**WHAT THIS UNLOCKS NEXT:** Story XVIII project — design a production ERP solution with these trade-offs explicit. Then Story XIX makes you **job ready**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 90:** You review for security, upgrades, and tests — not only PEP8.

> **Phase 90 complete?** [Build the Story XVIII project](#story-project---design-a-production-erp-solution) · [Continue to Story XIX](#story-xix--becoming-job-ready)

<a id="story-project---design-a-production-erp-solution"></a>

# STORY PROJECT — Design a Production ERP Solution

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Deliver a design pack (not necessarily full code): requirements summary, process map, module architecture, config vs custom vs integrate decisions, security notes, and upgrade/deploy assumptions — aligned with [`Projects.md`](../guides/Projects.md).

## The Brief

Pick a mid-size business scenario (distributor, clinic, training company). Produce:

1. Stakeholder goals and non-goals
2. Process maps for two critical flows
3. Standard apps used vs custom modules (depends graph)
4. Decision table: config / customize / integrate (at least five rows)
5. Security & multi-company notes
6. Test / migrate / deploy outline
7. Risks and open questions for the client

**Acceptance:** another Odoo engineer could start implementation from your pack without rediscovering the business.

**WHAT COMES NEXT:** Design maturity plus earlier craft prepares Story XIX — functional fluency, reading core, debugging, interviews, portfolio, and the final capstone.

---

# STORY XIX — BECOMING JOB READY

**Track:** Job Ready

You can build and operate Odoo. Employers still ask: Do you speak the business apps? Can you read core code? Can you debug ugly production issues? Can you explain trade-offs in an interview? Do you have proof?

Story XIX closes the roadmap: functional fluency, reading existing code, real debugging, interview prep, portfolio projects, and a **final capstone ERP** — then you step out as an Odoo Engineer, not into another fake phase.

---

<a id="phase-91"></a>

# PHASE 91 - Odoo Functional Knowledge

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Explain, in business language, how CRM, Sales, Purchase, Inventory, Accounting concepts, and HR connect — enough to design with users, not only with models.

**WHAT YOU SHOULD KNOW FIRST:** Phase 3 — core apps. Phase 84 — requirements mapping.

**LEARNING RESOURCES:**

- Odoo 18 Applications documentation: CRM, Sales, Purchase, Inventory, Accounting, Employees
- [Developer docs](https://www.odoo.com/documentation/18.0/developer.html) when you need model names behind the UI
- Hands-on: run demo data and click the flows

## 91.1 Why Functional Fluency Matters

A developer who does not know what a **delivery order** is will invent a parallel stock system. Functional knowledge is not becoming an accountant — it is knowing which standard document owns which fact.

**CRM:** leads/opportunities, pipeline stages, team assignment — often becomes a quotation.  
**Sales:** quotations → sales orders → optional locking; triggers delivery and invoicing policy.  
**Purchase:** RFQs → purchase orders → receipts → vendor bills.  
**Inventory:** products, warehouses, routes, pickings, valuation awareness (deep accounting links matter).  
**Accounting concepts:** chart of accounts, journals, invoices/bills, reconciliation, taxes — custom moves are dangerous without knowing invariants.  
**HR:** employees, departments, time off — often integrates with approval workflows you customize carefully.

## 91.2 Trace One Business Story Across Apps

```text
CRM opportunity won
        |
        v
Sales quotation confirmed → Sales Order
        |
        +--→ Inventory delivery (pick/pack/ship)
        |
        +--→ Customer invoice (Accounting)
                |
                v
            Payment & reconciliation

Parallel: Purchase replenishment when stock rules fire
```

Practice narrating this without opening code. Then open `sale.order` / `stock.picking` / `account.move` and match the UI labels to models.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Define lead vs opportunity vs quotation in one sentence each. |
| Medium | Walk purchase→receipt→bill on a demo DB; list documents created. |
| Hard | Explain to a fictional CFO why customizing `account.move` posting needs extra care. |

**WHAT THIS UNLOCKS NEXT:** Functional maps help you **read existing Odoo code** with purpose instead of drowning in `addons/`.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 91:** You can narrate CRM→Sales→Stock→Invoice and name the document at each step.

> **Phase 91 complete?** [Continue to Phase 92](#phase-92---reading-existing-odoo-code)

<a id="phase-92"></a>

# PHASE 92 - Reading Existing Odoo Code

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Navigate [odoo/odoo](https://github.com/odoo/odoo) (and Enterprise when licensed): find models from UI technical names, follow `action_` methods, locate views by xmlid, and learn patterns from official modules.

**WHAT YOU SHOULD KNOW FIRST:** Phase 6 — source structure. Phase 91 — what the UI is trying to do.

**LEARNING RESOURCES:**

- [odoo/odoo](https://github.com/odoo/odoo)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- Developer mode → View Metadata / Edit Action

## 92.1 From Screen to Source

1. Enable developer mode.
2. On a form: debug menu → **View Metadata**: model name, xmlids.
3. Grep / IDE search for `_name = 'sale.order'` or the xmlid.
4. Read the model method behind the button (`type="object"` name).
5. Check `security/` and record rules before trusting portal assumptions.

```text
Button "Confirm" on quotation
  → name="action_confirm"
  → sale/models/sale_order.py::action_confirm
  → super chain + stock/account side effects via depends modules
```

## 92.2 How to Learn Without Boiling the Ocean

Pick one flow per week: confirm SO, validate picking, post invoice. Read only the methods on that path. Copy **patterns**, not entire files. Official modules teach depends discipline, mail mixins, and state machines better than random blogs.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | From a Sales Order form, find the model and the confirm method path. |
| Medium | Trace how a product’s inventory routes relate to `stock` models for a delivery. |
| Hard | Document the call chain from portal “Accept order” to backend methods. |

**WHAT THIS UNLOCKS NEXT:** Reading prepares you to **debug real problems** when production diverges from demos.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 92:** You can go from a UI button to the Python method and its security context.

> **Phase 92 complete?** [Continue to Phase 93](#phase-93---debugging-real-odoo-problems)

<a id="phase-93"></a>

# PHASE 93 - Debugging Real Odoo Problems

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Systematically debug AccessError, performance hangs, upgrade failures, and “works on my DB” issues using logs, `--log-level`, shell, and staging clones.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64–68 — tooling and tests. Phase 72–77 — workers and logs. Phase 82–83 — legacy risks.

**LEARNING RESOURCES:**

- [Logging / CLI](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Security](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [`Interview.md`](../guides/Interview.md) live-debug drills

## 93.1 A Production-Shaped Debug Loop

```text
1. Reproduce on staging with same module versions
2. Capture exact user, company, groups, record id
3. Read traceback end-to-end (model, method, access)
4. Form one hypothesis; test it
5. Fix with regression test
6. Deploy with -u if needed; watch logs
```

**AccessError:** check ACL CSV, record rules, `company_id`, `sudo()` misuse, portal user vs internal.  
**Slow list view:** domains, missing indexes, N+1, heavy computes (Story XIV).  
**Upgrade failure:** migration SQL, xpath parse errors, missing depends.  
**Intermittent:** worker memory limits, concurrency locks, cron overlap.

## 93.2 Tools Without Heroics

- Odoo shell with the **same** user via `env['res.users'].browse(id)` + `with_user`
- Raise log level temporarily on a staging worker
- `EXPLAIN` on suspicious SQL
- Bisect recent commits / module upgrades

Never debug only in production with `sudo()` “just to make it work.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given an AccessError traceback, list the three security layers you check. |
| Medium | Write a debug plan for “confirm SO hangs 2 minutes.” |
| Hard | Diagnose a failed `-u` from a fictional ParseError xpath log and propose a fix. |

**WHAT THIS UNLOCKS NEXT:** Debugging stories become **interview** stories — if you can explain them clearly.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 93:** You debug with reproduce → hypothesis → test → regression, not random `sudo()`.

> **Phase 93 complete?** [Continue to Phase 94](#phase-94---odoo-interview-preparation)

<a id="phase-94"></a>

# PHASE 94 - Odoo Interview Preparation

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Answer Odoo interviews with mechanism + trade-offs: ORM, security, inheritance, upgrades, workers, config vs custom vs integrate — practicing with [`Interview.md`](../guides/Interview.md).

**WHAT YOU SHOULD KNOW FIRST:** Entire roadmap themes. Phase 93 — real incidents to narrate.

**LEARNING RESOURCES:**

- [`Interview.md`](../guides/Interview.md)
- [`Projects.md`](../guides/Projects.md) — portfolio talking points
- Official docs for any topic you claim

## 94.1 What Interviewers Probe

| Theme | Example prompt |
| --- | --- |
| ORM | Recordset, `mapped`, N+1 fix |
| Security | AccessError on portal; when is `sudo` OK? |
| Inheritance | `_inherit` vs `_inherits`; view xpath |
| Workflows | State machine design |
| Performance | Slow list; EXPLAIN |
| Deploy | Workers formula; backup contents |
| Upgrades | Migration for rename |
| Judgment | Config vs custom vs integrate |
| Functional | Quote → invoice narrative |

Answer shape: **context → mechanism → trade-off → what you’d verify**. Avoid buzzword salad.

## 94.2 Live Design and Live Debug

Expect: “Design leave approval for multi-company” or “Here’s an AccessError — talk through it.” Use Phases 84–87 and 93 out loud. Mention tests and upgrade safety unprompted — it signals seniority.

Drill timed answers from [`Interview.md`](../guides/Interview.md); record yourself once.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | 90-second answer: what is a record rule? |
| Medium | 5-minute design: vendor bill approval. |
| Hard | Full mock: debug AccessError + propose module split + workers sizing. |

**WHAT THIS UNLOCKS NEXT:** Interviews ask for proof. Phase 95 — portfolio modules and the final capstone.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 94:** You can give mechanism-level answers and point to practice drills in Interview.md.

> **Phase 94 complete?** [Continue to Phase 95](#phase-95---portfolio)

<a id="phase-95"></a>

# PHASE 95 - Portfolio

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Ship a coherent portfolio of Odoo modules (with README, tests, screenshots/GIF, upgrade notes) that prove backend, extension, integration, and OWL skills — then complete the final business ERP capstone.

**WHAT YOU SHOULD KNOW FIRST:** Stories III–XVIII craft. [`Projects.md`](../guides/Projects.md) for structured builds.

**LEARNING RESOURCES:**

- [`Projects.md`](../guides/Projects.md)
- [`Interview.md`](../guides/Interview.md)
- [Testing reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [odoo/docker](https://github.com/odoo/docker) / [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) for demo environments

## 95.1 Portfolio Principles

Each project should show:

- Clear business problem
- Installable addon(s) with honest `depends`
- Security (ACL + rules as needed)
- Tests you would trust
- README with setup and limitations
- Git history that is not one mega-commit of chaos

Quality beats quantity — but the six projects below cover the skill map employers expect.

---

## 95.2 PROJECT 1 — Library / Asset Management

**Goal:** End-to-end custom business app: models, states, security, views, chatter optional.

**Must include:** loan/checkout workflow, constraints (cannot loan unavailable asset), list/form/search, groups for librarian vs reader, TransactionCase tests.

**Shows:** Stories IV–VIII fundamentals.

---

## 95.3 PROJECT 2 — HR / Leave Workflow

**Goal:** Approval workflow with states, activities/chatter, and multi-level approve/refuse.

**Must include:** employee-linked requests, manager group rules, mail activity on submit, tests for illegal transitions.

**Shows:** Stories VI, VIII, X (mail/activities).

---

## 95.4 PROJECT 3 — Sales Customization

**Goal:** Extension of `sale` without forking core.

**Must include:** `_inherit` fields on `sale.order`, xpath view inherit, business method with `super()`, security for new fields, upgrade-safe notes.

**Shows:** Stories IX, XVIII judgment (why not Studio-only).

---

## 95.5 PROJECT 4 — Inventory Extension

**Goal:** Extend stock flows thoughtfully (e.g. extra check on validation, custom field on picking/product).

**Must include:** depends on `stock`, careful override, tests with products/quants at a basic level, performance-conscious search.

**Shows:** Functional + extension + risk awareness around inventory.

---

## 95.6 PROJECT 5 — External API Integration

**Goal:** Idempotent integration with a fake or public HTTP API (or local mock server).

**Must include:** outbound sync job or webhook inbound, auth header handling, retry/error storage, logging, tests with mocked HTTP.

**Shows:** Story XII — not a toy `requests.get` in a button without failure design.

---

## 95.7 PROJECT 6 — OWL Dashboard

**Goal:** Client action dashboard reading Odoo data via RPC/ORM services.

**Must include:** asset bundle, OWL component, registered client action, menu item, graceful empty states.

**Shows:** Story XIII frontend competence.

---

## 95.8 How to Present the Six

One GitHub org/repo with six addons **or** six small repos — plus a portfolio page listing: problem, stack (Odoo 18), demo DB steps, test command, screenshot. Tie each project to a sentence you can say in interviews (“I enforced leave transitions with tests so managers cannot skip states”).

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write README outlines for Projects 1 and 3. |
| Medium | Implement Project 1 fully with tests. |
| Hard | Ship three of six to “demoable” quality and prepare a 10-minute walkthrough. |

**WHAT THIS UNLOCKS NEXT:** The **Final Capstone** stitches the whole engineer skill map into one business ERP — then the roadmap closes.

---

<a id="final-capstone---complete-business-erp"></a>

# FINAL CAPSTONE — COMPLETE BUSINESS ERP

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Design and implement (to a serious MVP depth) a multi-module business ERP solution that proves you can carry a system from requirements through deployment documentation — the portfolio crown, not a toy CRUD app.

This capstone is part of Phase 95’s completion criteria. It is **not** Phase 96. When it is done, you are done with the course curriculum.

## Capstone Brief

Choose one coherent business (examples: regional distributor, training academy, field-service company). Deliver a working Odoo 18 solution covering **all** of the following — depth may vary, but none may be a blank checkbox:

| Area | Capstone expectation |
| --- | --- |
| **Requirements** | Written scope, personas, non-goals, process maps |
| **Data Models** | Core models + relations; master vs transaction clarity |
| **ORM** | Domains, recordset-safe business methods, no reckless loops |
| **Security** | Groups, ACL, record rules; portal users if portal exists |
| **Multi-Company** | At least a documented company strategy; implement isolation if multi-co is in scope |
| **Views** | Form/list/search + one advanced view (kanban/pivot/calendar) |
| **Workflows** | Explicit states with legal transitions |
| **Chatter** | `mail.thread` / activities on at least one key document |
| **Reports** | At least one QWeb PDF report |
| **Scheduled Jobs** | At least one safe cron with tests or clear manual verification |
| **Website/Portal** | At least one public or portal page tied to real records |
| **API** | At least one authenticated route or RPC integration surface |
| **External Integration** | Sync or webhook with idempotency notes |
| **OWL Frontend** | At least one small client action or patched UI worth showing |
| **PostgreSQL Optimization** | Indexes / EXPLAIN notes on one heavy screen |
| **Automated Tests** | TransactionCase (and security tests) for critical paths |
| **Migration Strategy** | Manifest versioning + sample migration or upgrade notes |
| **Deployment** | Conf/workers or Odoo.sh/Docker notes + backup plan |
| **Documentation** | Architecture README + runbook + demo script |

Link implementation work to [`Projects.md`](../guides/Projects.md) cards where they help you structure Git checkpoints.

## Suggested Build Order

```text
Requirements & architecture (Story XVIII)
    → models + security + views + workflows
    → chatter + report + cron
    → portal/API/integration
    → OWL dashboard slice
    → tests + EXPLAIN pass
    → migration notes + deploy runbook
    → demo video / screenshots for portfolio
```

## Acceptance Gate

You can demo in under 15 minutes: create a document, move it through states, show security difference between two users, show a report, show one automated or integrated behavior, and point to tests + deploy notes. An interviewer reading the README understands trade-offs (config vs custom vs integrate) without reverse-engineering your Git history.

**WHAT COMES NEXT:** Not another phase — **closure** as an Odoo Engineer.

---

## Closure — You Are an Odoo Engineer

You started unable to name what ERP was for. You learned to see businesses as shared documents and workflows. You learned how Odoo’s tiers, modules, ORM, security, and views implement that sharing. You extended official apps, automated operations, built portals and APIs, shaped OWL UI, respected PostgreSQL, tested, deployed, migrated, and practiced engineering judgment.

The title **Odoo Engineer** does not mean you memorize every model in `addons/`. It means you can:

- hear a business need and map it to Odoo honestly  
- choose configuration, customization, or integration with eyes open  
- implement modules that survive security review and upgrades  
- operate and debug production-shaped systems  
- explain your decisions under interview pressure  
- prove skill with a portfolio and a capstone you can defend  

Keep building. Read core when stuck. Prefer boring upgrade-safe designs. Protect the database like the business depends on it — because it does.

Welcome to the work.

---

*End of Stories XVI–XIX. Assemble with `scripts/_odoo_gen/assemble.py` after all story batches exist. Projects: [`Projects.md`](../guides/Projects.md). Interviews: [`Interview.md`](../guides/Interview.md).*
