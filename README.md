# Nextvia

Public site for **Nextvia L.L.C.** — networks, telecom, and operational software from Pristina.

Production domain: **[nextvia-ks.com](https://nextvia-ks.com)** (GoDaddy).

The visual system follows the Nextvia brand identity: two overlapping parallelograms, navy `#0F0E34`, cyan `#8FDDFF`, and Helvetica Neue (served on the web as Inter).

## Local

```bash
npm install
npm run dev
```

The app listens on [http://127.0.0.1:43145](http://127.0.0.1:43145).

```bash
npm run lint
npm run build
```

Static files land in `out/` for GitHub Pages.

## Deploy on every push

Live GitHub repo: **[github.com/arjaos/nextvia](https://github.com/arjaos/nextvia)**.

Every push to `main` builds the static site and publishes it with GitHub Pages (`.github/workflows/deploy.yml`). Pages source is **GitHub Actions**. The custom domain in the repo is `nextvia-ks.com`.

Until GoDaddy DNS is switched (below), `https://arjaos.github.io/nextvia/` redirects to the old GoDaddy Website Builder page. After the import, GitHub will issue HTTPS for `nextvia-ks.com` — then check **Enforce HTTPS** in **Settings → Pages**.

The repo is public so GitHub Pages works on the free plan. Mail records stay on GoDaddy and are not affected by making the website repo public.

## GoDaddy DNS for nextvia-ks.com

Import files live in this repo (GoDaddy BIND / RFC 1035, same layout as the 2026-09-09 zone export):

| File | Use |
| --- | --- |
| [`dns/nextvia-ks.com-import.txt`](dns/nextvia-ks.com-import.txt) | **Import this** — GitHub Pages records only |
| [`dns/nextvia-ks.com.txt`](dns/nextvia-ks.com.txt) | Full intended zone (reference). Do not import this whole file while the current records still exist. |

Cursor / this repo **cannot** push DNS into GoDaddy. You import the file yourself.

1. In GoDaddy, disconnect Website Builder for nextvia-ks.com if it is still attached (it can rewrite the apex after you change DNS).
2. GoDaddy → **Domain Portfolio** → **nextvia-ks.com** → **DNS**.
3. Delete the Website Builder / parking records (leave mail alone):

| Type | Name | Current value | Action |
| --- | --- | --- | --- |
| A | `@` | `WebsiteBuilder Site` | Delete |
| CNAME | `www` | `@` | Delete |

4. **DNS** → **Actions** → **Import Zone File** → choose `dns/nextvia-ks.com-import.txt` → **Apply Zone File**.

GoDaddy Import **adds** records and **fails on conflicts**, which is why the import file does not repeat MX, SPF, DKIM, autodiscover, SIP, or NS.

Nameservers stay GoDaddy’s (`ns75.domaincontrol.com` / `ns76.domaincontrol.com`). Do **not** change nameservers.

### What the import adds (GitHub Pages)

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `arjaos.github.io` |

No VPS or extra hosting plan is required. GitHub Pages serves the static files from this repo.

### Kept (mail, Microsoft 365, GoDaddy helpers)

The export already has working Microsoft 365 mail (`MX` → `nextviaks-com01i.mail.protection.outlook.com`). Those records are unchanged in `dns/nextvia-ks.com.txt` and are **not** deleted by the import:

| Type | Name | Purpose |
| --- | --- | --- |
| NS | `@` | `ns75` / `ns76.domaincontrol.com` |
| TXT | `@` | `NETORGFT21111292.onmicrosoft.com` (Microsoft 365) |
| TXT | `@` | `v=spf1 include:secureserver.net -all` |
| TXT | `_dmarc` | DMARC |
| MX | `@` | Outlook protection |
| CNAME | `autodiscover`, `lyncdiscover`, `msoid`, `sip` | Microsoft 365 / Teams |
| CNAME | `selector1._domainkey`, `selector2._domainkey` | Microsoft DKIM |
| CNAME | `email`, `bounces.cloud.em`, `bounces.cloud2.em`, `sable.cloud._domainkey`, `sable.cloud2._domainkey` | GoDaddy email / DKIM |
| CNAME | `_domainconnect` | GoDaddy DNS UI |
| SRV | `_sip._tls`, `_sipfederationtls._tcp` | Microsoft SIP |

SPF still says `include:secureserver.net` while MX points at Microsoft 365. That does not block GitHub Pages. Change SPF later only if you send mail from Microsoft 365 and want the policy to match.

## Company

- Nextvia L.L.C., Hajrullah Abdullahu 36, Pristina, Kosovo
- Founded 2026 · NUI 812421395 · Managing director Arjanit Osmanaj
- Email: hello@nextvia-ks.com

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui.
