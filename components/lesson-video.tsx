"use client";

import { useEffect, useRef, useState } from "react";
import YoutubeVideo from "youtube-video-element/react";
import type { VideoResource } from "@/lib/learning-model";
import {
  VideoPlayer,
  VideoPlayerControlBar,
  VideoPlayerFullscreenButton,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/video-player";

function watchUrl(video: VideoResource) {
  if (video.info.kind === "playlist" && video.info.playlistId) {
    return video.info.videoId
      ? `https://www.youtube.com/watch?v=${video.info.videoId}&list=${video.info.playlistId}`
      : `https://www.youtube.com/playlist?list=${video.info.playlistId}`;
  }
  return `https://www.youtube.com/watch?v=${video.info.videoId}`;
}

export function LessonVideo({ videos, description, compact = false }: { videos: VideoResource[]; description?: string; compact?: boolean }) {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const featured = videos[0];
  useEffect(() => {
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const media = root.current?.querySelector("youtube-video, video");
    if (!media) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    media.addEventListener("play", onPlay);
    media.addEventListener("playing", onPlay);
    media.addEventListener("pause", onPause);
    media.addEventListener("ended", onPause);
    return () => {
      media.removeEventListener("play", onPlay);
      media.removeEventListener("playing", onPlay);
      media.removeEventListener("pause", onPause);
      media.removeEventListener("ended", onPause);
    };
  }, [ready]);
  if (!featured) return null;
  if (!featured.info.videoId && featured.info.kind !== "playlist") return null;
  const poster = featured.info.videoId
    ? `https://i.ytimg.com/vi/${featured.info.videoId}/hqdefault.jpg`
    : undefined;

  function play() {
    setPlaying(true);
    const media = root.current?.querySelector("youtube-video, video") as HTMLMediaElement | null;
    if (media && typeof media.play === "function") {
      void media.play();
      return;
    }
    const button = root.current?.querySelector("media-play-button") as HTMLElement | null;
    button?.click();
  }

  return (
    <div className={`ih-video-block${compact ? " is-compact" : ""}`}>
      {description && !compact ? <p className="ih-video-lead">{description}</p> : null}
      <div className="ih-video" ref={root}>
        <div className="ih-lesson-player">
          {ready ? (
            <VideoPlayer>
              <YoutubeVideo
                slot="media"
                src={watchUrl(featured)}
                title={featured.title}
                poster={poster}
                style={{ width: "100%", aspectRatio: "16 / 9", background: "#000" }}
              />
              <VideoPlayerControlBar>
                <VideoPlayerPlayButton />
                <VideoPlayerTimeRange />
                <VideoPlayerTimeDisplay showDuration />
                <VideoPlayerMuteButton />
                <VideoPlayerVolumeRange />
                <VideoPlayerFullscreenButton />
              </VideoPlayerControlBar>
            </VideoPlayer>
          ) : (
            <div className="ih-lesson-poster" aria-hidden="true">
              {poster ? <img src={poster} alt="" /> : null}
            </div>
          )}
          {!playing ? (
            <button type="button" className="ih-video-cover" onClick={play} aria-label={`Play ${featured.title}`}>
              {poster ? <img src={poster} alt="" /> : null}
              <span className="ih-video-play" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
