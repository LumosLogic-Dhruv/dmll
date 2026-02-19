import { Link } from "react-router-dom";

interface PortfolioDropdownProps {
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const portfolioItems = [
  { name: "Case Studies", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Documents", path: "/documents" },
];

const PortfolioDropdown = ({
  isOpen,
  dropdownRef,
  onMouseEnter,
  onMouseLeave,
}: PortfolioDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
    >
      {portfolioItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default PortfolioDropdown;
