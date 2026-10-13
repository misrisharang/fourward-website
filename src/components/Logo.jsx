export const Logo = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g fill="#F5F4EF">
      <rect x="8" y="22" width="4.5" height="20" />
      <rect x="18" y="16" width="4.5" height="26" />
      <rect x="28" y="25" width="4.5" height="14" />
    </g>
    <g stroke="#C7F36B" strokeWidth="4.5" strokeLinecap="square" fill="none">
      <line x1="38" y1="32" x2="52" y2="32" />
      <polyline points="46,25 53,32 46,39" />
    </g>
  </svg>
);
