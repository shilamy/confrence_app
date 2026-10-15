"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => setIsPlaying(false));
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);

    return () => {
      reducedMotion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  async function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="hero-video"
        poster="/media/embu-main.jpg"
        preload="metadata"
        muted
        playsInline
        loop
        aria-hidden="true"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/media/embu-conference-film.mp4" type="video/mp4" />
      </video>
      <button
        className="hero-video-toggle"
        type="button"
        aria-pressed={isPlaying}
        onClick={toggleVideo}
      >
        <span className="hero-video-icon" aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? "Pause venue film" : "Play venue film"}
      </button>
    </>
  );
}
