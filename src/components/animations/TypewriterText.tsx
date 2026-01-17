import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, useTextReveal } from "@/hooks/useTypewriter";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursorColor?: string;
}

export const TypewriterText = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursorColor = "bg-electric",
}: TypewriterTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { displayText, isTyping, isComplete } = useTypewriter({ text, speed, delay });

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayText}
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            className={`inline-block w-0.5 h-[1em] ml-1 ${cursorColor}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
    </span>
  );
};

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const StaggeredText = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: StaggeredTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { letters, isRevealed } = useTextReveal({ text, delay, staggerDelay });

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {letters.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: item.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {item.char === " " ? "\u00A0" : item.char}
        </motion.span>
      ))}
    </span>
  );
};

interface AnimatedHeadlineProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  staggerDelay?: number;
}

export const AnimatedHeadline = ({
  lines,
  className = "",
  lineClassName = "",
  staggerDelay = 0.2,
}: AnimatedHeadlineProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <div key={i} className={lineClassName}>{line}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className={`overflow-hidden ${lineClassName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * staggerDelay }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
