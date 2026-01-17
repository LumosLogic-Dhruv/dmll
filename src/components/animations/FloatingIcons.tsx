import { motion } from "framer-motion";
import { Search, BarChart3, Share2, Mail, Target, TrendingUp, MousePointerClick, Globe } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const icons = [
  { Icon: Search, label: "SEO", color: "text-electric" },
  { Icon: BarChart3, label: "Analytics", color: "text-orange" },
  { Icon: Share2, label: "Social", color: "text-electric-light" },
  { Icon: Mail, label: "Email", color: "text-orange-light" },
  { Icon: Target, label: "PPC", color: "text-electric" },
  { Icon: TrendingUp, label: "Growth", color: "text-orange" },
  { Icon: MousePointerClick, label: "CRO", color: "text-electric-light" },
  { Icon: Globe, label: "Web", color: "text-orange-light" },
];

const positions = [
  { top: "10%", left: "5%", size: 32 },
  { top: "20%", right: "8%", size: 28 },
  { top: "35%", left: "3%", size: 24 },
  { top: "55%", right: "5%", size: 36 },
  { top: "70%", left: "8%", size: 28 },
  { top: "80%", right: "10%", size: 24 },
  { top: "15%", right: "25%", size: 20 },
  { top: "65%", left: "15%", size: 22 },
];

const FloatingIcons = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const pos = positions[index];
        const { Icon, color } = item;
        const duration = 4 + Math.random() * 4;
        const delay = index * 0.5;

        return (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={pos.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
