"use client";

import { cn } from "cn";

export function LogoMark({
  className,
  title = "Nextvia",
}: {
  className?: string;
  title?: string;
}) {
  return (
    // Official mark from the brand book (two overlapping parallelograms).
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt={title}
      className={cn("h-8 w-auto", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8" />
      <span className="text-[1.15rem] font-medium tracking-[-0.02em] text-white">
        Nextvia
      </span>
    </span>
  );
}
