import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MorphingBlobsProps {
  variant?: "hero" | "section";
}

const MorphingBlobs = ({ variant = "hero" }: MorphingBlobsProps) => {
  const prefersReducedMotion = useReducedMotion();

  const blobs = variant === "hero" ? [
    {
      className: "absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[80px]",
      animate: {
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
        borderRadius: ["50%", "40% 60% 70% 30%", "50%"],
      },
      duration: 12,
    },
    {
      className: "absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[60px]",
      animate: {
        scale: [1, 1.1, 1],
        x: [0, -30, 0],
        y: [0, 40, 0],
        borderRadius: ["50%", "60% 40% 30% 70%", "50%"],
      },
      duration: 10,
    },
    {
      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]",
      animate: {
        scale: [1, 1.15, 1],
        rotate: [0, 180, 360],
      },
      duration: 20,
    },
  ] : [
    {
      className: "absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]",
      animate: { scale: [1, 1.1, 1], x: [0, 20, 0] },
      duration: 8,
    },
    {
      className: "absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/8 rounded-full blur-[50px]",
      animate: { scale: [1, 1.2, 1], y: [0, -20, 0] },
      duration: 10,
    },
  ];

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {blobs.map((blob, i) => (
          <div key={i} className={blob.className} />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default MorphingBlobs;
