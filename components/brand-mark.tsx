import { SITE_NAME } from "@/lib/brand";

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className="ih-brand-mark"
      aria-hidden="true"
    >
      <rect width="32" height="32" fill="#04AA6D" />
      <rect x="5" y="20" width="22" height="7" fill="#fff" />
      <rect x="8" y="12" width="16" height="7" fill="#F1F1F1" />
      <rect x="11" y="4" width="10" height="7" fill="#fff" />
    </svg>
  );
}

export function BrandWordmark({
  size = 32,
  title = SITE_NAME,
}: {
  size?: number;
  title?: string;
}) {
  return (
    <span className="ih-brand">
      <BrandMark size={size} />
      <span className="ih-brand-name">{title}</span>
    </span>
  );
}
