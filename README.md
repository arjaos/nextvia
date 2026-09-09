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

The GoDaddy connection in Cursor can check domain names. It cannot write DNS records. Add these in GoDaddy → nextvia-ks.com → DNS:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `arjaos.github.io` |

Remove any old A/CNAME/parking records for `@` or `www`. No hosting plan or extra server is required.

## Company

- Nextvia L.L.C., Hajrullah Abdullahu 36, Pristina, Kosovo
- Founded 2026 · NUI 812421395 · Managing director Arjanit Osmanaj
- Email: hello@nextvia-ks.com

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui.
