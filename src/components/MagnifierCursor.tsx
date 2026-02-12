import { useEffect, useRef, useState } from 'react';

export default function MagnifierCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Check for mobile/touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isOverInput = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      
      // Check if over input/textarea
      const target = e.target as HTMLElement;
      isOverInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      if (!isVisible && !isOverInput) setIsVisible(true);
      if (isOverInput) setIsVisible(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      if (!cursor) return;

      // Smooth easing (lerp)
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

      cursor.style.transform = `translate(${positionRef.current.x - 50}px, ${positionRef.current.y - 50}px)`;
      
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="magnifier-cursor"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: 'none',
      }}
    />
  );
}
