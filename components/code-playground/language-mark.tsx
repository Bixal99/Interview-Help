import { TechnologyIcon } from "@/components/icons/technology-icon";
import { ICON_SIZE } from "@/lib/icons";
import type { PlaygroundFileKey, PlaygroundLanguage } from "@/lib/code-playground/types";

const ICON_SLUG: Record<PlaygroundLanguage | PlaygroundFileKey, string> = {
  python: "python",
  javascript: "javascript",
  html: "html5",
  css: "css",
  web: "html5",
  c: "c",
  cpp: "cplusplus",
};

export function PlaygroundLanguageIcon({
  language,
  size = ICON_SIZE.compact,
}: {
  language: PlaygroundLanguage | PlaygroundFileKey;
  size?: number;
}) {
  return (
    <TechnologyIcon
      slug={ICON_SLUG[language]}
      title={language}
      size={size}
      useBrandColor
      decorative
    />
  );
}
