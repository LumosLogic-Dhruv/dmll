import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    const formatted = current.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      spring.set(value);
    } else if (prefersReducedMotion) {
      spring.set(value);
    }
  }, [isInView, value, spring, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}{value.toFixed(decimals)}{suffix}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

interface AnimatedProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
  barColor?: string;
  showPercentage?: boolean;
}

export const AnimatedProgressBar = ({
  value,
  max = 100,
  label,
  className = "",
  barColor = "bg-electric",
  showPercentage = true,
}: AnimatedProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{label}</span>
          {showPercentage && (
            <AnimatedCounter value={percentage} suffix="%" className="text-sm font-medium" />
          )}
        </div>
      )}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${barColor} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView || prefersReducedMotion ? { width: `${percentage}%` } : {}}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
};

interface AnimatedCircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

export const AnimatedCircularProgress = ({
  value,
  size = 120,
  strokeWidth = 8,
  className = "",
  color = "stroke-electric",
}: AnimatedCircularProgressProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        ref={ref}
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-muted fill-none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className={`${color} fill-none`}
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={isInView || prefersReducedMotion ? { strokeDashoffset: offset } : {}}
          transition={{
            duration: prefersReducedMotion ? 0 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedCounter value={value} suffix="%" className="text-xl font-bold" />
      </div>
    </div>
  );
};

export default AnimatedCounter;
