"use client";

import { ExternalLink, ListVideo, Play } from "lucide-react";
import { useState } from "react";
import type { VideoResource } from "@/lib/learning-model";

function embedUrl(video: VideoResource) {
  const info = video.info;
  if (info.kind === "playlist") {
    return `https://www.youtube-nocookie.com/embed/${info.videoId ?? "videoseries"}?list=${info.playlistId}`;
  }
  return `https://www.youtube-nocookie.com/embed/${info.videoId}`;
}

export function YouTubeBand({ videos }: { videos: VideoResource[] }) {
  const [playing, setPlaying] = useState(false);
  const featured = videos[0];
  if (!featured) return null;
  const rest = videos.slice(1);
  return (
    <div className="mt-5">
      {playing ? (
        <div className="relative aspect-video max-h-[22rem] w-full bg-black">
          <iframe className="absolute inset-0 size-full" src={`${embedUrl(featured)}?autoplay=1`} title={featured.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group relative block aspect-video max-h-[22rem] w-full overflow-hidden bg-black text-left">
          {featured.info.videoId ? (
            <img src={`https://i.ytimg.com/vi/${featured.info.videoId}/hqdefault.jpg`} alt="" loading="lazy" className="size-full object-cover opacity-80" />
          ) : (
            <span className="absolute inset-0 grid place-items-center text-white/50"><ListVideo size={44} /></span>
          )}
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-14 place-items-center rounded-full bg-white text-ink"><Play size={20} fill="currentColor" /></span>
          </span>
        </button>
      )}
      <p className="mt-3 text-sm text-[#f6f3ec]/80">
        {featured.title}{" "}
        <a href={featured.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#f6f3ec] underline">YouTube <ExternalLink size={12} /></a>
      </p>
      {rest.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-[#f6f3ec]/80">
          {rest.map((video) => (
            <li key={video.href}>
              <a href={video.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white">{video.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
