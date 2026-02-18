import { useEffect, useRef, useState } from "react";

const VideoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [transform, setTransform] = useState({ width: 50, borderRadius: 16 });
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (isMobile || !videoRef.current || !containerRef.current) return;

    const video = videoRef.current;
    const container = containerRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / (containerHeight - window.innerHeight));

        // Update transform
        let width, borderRadius;
        if (progress < 0.3) {
          const p = progress / 0.3;
          width = 50 + p * 50;
          borderRadius = 16 - p * 16;
        } else if (progress > 0.7) {
          const p = (progress - 0.7) / 0.3;
          width = 100 - p * 50;
          borderRadius = p * 16;
        } else {
          width = 100;
          borderRadius = 0;
        }
        setTransform({ width, borderRadius });

        // Check if fullscreen
        setIsFullscreen(progress >= 0.3 && progress <= 0.7);

        // Update video time - clip to 30 seconds
        if (video.duration && !isNaN(video.duration)) {
          const videoDuration = Math.min(video.duration, 30);
          video.currentTime = progress * videoDuration;
        }

        // Hide overlay
        if (progress > 0.2) {
          setOverlayVisible(false);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Broadcast fullscreen state
  useEffect(() => {
    document.body.setAttribute('data-video-fullscreen', isFullscreen.toString());
  }, [isFullscreen]);

  if (isMobile) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <video
            className="w-full aspect-video rounded-2xl shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
            src="https://res.cloudinary.com/douema5eo/video/upload/v1/Mark_Creative_Digital_Agency_Showreel_720P_j9khc2.mp4"
          />
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: isFullscreen ? 60 : 1 }}>
        <div
          className="relative aspect-video shadow-2xl will-change-transform"
          style={{
            width: `${transform.width}%`,
            borderRadius: `${transform.borderRadius}px`,
            transition: 'none'
          }}
        >
          {overlayVisible && (
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-500"
              style={{
                background: 'linear-gradient(180deg, rgba(8, 58, 79, 0.35) 0%, transparent 100%)'
              }}
            >
              <h2 className="text-background text-4xl md:text-5xl font-bold text-center px-4">
                See How We Create Growth
              </h2>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            src="https://res.cloudinary.com/douema5eo/video/upload/v1/Mark_Creative_Digital_Agency_Showreel_720P_j9khc2.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
