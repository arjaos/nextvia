import Link from "next/link";
import { Logo } from "@/components/logo";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-6 text-muted-foreground">
            {siteConfig.legalName}. Networks, telecom, and operational software
            from {siteConfig.city}.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Site
          </p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/90 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Office
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/90">
            {siteConfig.address}
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>Business register NUI {siteConfig.nui}</p>
        </div>
      </div>
    </footer>
  );
}
