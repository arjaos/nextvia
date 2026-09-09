"use client";

import { useId } from "react";
import { cn } from "cn";

const markPathBack =
  "M1208.835 776.929 916.276 630.649C908.635 626.828 903.81 619.02 903.81 610.478V323.242C903.81 306.478 921.452 295.574 936.446 303.071L1229.006 449.351C1236.646 453.172 1241.473 460.98 1241.473 469.522V756.758C1241.473 769.83 1230.746 779.339 1218.911 779.338 1215.569 779.338 1212.137 778.58 1208.835 776.929Z";

const markPathFront =
  "M983.553 776.929 690.994 630.649C683.354 626.828 678.528 619.02 678.528 610.478V323.242C678.528 306.478 696.17 295.574 711.165 303.071L1003.724 449.351C1011.364 453.172 1016.19 460.98 1016.19 469.522V756.758C1016.19 769.83 1005.464 779.339 993.629 779.338 990.287 779.338 986.855 778.58 983.553 776.929Z";

export function LogoMark({
  className,
  title = "Nextvia",
}: {
  className?: string;
  title?: string;
}) {
  const rawId = useId();
  const id = `nv${rawId.replace(/:/g, "")}`;
  return (
    <svg
      viewBox="674.5 291.6 571 492"
      aria-hidden={title ? undefined : true}
      className={cn("h-9 w-auto", className)}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={id} x1="18%" y1="92%" x2="86%" y2="8%">
          <stop offset="0%" stopColor="#8FDDFF" />
          <stop offset="100%" stopColor="#0F0E34" />
        </linearGradient>
      </defs>
      <g transform="matrix(1 0 0 -1 0 1074.9)">
        <path fill={`url(#${id})`} d={markPathBack} />
        <path fill={`url(#${id})`} d={markPathFront} />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-[37px]" />
      <span className="text-[1.15rem] font-medium tracking-[-0.02em] text-white">
        Nextvia
      </span>
    </span>
  );
}
