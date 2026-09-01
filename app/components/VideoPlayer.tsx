'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  label: string;
  autoplay?: boolean;
  playbackRate?: number;
  className?: string;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
    </svg>
  );
}

export default function VideoPlayer({
  src,
  poster,
  label,
  autoplay = false,
  playbackRate = 1.5,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoplay || reducedMotion || failed) return;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [autoplay, reducedMotion, failed]);

  useEffect(() => {
    if (!reducedMotion) return;
    const video = videoRef.current;
    if (video) {
      video.pause();
      setPlaying(false);
    }
  }, [reducedMotion]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className={className}
        src={src}
        poster={poster}
        muted
        playsInline
        preload={autoplay ? 'metadata' : 'none'}
        onLoadedMetadata={() => {
          if (videoRef.current) videoRef.current.playbackRate = playbackRate;
        }}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {failed ? (
        <div className="video-fallback" role="status">
          <p>Video could not be loaded. {label}.</p>
        </div>
      ) : (
        <button
          type="button"
          className="video-toggle"
          onClick={toggle}
          aria-label={
            playing ? `Pause ${label}` : `Play ${label}`
          }
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
          <span>{playing ? 'Pause' : 'Play'}</span>
        </button>
      )}
    </div>
  );
}
