import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const useYouTubePlayer = (
  videos: string[],
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const playerRef = useRef<any>(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create a unique ID for this instance if not present?
    // Actually, stick to ref but ensure cleanup is synchronous-ish.

    let player: any = null;

    const initPlayer = () => {
      // Check if container exists
      if (!containerRef.current || !window.YT) return;

      // If a player already exists on this node (cleanup failed?), destroy it
      // if (playerRef.current) { playerRef.current.destroy(); playerRef.current = null; }

      // Create new player
      player = new window.YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId: videos[0],
        playerVars: { autoplay: 0, controls: 0, rel: 0, modestbranding: 1 },
        events: {
          onReady: (e: any) => {
            playerRef.current = e.target;
          },
          onStateChange: (e: any) => {
            const s = window.YT.PlayerState;
            if (e.data === s.PLAYING) setIsPlaying(true);
            if (e.data === s.PAUSED) setIsPlaying(false);
            if (e.data === s.ENDED) nextVideo();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (existingCallback) existingCallback();
        initPlayer();
      };

      if (
        !document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]',
        )
      ) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    return () => {
      if (player) {
        try {
          player.destroy();
        } catch (e) {
          console.error("Error destroying YT player", e);
        }
      }
      playerRef.current = null;
    };
  }, [videos]); // Removed containerRef from dependency to avoid re-triggering if ref changes object identity (though it shouldn't)

  const loadByIndex = (i: number) => {
    if (!playerRef.current) return;
    setCurrent(i);
    playerRef.current.loadVideoById(videos[i]);
  };

  const nextVideo = () => loadByIndex((current + 1) % videos.length);
  const prevVideo = () =>
    loadByIndex((current - 1 + videos.length) % videos.length);

  const togglePlayPause = () => {
    if (!playerRef.current || !window.YT) return;
    const s = playerRef.current.getPlayerState();
    const YTState = window.YT.PlayerState;

    if (s === YTState.PLAYING) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return {
    playerRef,
    current,
    isPlaying,
    nextVideo,
    prevVideo,
    togglePlayPause,
  };
};
