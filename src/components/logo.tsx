import { cn } from "cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-primary" />
      <g fill="none" stroke="var(--primary-foreground)" strokeWidth="1.6">
        <circle cx="9" cy="22" r="2.2" fill="var(--primary-foreground)" />
        <circle cx="16" cy="10" r="2.2" fill="var(--primary-foreground)" />
        <circle cx="23" cy="22" r="2.2" fill="var(--primary-foreground)" />
        <path d="M9 22 L16 10 L23 22" />
        <path d="M11.2 18.4 H20.8" opacity="0.7" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-heading text-lg font-semibold tracking-tight">
        Nextvia
      </span>
    </span>
  );
}
