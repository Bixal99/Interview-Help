import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSelenium,
  SiSqlite,
  SiStreamlit,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
import { ICON_CLASS, ICON_SIZE, resolveTechnology } from "@/lib/icons";

type TechMark = {
  icon: IconType;
  color: string;
  onDark?: string;
};

const TECHNOLOGY_ICONS: Record<string, TechMark> = {
  python: { icon: SiPython, color: "#3776AB" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  react: { icon: SiReact, color: "#61DAFB" },
  nextdotjs: { icon: SiNextdotjs, color: "#000000", onDark: "#FFFFFF" },
  nodedotjs: { icon: SiNodedotjs, color: "#339933" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "#181717", onDark: "#FFFFFF" },
  docker: { icon: SiDocker, color: "#2496ED" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  linux: { icon: SiLinux, color: "#FCC624" },
  googlecloud: { icon: SiGooglecloud, color: "#4285F4" },
  odoo: { icon: SiOdoo, color: "#714B67" },
  html5: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss, color: "#663399" },
  tailwindcss: { icon: SiTailwindcss, color: "#38BDF8" },
  sqlite: { icon: SiSqlite, color: "#003B57", onDark: "#7DC4E4" },
  vscodium: { icon: SiVscodium, color: "#2F80ED" },
  vscode: { icon: SiVscodium, color: "#007ACC" },
  flask: { icon: SiFlask, color: "#000000", onDark: "#FFFFFF" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  selenium: { icon: SiSelenium, color: "#43B02A" },
  supabase: { icon: SiSupabase, color: "#3FCF8E" },
  vercel: { icon: SiVercel, color: "#000000", onDark: "#FFFFFF" },
  c: { icon: SiC, color: "#A8B9CC" },
  cplusplus: { icon: SiCplusplus, color: "#00599C" },
};

export type TechnologyIconProps = {
  slug: string;
  title: string;
  size?: number;
  useBrandColor?: boolean;
  surface?: "light" | "dark";
  decorative?: boolean;
  className?: string;
};

export function TechnologyIcon({
  slug,
  title,
  size = ICON_SIZE.ui,
  useBrandColor = false,
  surface = "light",
  decorative = false,
  className,
}: TechnologyIconProps) {
  const resolved = resolveTechnology(slug, title);
  const mark = TECHNOLOGY_ICONS[slug];
  if (!mark) {
    return <span className={className}>{resolved.title}</span>;
  }

  const Glyph = mark.icon;
  const color = useBrandColor
    ? surface === "dark"
      ? mark.onDark ?? mark.color
      : mark.color
    : "currentColor";
  const label = decorative ? undefined : resolved.title;

  return (
    <Glyph
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={label}
      size={size}
      color={color}
      className={className ? `${ICON_CLASS} ${className}` : ICON_CLASS}
    />
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
        const mark = TECHNOLOGY_ICONS[slug];
        return (
          <li key={slug} className="inline-flex items-center gap-2">
            {mark ? (
              <TechnologyIcon slug={slug} title={resolved.title} size={ICON_SIZE.compact} useBrandColor={useBrandColor} />
            ) : null}
            <span>{resolved.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
