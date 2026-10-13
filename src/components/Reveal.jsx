import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 44, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-accent ${className}`}>
    {children}
  </p>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", baseDelay = 0 }) => (
  <span className={`block ${className}`}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "112%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: baseDelay + i * 0.1, ease: EASE }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
