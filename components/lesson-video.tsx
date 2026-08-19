"use client";

import { useEffect, useState } from "react";
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

export function LessonVideo({ videos }: { videos: VideoResource[] }) {
  const [ready, setReady] = useState(false);
  const featured = videos[0];
  useEffect(() => {
    setReady(true);
  }, []);
  if (!featured) return null;
  if (!featured.info.videoId && featured.info.kind !== "playlist") return null;
  const poster = featured.info.videoId
    ? `https://i.ytimg.com/vi/${featured.info.videoId}/hqdefault.jpg`
    : undefined;

  return (
    <div className="ih-video">
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
      </div>
    </div>
  );
}
