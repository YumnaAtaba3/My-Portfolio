import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const DynamicCodeSnippet: React.FC<{ techs: string[] }> = ({ techs }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = techs[index];
    const fullText = `const experience = new Developer('${currentTech}');`;
    let timer: NodeJS.Timeout;

    const delay = isDeleting ? 40 : displayedText === fullText ? 1500 : 70;

    // eslint-disable-next-line prefer-const
    timer = setTimeout(() => {
      if (!isDeleting && displayedText !== fullText) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== "") {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % techs.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, techs]);

  return (
    <motion.div
      className="text-left font-mono bg-card/70 border border-border/50 backdrop-blur-md p-4 rounded-xl shadow-lg w-full max-w-md mx-auto lg:mx-0 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <span className="text-primary mr-2">/ &gt;</span>
      <span className="text-foreground whitespace-pre-wrap break-all">
        {displayedText}
      </span>
      <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></span>
      <p className="text-xs text-muted-foreground mt-2">
        // Transforming ideas into responsive UIs.
      </p>
    </motion.div>
  );
};
