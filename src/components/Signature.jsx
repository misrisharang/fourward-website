import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LANE_NAMES } from "../data/content";

const CFG = [
  { left: "23%", converge: "19.5vw" },
  { left: "40.5%", converge: "6.5vw" },
  { left: "58%", converge: "-6.5vw" },
  { left: "75.5%", converge: "-19.5vw" },
];

const SeqLane = ({ i, p }) => {
  const height = useTransform(p, [0.04 + i * 0.02, 0.28 + i * 0.02], ["0vh", "52vh"]);
  const width = useTransform(p, [0.34, 0.56], ["0.1vw", "11vw"]);
  const x = useTransform(p, [0.62, 0.82], ["0vw", CFG[i].converge]);
  const laneOpacity = useTransform(p, [0.8, 0.88], [1, 0]);
  const labelOpacity = useTransform(p, [0.48, 0.58, 0.68, 0.76], [0, 1, 1, 0]);
  const accentH = useTransform(p, [0.62, 0.82], ["0%", "100%"]);

  return (
    <motion.div
      className="absolute flex items-end justify-center border-x border-paper/15 bg-paper/[0.02]"
      style={{ left: CFG[i].left, bottom: "24vh", height, width, x, opacity: laneOpacity }}
    >
      <motion.div
        className="absolute left-0 top-0 w-full bg-accent/25"
        style={{ height: accentH }}
        aria-hidden="true"
      />
      <motion.span
        style={{ opacity: labelOpacity }}
        className="mb-6 font-grotesk text-[10px] font-semibold uppercase tracking-[0.4em] text-paper md:text-xs"
      >
        {LANE_NAMES[i]}
      </motion.span>
    </motion.div>
  );
};

export const Signature = () => {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const dirOpacity = useTransform(p, [0.78, 0.84, 0.9, 0.94], [0, 1, 1, 0]);
  const dirY = useTransform(p, [0.78, 0.86], [30, 0]);
  const lineScale = useTransform(p, [0.84, 0.93], [0, 1]);
  const pipeOpacity = useTransform(p, [0.92, 0.98], [0, 1]);
  const pipeScale = useTransform(p, [0.92, 1], [0.85, 1]);

  return (
    <section ref={ref} data-testid="scroll-sequence-convergence" className="relative h-[420vh]" aria-label="Four lanes become one direction">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <p className="absolute left-1/2 top-24 -translate-x-1/2 whitespace-nowrap font-grotesk text-[10px] font-medium uppercase tracking-[0.35em] text-paper/40 sm:text-[11px]">
          Four lanes → One direction → Pipeline
        </p>

        {[0, 1, 2, 3].map((i) => (
          <SeqLane key={i} i={i} p={p} />
        ))}

        <motion.div
          style={{ opacity: dirOpacity, y: dirY }}
          className="absolute font-grotesk text-4xl font-bold tracking-tight text-paper sm:text-6xl"
        >
          ONE DIRECTION
        </motion.div>

        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute h-[3px] w-[46vw] origin-center bg-accent"
          aria-hidden="true"
        />

        <motion.div
          style={{ opacity: pipeOpacity, scale: pipeScale }}
          className="absolute text-center"
        >
          <span className="font-grotesk text-6xl font-bold tracking-tight text-accent sm:text-8xl">
            PIPELINE
          </span>
          <span className="mt-4 block font-grotesk text-[11px] uppercase tracking-[0.35em] text-paper/50">
            Measured on outcomes, not activity
          </span>
        </motion.div>
      </div>
    </section>
  );
};
