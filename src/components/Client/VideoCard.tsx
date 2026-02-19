import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoCardProps {
  thumbnail: string;
  companyName: string;
  clientName: string;
  index?: number;
}

const VideoCard = ({
  thumbnail,
  companyName,
  clientName,
  index = 0,
}: VideoCardProps) => {
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
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={`${clientName} – ${companyName}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-400" />

      {/* Play button with pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer ping ring */}
          <span
            className="absolute rounded-full bg-white/15 animate-ping"
            style={{ inset: "-20px" }}
          />
          {/* Middle ring */}
          <span
            className="absolute rounded-full bg-white/8"
            style={{ inset: "-12px", animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite", animationDelay: "0.6s" }}
          />
          {/* Play button */}
          <motion.div
            whileHover={{ scale: 1.14 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black/50 group-hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
          </motion.div>
        </div>
      </div>

      {/* Company footer */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#060d1a]/98 via-[#060d1a]/65 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg">
            {companyName.charAt(0)}
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">{companyName}</p>
            <p className="text-blue-300 text-xs">{clientName}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
