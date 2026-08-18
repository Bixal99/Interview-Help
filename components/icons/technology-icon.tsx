import type { SimpleIcon } from "simple-icons";
import {
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGooglecloud,
  siHtml5,
  siJavascript,
  siKubernetes,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOdoo,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { ICON_CLASS, ICON_SIZE, resolveTechnology } from "@/lib/icons";

const SIMPLE_ICONS: Record<string, SimpleIcon> = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  git: siGit,
  github: siGithub,
  docker: siDocker,
  kubernetes: siKubernetes,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  linux: siLinux,
  googlecloud: siGooglecloud,
  odoo: siOdoo,
  html5: siHtml5,
  css: siCss,
  tailwindcss: siTailwindcss,
};

export type TechnologyIconProps = {
  slug: string;
  title: string;
  size?: number;
  useBrandColor?: boolean;
  decorative?: boolean;
  className?: string;
};

export function TechnologyIcon({
  slug,
  title,
  size = ICON_SIZE.ui,
  useBrandColor = false,
  decorative = false,
  className,
}: TechnologyIconProps) {
  const resolved = resolveTechnology(slug, title);
  const icon = SIMPLE_ICONS[slug];
  if (!icon) {
    return <span className={className}>{resolved.title}</span>;
  }

  const label = decorative ? undefined : resolved.title;
  return (
    <svg
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={label}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={useBrandColor ? `#${icon.hex}` : "currentColor"}
      className={className ? `${ICON_CLASS} ${className}` : ICON_CLASS}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function TechnologyList({
  slugs,
  useBrandColor = true,
}: {
  slugs: string[];
  useBrandColor?: boolean;
}) {
  if (!slugs.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {slugs.map((slug) => {
        const resolved = resolveTechnology(slug);
        const icon = SIMPLE_ICONS[slug];
        return (
          <li key={slug} className="inline-flex items-center gap-2">
            {icon ? (
              <TechnologyIcon slug={slug} title={resolved.title} size={ICON_SIZE.compact} useBrandColor={useBrandColor} />
            ) : null}
            <span>{resolved.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
