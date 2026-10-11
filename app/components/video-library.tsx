"use client";

import Image from "next/image";
import { CirclePlay } from "lucide-react";
import { useState } from "react";
import { videos } from "../data/videos";

export default function VideoLibrary() {
  const [selected, setSelected] = useState(0);
  const video = videos[selected];
  return <section className="container video-library">
    <p className="sample-note video-notice">Design-preview clips made from stock photographs. No BRD footage or audio is represented.</p>
    <div className="video-player-layout"><div className="video-stage"><video key={video.slug} controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}><source src={`/preview/videos/${video.slug}.mp4`} type="video/mp4" /><track kind="captions" src={`/preview/videos/${video.slug}.vtt`} srcLang="en" label="English" default />Your browser does not support video playback.</video></div><div className="video-description"><span className="eyebrow">{video.category}</span><h2>{video.title}</h2><p>{video.summary}</p><span className="video-duration">Sample storyboard | 00:12</span><details className="video-transcript"><summary>Read transcript</summary><p>{video.transcript}</p></details></div></div>
    <h2 className="video-list-title">Explore the collection.</h2><div className="video-grid">{videos.map((item, index) => <button key={item.slug} className="video-choice" aria-pressed={selected === index} onClick={() => setSelected(index)} aria-label={`Select ${item.title}`}><div className="video-thumbnail"><Image src={item.poster} alt="Stock photograph used for a sample video" fill sizes="(max-width: 600px) 90vw, 30vw" /><span className="video-play-symbol"><CirclePlay size={36} /></span><span className="video-time">00:12</span></div><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><span className="video-selection">{selected === index ? "Selected" : "Watch preview"}</span></button>)}</div>
  </section>;
}
