import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  logo: string;
  rating: number;
  text: string;
  image?: string;
  index?: number;
}

const TestimonialCard = ({
  name,
  position,
  company,
  logo,
  rating,
  text,
  image,
  index = 0,
}: TestimonialCardProps) => {
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
      whileHover={{ y: -7 }}
      className="group relative bg-[#0f172a] border border-white/[0.08] hover:border-blue-500/25 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-900/15 overflow-hidden"
    >
      {/* Hover bg shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.05] to-purple-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Large decorative quote */}
      <div className="absolute top-4 right-5 text-[88px] font-serif leading-none text-blue-400/[0.07] select-none pointer-events-none">
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-2 relative">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.floor(rating);
            const half = i === Math.floor(rating) && rating % 1 !== 0;
            return (
              <div key={i} className="relative w-4 h-4">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 opacity-20 absolute" />
                {filled && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                {half && (
                  <div className="overflow-hidden w-1/2 absolute">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <span className="text-sm font-semibold text-amber-400">{rating} out of 5</span>
      </div>

      {/* Quote text */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1 relative">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/25 shrink-0"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
            {logo}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{name}</p>
          <p className="text-xs text-gray-500 truncate">
            {position}, {company}
          </p>
        </div>
        <span className="shrink-0 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-blue-400 font-bold tracking-wide">
          {logo}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
