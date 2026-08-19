"use client";

import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

const variables = {
  "--media-primary-color": "#04AA6D",
  "--media-secondary-color": "#111218",
  "--media-text-color": "#ffffff",
  "--media-background-color": "#111218",
  "--media-control-hover-background": "#04AA6D",
  "--media-font-family": "Poppins, sans-serif",
  "--media-range-track-background": "#2a2d3a",
} as CSSProperties;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
  <MediaController
    style={{
      ...variables,
      width: "100%",
      ...style,
    }}
    {...(props as object)}
  />
);

export type VideoPlayerControlBarProps = ComponentProps<typeof MediaControlBar>;

export const VideoPlayerControlBar = (props: VideoPlayerControlBarProps) => (
  <MediaControlBar {...(props as object)} />
);

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({ className, ...props }: VideoPlayerTimeRangeProps) => (
  <MediaTimeRange className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerTimeDisplayProps = ComponentProps<typeof MediaTimeDisplay>;

export const VideoPlayerTimeDisplay = ({ className, ...props }: VideoPlayerTimeDisplayProps) => (
  <MediaTimeDisplay className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerVolumeRangeProps = ComponentProps<typeof MediaVolumeRange>;

export const VideoPlayerVolumeRange = ({ className, ...props }: VideoPlayerVolumeRangeProps) => (
  <MediaVolumeRange className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({ className, ...props }: VideoPlayerPlayButtonProps) => (
  <MediaPlayButton className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerSeekBackwardButtonProps = ComponentProps<typeof MediaSeekBackwardButton>;

export const VideoPlayerSeekBackwardButton = ({
  className,
  ...props
}: VideoPlayerSeekBackwardButtonProps) => (
  <MediaSeekBackwardButton className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerSeekForwardButtonProps = ComponentProps<typeof MediaSeekForwardButton>;

export const VideoPlayerSeekForwardButton = ({
  className,
  ...props
}: VideoPlayerSeekForwardButtonProps) => (
  <MediaSeekForwardButton className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({ className, ...props }: VideoPlayerMuteButtonProps) => (
  <MediaMuteButton className={cn("p-2.5", className)} {...(props as object)} />
);

export type VideoPlayerContentProps = ComponentProps<"video">;

export const VideoPlayerContent = ({ className, ...props }: VideoPlayerContentProps) => (
  <video className={cn("mt-0 mb-0", className)} {...(props as object)} />
);
