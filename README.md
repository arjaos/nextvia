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

Every push to `main` builds the static site and publishes it with GitHub Pages (`.github/workflows/deploy.yml`).

1. Publish this project with **Create repo** as `arjaos/nextvia`.
2. GitHub repo → **Settings → Pages → Source → GitHub Actions**.
3. **Settings → Pages → Custom domain** → `nextvia-ks.com`.
4. Check **Enforce HTTPS** after the certificate appears.

Until the custom domain is attached, GitHub Pages is at `https://arjaos.github.io/nextvia/`. For that URL only, add a repository variable `NEXT_PUBLIC_BASE_PATH` with value `/nextvia`. Remove it once `nextvia-ks.com` is live.

## GoDaddy DNS for nextvia-ks.com

Zone export dated **2026-09-09** (GoDaddy BIND dump for `nextvia-ks.com`). Nameservers are already GoDaddy’s:

- `ns75.domaincontrol.com`
- `ns76.domaincontrol.com`

Leave those. Do **not** change nameservers and do **not** move the zone off GoDaddy DNS. GitHub Pages only needs the apex A records and the `www` CNAME in this same zone.

The GoDaddy connection in Cursor can check whether a name is free. It **cannot** create, edit, or delete DNS records. Make the website cutover in GoDaddy → nextvia-ks.com → DNS (or disconnect Website Builder in the GoDaddy site product if it keeps rewriting the apex).

### Delete (Website Builder / parking)

These are what currently publish the parked GoDaddy site. They conflict with GitHub Pages:

| Type | Name | Current value | Action |
| --- | --- | --- | --- |
| A | `@` | `WebsiteBuilder Site` | Delete |
| CNAME | `www` | `@` | Delete |

If GoDaddy shows forwarding, parking, or a Website Builder host on `@` or `www` instead of those exact strings, delete those too. Do not delete Microsoft 365, mail, or DKIM records.

### Add (GitHub Pages)

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `arjaos.github.io` |

No VPS or extra hosting plan is required. GitHub Pages serves the static files from this repo.

### Keep (mail, Microsoft 365, GoDaddy helpers)

The same export already has working Microsoft 365 mail (`MX` → `nextviaks-com01i.mail.protection.outlook.com`) plus leftover GoDaddy email/DKIM helpers. Leave all of these alone:

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
