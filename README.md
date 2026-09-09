# Nextvia

Marketing site for **Nextvia L.L.C.** — a Pristina, Kosovo practice for enterprise networks, telecom/ISP engineering, infrastructure operations, and operational software.

This repository is a static Next.js export. Pushing to `main` on GitHub builds the `out/` directory and deploys it to GitHub Pages. Production domain: **[nextvia.io](https://nextvia.io)**.

Company facts used on the site:

- Legal name: Nextvia L.L.C.
- Office: Hajrullah Abdullahu 36, Pristina, Kosovo
- Business register NUI: 812421395
- Founded: 2026
- Managing director: Arjanit Osmanaj
- Email: hello@nextvia.io

No phone number is published. Do not invent one.

## Local development

Requires Node.js 22+.

```bash
npm ci
npm run dev
```

The dev server binds to `0.0.0.0:43145`. Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

```bash
npm run lint
npm run build
```

`npm run build` writes a static export to `out/` (`output: "export"` in `next.config.ts`).

## Connect GitHub

This workspace is a **new project**. The Git remotes here point at Cursor Origin, not GitHub. **This session cannot log into GitHub**, create `github.com/arjaos/nextvia`, or flip repository settings. You do that in the GitHub UI (or with the **Create repo** pill if it is shown in Cursor).

1. Create a GitHub repository at [https://github.com/arjaos/nextvia](https://github.com/arjaos/nextvia) (private or public). Pages works on private repos with GitHub Pro/Team; a public repo is enough on a free account.
2. Add GitHub as a remote and push `main`:

   ```bash
   git remote add github git@github.com:arjaos/nextvia.git
   git push -u github main
   ```

3. In the repo: **Settings → Pages**.
   - **Source**: GitHub Actions (not “Deploy from a branch”).
   - After the first green `Deploy to GitHub Pages` run, the site is at `https://arjaos.github.io/nextvia/` unless a custom domain is set.
4. Optional, only if you stay on project Pages **without** a custom domain: add a repository variable `NEXT_PUBLIC_BASE_PATH` with value `/nextvia`. The workflow forwards that into the Next.js `basePath`. Leave it unset when using `nextvia.io`.
5. Confirm `public/CNAME` stays `nextvia.io` when you attach the custom domain.

Every later push to `main` runs `.github/workflows/deploy.yml`: checkout, Node 22, `npm ci`, `npm run build`, upload `out/` as a Pages artifact, then `actions/deploy-pages`.

## GoDaddy domain

**This session cannot register a domain or write DNS.** The GoDaddy connection available here can only suggest names and check availability. You complete purchase and DNS in GoDaddy.

Checked 2026-09-09:

| Domain | Status |
| --- | --- |
| nextvia.com / nextvia.net / nextvia.co | Unavailable |
| **nextvia.io** (recommended) | Available |
| nextvia.app | Available |
| nextvia.dev | Available |
| nextvia.ai | Available |
| getnextvia.com | Available |

Register from GoDaddy (these links include the MCP referral keys):

- [nextvia.io](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.io&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.app](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.app&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.dev](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.dev&key=gd_mcp_server&itc=gd_mcp_server)
- [nextvia.ai](https://www.godaddy.com/domainsearch/find?domainToCheck=nextvia.ai&key=gd_mcp_server&itc=gd_mcp_server)

### DNS for GitHub Pages

After the domain is in your GoDaddy account, open **DNS → Records** for that domain and point it at GitHub Pages:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |
| CNAME | `www` | `arjaos.github.io` | 600 |

Remove any parking / “Parked” / GoDaddy forwarding records that conflict with `@`.

Then in GitHub: **Settings → Pages → Custom domain** → `nextvia.io` → Save, and enable **Enforce HTTPS** once the certificate is ready. GitHub will serve the site from the `CNAME` file in `public/` (`nextvia.io`) after the next deploy.

DNS can take minutes to hours. Check with `dig nextvia.io +short` until you see the four GitHub A records.

## Project layout

- `src/app` — Home, Services, About, Contact
- `src/components` — header, footer, contact form, brand chrome
- `src/lib/site.ts` — company copy and navigation
- `public/CNAME` — GitHub Pages custom domain
- `.github/workflows/deploy.yml` — Pages deploy on every `main` push
