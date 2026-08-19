"use client";

import YoutubeVideo from "youtube-video-element/react";
import type { VideoResource } from "@/lib/learning-model";
import {
  VideoPlayer,
  VideoPlayerControlBar,
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
  const featured = videos[0];
  if (!featured) return null;
  if (!featured.info.videoId && featured.info.kind !== "playlist") return null;
  const rest = videos.slice(1);

  return (
    <div className="ih-example">
      <h3 className="ih-example-label">{featured.title}</h3>
      <div className="ih-lesson-player">
        <VideoPlayer>
          <YoutubeVideo
            slot="media"
            src={watchUrl(featured)}
            title={featured.title}
            style={{ width: "100%", aspectRatio: "16 / 9", background: "#000" }}
          />
          <VideoPlayerControlBar>
            <VideoPlayerPlayButton />
            <VideoPlayerTimeRange />
            <VideoPlayerTimeDisplay showDuration />
            <VideoPlayerMuteButton />
            <VideoPlayerVolumeRange />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </div>
      {rest.length > 0 ? (
        <ul className="ih-lesson-more">
          {rest.map((video) => (
            <li key={video.href}>
              <a href={video.href} target="_blank" rel="noopener noreferrer">
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
