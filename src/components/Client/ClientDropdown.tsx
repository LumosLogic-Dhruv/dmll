import { RefObject } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const dropdownItems = [
  { name: "Website Makeovers", path: "/client/website-makeovers" },
  { name: "Work", path: "/client/work" },
  { name: "Video Testimonials", path: "/client/video-testimonials" },
  { name: "Testimonials", path: "/client/testimonials" },
];

interface ClientDropdownProps {
  isOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ClientDropdown = ({
  isOpen,
  dropdownRef,
  onMouseEnter,
  onMouseLeave,
}: ClientDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-0 mt-2 w-52 bg-background rounded-2xl shadow-xl py-2 overflow-hidden border border-border"
          style={{ zIndex: 60 }}
        >
          {dropdownItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-5 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClientDropdown;
