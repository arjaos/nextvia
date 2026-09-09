# Nextvia

Public site for **Nextvia L.L.C.** — networks, telecom, and operational software from Pristina.

The visual system follows the Nextvia brand identity: two overlapping parallelograms (the letter N / a connection between systems), navy `#0F0E34`, cyan `#8FDDFF`, and Helvetica Neue (served on the web as Inter).

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

This Cursor project is a new workspace. Publish it to GitHub with the **Create repo** control (recommended name: `arjaos/nextvia`), then:

1. In the GitHub repo: **Settings → Pages → Source → GitHub Actions**.
2. Push to `main`. The **Deploy** workflow publishes the site.
3. Until a custom domain is attached, GitHub Pages is at `https://arjaos.github.io/nextvia/`. For that URL only, add a repository variable `NEXT_PUBLIC_BASE_PATH` with value `/nextvia`. Remove the variable once `nextvia.io` (or another domain) is live — the `CNAME` file already points at `nextvia.io`.

This environment cannot log into GitHub for you. `github.com/arjaos/nextvia` was not reachable from here (missing or private).

## GoDaddy domain

`nextvia.com` is already registered. These Nextvia names are available on GoDaddy — register the one you want, then point DNS at GitHub Pages:

- [nextvia.io](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.io&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.app](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.app&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.dev](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.dev&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.ai](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.ai&key=gd_mcp_server&itc=gd_mcp_server)

The site is configured for **nextvia.io**. If you register a different name, change `public/CNAME` and `src/lib/site.ts`.

This environment can check GoDaddy availability. It cannot register a domain or write DNS records. After you own the domain, in GoDaddy DNS:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `arjaos.github.io` |

Also add the domain under **GitHub → Settings → Pages → Custom domain**.

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui.
