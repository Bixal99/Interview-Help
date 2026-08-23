"use client";

import { useState } from "react";
import Link from "next/link";
import type { VideoResource } from "@/lib/learning-model";

function watchUrl(video: VideoResource) {
  if (video.info.kind === "playlist" && video.info.playlistId) {
    return video.info.videoId
      ? `https://www.youtube.com/watch?v=${video.info.videoId}&list=${video.info.playlistId}`
      : `https://www.youtube.com/playlist?list=${video.info.playlistId}`;
  }
  return `https://www.youtube.com/watch?v=${video.info.videoId}`;
}

function embedSrc(videoId: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
}

export function LessonVideo({
  videos,
  description,
  compact = false,
  embedSupported = true,
}: {
  videos: VideoResource[];
  description?: string;
  compact?: boolean;
  embedSupported?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const featured = videos[0];
  if (!featured) return null;

  const videoId = featured.info.videoId;
  const canEmbed = embedSupported && featured.info.kind === "video" && Boolean(videoId);
  const poster = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined;
  const externalWatch = watchUrl(featured);

  if (!canEmbed) {
    return (
      <div className={`ih-video-block${compact ? " is-compact" : ""}`}>
        <div className="ih-video ih-video-fallback">
          {poster ? <img src={poster} alt="" className="ih-lesson-poster-img" /> : null}
          <div className="ih-video-fallback-copy">
            <p className="ih-video-lead">Open this video on YouTube to watch it.</p>
            <Link href={externalWatch} className="ih-video-external" target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`ih-video-block${compact ? " is-compact" : ""}`}>
      {description && !compact ? <p className="ih-video-lead">{description}</p> : null}
      <div className="ih-video">
        <div className="ih-lesson-player">
          {playing ? (
            <iframe
              src={embedSrc(videoId!, true)}
              title={featured.title}
              className="ih-youtube-embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ width: "100%", aspectRatio: "16 / 9", border: 0, background: "#000" }}
            />
          ) : (
            <>
              <div className="ih-lesson-poster" aria-hidden="true">
                {poster ? <img src={poster} alt="" /> : null}
              </div>
              <button
                type="button"
                className="ih-video-cover"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${featured.title}`}
              >
                {poster ? <img src={poster} alt="" /> : null}
                <span className="ih-video-play" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
