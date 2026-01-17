import { useState, useRef, useCallback, RefObject } from "react";

interface MagneticPosition {
  x: number;
  y: number;
}

export const useMagneticEffect = (
  strength: number = 0.3
): [RefObject<HTMLButtonElement>, MagneticPosition, (e: React.MouseEvent) => void, () => void] => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;
      setPosition({ x: distanceX, y: distanceY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return [ref, position, handleMouseMove, handleMouseLeave];
};

export const useTiltEffect = (
  maxTilt: number = 15
): [RefObject<HTMLDivElement>, { rotateX: number; rotateY: number }, (e: React.MouseEvent) => void, () => void] => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);
      setTilt({
        rotateX: -percentY * maxTilt,
        rotateY: percentX * maxTilt,
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return [ref, tilt, handleMouseMove, handleMouseLeave];
};
