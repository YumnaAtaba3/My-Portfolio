import { motion } from "framer-motion";

interface ActionButtonProps {
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  variant = "primary",
  href,
}) => (
  <motion.a
    href={href}
    target={href && href.startsWith("http") ? "_blank" : undefined}
    rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
    onClick={onClick}
    whileHover={{
      scale: 1.05,
      boxShadow:
        variant === "primary"
          ? "0 10px 20px rgba(var(--color-primary-rgb), 0.3)"
          : "0 5px 15px rgba(0,0,0,0.1)",
    }}
    whileTap={{ scale: 0.95 }}
    className={`min-w-[180px] px-7 py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 shadow-xl ${
      variant === "primary"
        ? "bg-gradient-primary text-white hover-lift hover:shadow-primary/50"
        : "bg-card text-foreground border border-border hover:bg-background/80 glass-card"
    }`}
  >
    {label}
    <Icon className="w-5 h-5" />
  </motion.a>
);
