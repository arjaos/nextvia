"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site";
import { cn } from "cn";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[color-mix(in_oklch,var(--background)_84%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-foreground" aria-label="Nextvia home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "ml-2 h-9 px-3.5")}
            >
              Start a project
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[80] bg-[#0F0E34]/75"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-y-0 right-0 z-[90] flex h-dvh w-[min(20rem,88vw)] flex-col border-l border-white/10 bg-[#0F0E34] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-4">
              <Logo />
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-2 h-11 justify-center"
                )}
              >
                Start a project
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
