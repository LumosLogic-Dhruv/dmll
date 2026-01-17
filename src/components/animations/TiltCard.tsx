import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useMagneticEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareEnabled?: boolean;
  liftOnHover?: boolean;
  borderHighlight?: boolean;
}

const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  glareEnabled = false,
  liftOnHover = true,
  borderHighlight = true,
}: TiltCardProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, tilt, handleMouseMove, handleMouseLeave] = useTiltEffect(maxTilt);

  if (prefersReducedMotion) {
    return (
      <div className={`${className} transition-shadow duration-300 hover:shadow-lg`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} relative group`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        y: liftOnHover && (tilt.rotateX !== 0 || tilt.rotateY !== 0) ? -8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {borderHighlight && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none"
          style={{ borderRadius: "inherit" }}
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            background: "linear-gradient(135deg, hsl(var(--electric-blue) / 0.3) 0%, transparent 50%)",
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden"
          style={{ borderRadius: "inherit" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
            style={{
              transform: `translate(${tilt.rotateY * 5}px, ${-tilt.rotateX * 5}px)`,
            }}
          />
        </motion.div>
      )}
      
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
