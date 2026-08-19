import Link from "next/link";
import { PracticeRichText } from "@/components/practice-rich-text";
import { LessonVideo } from "@/components/lesson-video";
import { convertMarkdownHref, extractYouTubeInfo } from "@/lib/content-utils";
import type { VideoResource } from "@/lib/learning-model";

export type VisualResource = {
  kind: string;
  title: string;
  href: string;
  note?: string;
};

function resourceToVideo(resource: VisualResource): VideoResource | null {
  const info = extractYouTubeInfo(resource.href);
  if (!info?.videoId && info?.kind !== "playlist") return null;
  if (!info) return null;
  return { href: resource.href, title: resource.title, info };
}

function kindLabel(kind: string) {
  return kind.toUpperCase();
}

function ResourceLinkCard({
  item,
  index,
  sourcePath,
}: {
  item: VisualResource;
  index: number;
  sourcePath: string;
}) {
  const href = convertMarkdownHref(item.href, sourcePath);
  const external = /^https?:\/\//i.test(href);
  const card = (
    <>
      <span className="ih-visual-step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div className="ih-visual-copy">
        <span className="ih-visual-tag">{kindLabel(item.kind)}</span>
        <h3 className="ih-visual-title">{item.title}</h3>
        {item.note ? <p className="ih-visual-lead"><PracticeRichText text={item.note} /></p> : null}
      </div>
      <span className="ih-visual-open">Open</span>
    </>
  );

  if (external) {
    return (
      <a key={item.href} href={href} className="ih-visual-item is-link" target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }
  return (
    <Link key={item.href} href={href} className="ih-visual-item is-link">
      {card}
    </Link>
  );
}

export function VisualLearning({
  resources,
  sourcePath,
  embedYouTube = true,
}: {
  resources: VisualResource[];
  sourcePath: string;
  embedYouTube?: boolean;
}) {
  if (resources.length === 0) return null;

  const videos = resources.filter((item) => resourceToVideo(item));
  const links = resources.filter((item) => !resourceToVideo(item));

  return (
    <section className="ih-visual">
      <h2 className="ih-lesson-kicker">Visual Learning</h2>
      {videos.length > 0 ? (
        <div className="ih-visual-videos">
          {videos.map((item, index) => {
            const video = resourceToVideo(item)!;
            return (
              <article key={item.href} className="ih-visual-item is-video">
                <div className="ih-visual-video-head">
                  <span className="ih-visual-step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div className="ih-visual-copy">
                    <span className="ih-visual-tag">{kindLabel(item.kind)}</span>
                    <h3 className="ih-visual-title">{item.title}</h3>
                  </div>
                </div>
                {item.note ? <p className="ih-visual-lead"><PracticeRichText text={item.note} /></p> : null}
                {embedYouTube ? <LessonVideo videos={[video]} compact /> : null}
              </article>
            );
          })}
        </div>
      ) : null}
      {links.length > 0 ? (
        <div className="ih-visual-links">
          {links.map((item, index) => (
            <ResourceLinkCard key={item.href} item={item} index={videos.length + index} sourcePath={sourcePath} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
