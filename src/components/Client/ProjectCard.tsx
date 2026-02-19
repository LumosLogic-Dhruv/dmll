import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index?: number;
}

const ProjectCard = ({ image, title, category, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.06] hover:border-blue-500/30 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/95 via-[#060d1a]/45 to-transparent" />

      {/* Blue hover tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
        <div className="flex items-end justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center mb-2.5 px-2.5 py-1 bg-blue-500/15 border border-blue-500/25 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-[0.1em]">
              {category}
            </span>
            <h3 className="text-white text-lg md:text-xl font-bold leading-snug group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
          </div>

          {/* Arrow button — reveals on hover */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
