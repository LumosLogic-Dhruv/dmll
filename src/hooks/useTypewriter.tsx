import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  onComplete,
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayText("");
    setIsTyping(true);
    setIsComplete(false);

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();

        if (loop) {
          setTimeout(() => {
            setDisplayText("");
            currentIndex = 0;
            startTyping();
          }, 2000);
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, loop, onComplete]);

  useEffect(() => {
    const timeoutId = setTimeout(startTyping, delay);
    return () => clearTimeout(timeoutId);
  }, [startTyping, delay]);

  return { displayText, isTyping, isComplete };
};

interface UseTextRevealOptions {
  text: string;
  delay?: number;
  staggerDelay?: number;
}

export const useTextReveal = ({
  text,
  delay = 0,
  staggerDelay = 0.03,
}: UseTextRevealOptions) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsRevealed(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const letters = text.split("").map((char, index) => ({
    char,
    delay: index * staggerDelay,
  }));

  return { letters, isRevealed };
};
