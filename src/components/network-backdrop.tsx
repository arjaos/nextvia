export function NetworkBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute -top-24 left-1/2 h-[140%] w-[140%] -translate-x-1/2 opacity-90"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8FDDFF" />
            <stop offset="55%" stopColor="#2B4A8A" />
            <stop offset="100%" stopColor="#0F0E34" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="#0F0E34" />
        <g transform="matrix(1 0 0 -1 0 1080)" opacity="0.95">
          <path
            fill="url(#hero-grad)"
            d="M1753.93 1080V341.208C1753.93 317.114 1740.317 295.088 1718.767 284.313L1150.141 0H801.508V738.792C801.508 762.886 815.12 784.912 836.671 795.687L1405.297 1080H1753.93Z"
          />
          <path
            fill="url(#hero-grad)"
            d="M1118.492 1080V341.208C1118.492 317.114 1104.88 295.088 1083.33 284.313L514.703 0H166.071V738.792C166.071 762.886 179.683 784.912 201.233 795.687L769.859 1080H1118.492Z"
          />
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F0E34] to-transparent" />
    </div>
  );
}
