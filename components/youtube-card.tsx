"use client";

import { ExternalLink, ListVideo, Play } from "lucide-react";
import { useState } from "react";
import type { YouTubeInfo } from "@/lib/content-utils";

export function YouTubeCard({ href, label, info }: { href: string; label: string; info: YouTubeInfo }) {
  const [playing, setPlaying] = useState(false);
  const embed = info.kind === "playlist"
    ? `https://www.youtube-nocookie.com/embed/${info.videoId ?? "videoseries"}?list=${info.playlistId}&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${info.videoId}?autoplay=1`;
  return (
    <span className="my-4 block overflow-hidden rounded-xl border hairline surface not-prose">
      {playing ? <span className="relative block aspect-video bg-black"><iframe className="absolute inset-0 size-full" src={embed} title={label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></span> : (
        <button onClick={() => setPlaying(true)} className="group relative block aspect-video w-full overflow-hidden bg-slate-900 text-left">
          {info.videoId ? <img src={`https://i.ytimg.com/vi/${info.videoId}/hqdefault.jpg`} alt="" loading="lazy" className="size-full object-cover opacity-75 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90" /> : <span className="absolute inset-0 grid place-items-center text-slate-500"><ListVideo size={44} /></span>}
          <span className="absolute inset-0 grid place-items-center"><span className="grid size-14 place-items-center rounded-full bg-white text-slate-950 shadow-xl transition group-hover:scale-105"><Play size={20} fill="currentColor" /></span></span>
          <span className="absolute bottom-3 left-3 rounded-md bg-black/75 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">{info.kind === "playlist" ? "YouTube playlist" : "YouTube video"}</span>
        </button>
      )}
      <span className="flex items-center gap-3 p-3.5"><span className="min-w-0 flex-1 text-sm font-medium text-ink">{label}</span><a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink">YouTube <ExternalLink size={12} /></a></span>
    </span>
  );
}
