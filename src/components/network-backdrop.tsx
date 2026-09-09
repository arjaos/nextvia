export function NetworkBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.14_175_/_0.22),transparent_64%)] blur-2xl" />
      <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.12_250_/_0.28),transparent_70%)] blur-2xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 640"
        fill="none"
      >
        <g stroke="oklch(0.78 0.1 175 / 0.28)" strokeWidth="1">
          <path d="M80 420 L260 220 L430 360 L620 140 L820 300 L1040 180" />
          <path d="M140 520 L310 340 L540 480 L760 240 L980 420" />
          <path d="M220 180 L480 80 L710 220 L900 90" />
        </g>
        {[
          [80, 420],
          [260, 220],
          [430, 360],
          [620, 140],
          [820, 300],
          [1040, 180],
          [140, 520],
          [310, 340],
          [540, 480],
          [760, 240],
          [980, 420],
          [220, 180],
          [480, 80],
          [710, 220],
          [900, 90],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}-${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 4.5 : 3}
            fill={i % 2 === 0 ? "oklch(0.82 0.13 175)" : "oklch(0.7 0.08 250)"}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
