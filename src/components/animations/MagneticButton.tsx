import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef, ReactNode } from "react";

interface MagneticButtonProps extends Omit<ButtonProps, 'ref'> {
  children: ReactNode;
  magneticStrength?: number;
  glowOnHover?: boolean;
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, magneticStrength = 0.3, glowOnHover = true, className = "", ...props }, _ref) => {
    const prefersReducedMotion = useReducedMotion();
    const [magneticRef, position, handleMouseMove, handleMouseLeave] = useMagneticEffect(magneticStrength);

    if (prefersReducedMotion) {
      return (
        <Button className={className} {...props}>
          {children}
        </Button>
      );
    }

    return (
      <motion.div
        className="relative inline-block"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 15,
        }}
      >
        <Button
          ref={magneticRef}
          className={`${className} ${glowOnHover ? "hover:shadow-glow-blue" : ""}`}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
