
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  scrollToSection: (sectionId: string) => void;
  targetId: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  scrollToSection,
  targetId,
}) => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.8 }}
  >
    <button
      onClick={() => scrollToSection(targetId)}
      aria-label="Scroll to next section"
      className="p-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300 shadow-lg"
    >
      <ArrowDown className="w-5 h-5" />
    </button>
  </motion.div>
);

export default ScrollIndicator;
