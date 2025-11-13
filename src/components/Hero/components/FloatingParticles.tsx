import React from "react";
import { motion } from "framer-motion";

const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: `hsla(${Math.random() * 360}, 85%, 60%, 0.35)`, // ⬅ أقوى ومرئي
            width: `${25 + Math.random() * 30}px`,
            height: `${25 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(6px)", // ⬅ blur أقل ليظهر فوق الأبيض
          }}
          initial={{
            opacity: 0.6,
            scale: 0,
            y: Math.random() * 200 - 100,
            x: Math.random() * 200 - 100,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0, 1, 0.7, 1.1, 0],
            x: [
              null,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              null,
            ],
            y: [
              null,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              null,
            ],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const ParticleSystem: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <FloatingParticles />

    {/* Glow effects تظهر في الفاتح والداكن */}
    <motion.div
      className="absolute w-96 h-96 rounded-full blur-[100px] opacity-[0.12] bg-primary -top-20 -left-20"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute w-80 h-80 rounded-full blur-[100px] opacity-[0.12] bg-secondary -bottom-20 -right-20"
      animate={{ scale: [1, 0.9, 1], rotate: [0, -5, 5, 0] }}
      transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
    />
  </div>
);

export default ParticleSystem;
