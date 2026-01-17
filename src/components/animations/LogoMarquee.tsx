import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LogoMarqueeProps {
  logos: Array<{ name: string; logo?: string }>;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

const LogoMarquee = ({
  logos,
  speed = 30,
  direction = "left",
  className = "",
}: LogoMarqueeProps) => {
  const prefersReducedMotion = useReducedMotion();
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const animationDirection = direction === "left" ? -1 : 1;

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 px-6 bg-muted/50 rounded-lg"
            >
              <span className="text-muted-foreground font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: [0, animationDirection * -33.33 + "%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-12 px-8 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {logo.logo ? (
              <img src={logo.logo} alt={logo.name} className="h-8 w-auto" />
            ) : (
              <span className="text-muted-foreground font-medium whitespace-nowrap">
                {logo.name}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
