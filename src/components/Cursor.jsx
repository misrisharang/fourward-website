import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const LABELS = { view: "VIEW", explore: "EXPLORE", drag: "DRAG" };

export const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.7 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const tagged = e.target.closest("[data-cursor]");
      if (tagged) setVariant(tagged.dataset.cursor);
      else if (e.target.closest("a, button, [role='button'], select, label")) setVariant("ring");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  const label = LABELS[variant] || null;
  const isExternal = variant === "external";

  return (
    <motion.div
      data-testid="custom-cursor"
      className="pointer-events-none fixed left-0 top-0 z-[200]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={variant}
        variants={{
          default: { width: 8, height: 8, backgroundColor: "rgba(199,243,107,1)", border: "1.5px solid rgba(199,243,107,0)" },
          ring: { width: 42, height: 42, backgroundColor: "rgba(199,243,107,0)", border: "1.5px solid rgba(199,243,107,0.85)" },
          view: { width: 78, height: 78, backgroundColor: "rgba(199,243,107,1)", border: "1.5px solid rgba(199,243,107,1)" },
          explore: { width: 88, height: 88, backgroundColor: "rgba(199,243,107,1)", border: "1.5px solid rgba(199,243,107,1)" },
          drag: { width: 78, height: 78, backgroundColor: "rgba(199,243,107,1)", border: "1.5px solid rgba(199,243,107,1)" },
          external: { width: 46, height: 46, backgroundColor: "rgba(199,243,107,1)", border: "1.5px solid rgba(199,243,107,1)" },
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {label && (
          <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">{label}</span>
        )}
        {isExternal && <span className="font-grotesk text-base font-semibold text-ink">↗</span>}
      </motion.div>
    </motion.div>
  );
};
