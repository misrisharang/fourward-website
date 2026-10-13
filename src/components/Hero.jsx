import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useSite } from "../context/site";
import { LANE_NAMES } from "../data/content";
import { EASE } from "./Reveal";

const LoadLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.15, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const HeroLane = ({ index, smoothX, spread }) => {
  const positions = [18, 39, 61, 82];
  const factors = [-26, -9, 9, 26];
  const spreadDirs = [-1, -1, 1, 1];
  const spreadMag = [110, 55, 55, 110];
  const x = useTransform(
    () => (smoothX.get() - 0.5) * factors[index] * 2 + spread.get() * spreadDirs[index] * spreadMag[index]
  );
  const opacity = useTransform(spread, [0, 0.8], [1, 0]);
  return (
    <motion.div
      className="absolute bottom-0 top-0"
      style={{ left: `${positions[index]}%`, x, opacity }}
      aria-hidden="true"
    >
      <div
        className="h-full w-px bg-gradient-to-b from-paper/25 via-paper/10 to-paper/25"
        style={{ animation: `fw-lane-pulse ${5 + index * 1.3}s ease-in-out ${index * 0.7}s infinite` }}
      />
      <span className="absolute -left-1 top-[16%] block h-10 w-[3px] bg-accent" />
      <span
        className="absolute bottom-24 left-3 hidden font-grotesk text-[10px] font-medium uppercase tracking-[0.5em] text-paper/35 md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        {LANE_NAMES[index]}
      </span>
    </motion.div>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { openContact, scrollTo } = useSite();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const mx = useMotionValue(0.5);
  const smoothX = useSpring(mx, { stiffness: 55, damping: 18 });

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      onMouseMove={(e) => mx.set(e.clientX / window.innerWidth)}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" data-testid="hero-kinetic-lanes">
        {[0, 1, 2, 3].map((i) => (
          <HeroLane key={i} index={i} smoothX={smoothX} spread={scrollYProgress} />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#0B0B0B_92%)]" />
      </div>

      <motion.div style={{ scale, opacity, y }} className="relative z-10 mx-auto w-full max-w-[1680px] px-5 pb-8 sm:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-6 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-accent"
        >
          A four-lane marketing pod — Delhi NCR · Worldwide
        </motion.p>

        <h1 className="font-grotesk text-[15.5vw] font-bold leading-[0.92] tracking-[-0.02em] text-paper sm:text-[12vw] lg:text-[9.5rem] xl:text-[10.5rem]">
          <LoadLine delay={0.15}>FOUR LANES.</LoadLine>
          <LoadLine delay={0.3}>
            ONE DIRECTION<span className="text-accent">.</span>
          </LoadLine>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
            className="md:col-span-7"
          >
            <p className="max-w-xl text-lg font-medium leading-snug text-paper sm:text-xl">
              Search. Brand. Lifecycle. Field. One senior team running the whole journey from first search to
              signed contract.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fog">
              A four-lane marketing pod for teams that need senior strategy and execution without building another
              department.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            className="flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end"
          >
            <button
              data-testid="hero-cta-start-conversation"
              onClick={openContact}
              className="group flex items-center gap-3 bg-accent px-7 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(199,243,107,0.3)]"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
            <button
              data-testid="hero-cta-see-work"
              onClick={() => scrollTo("#work")}
              className="link-line px-2 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 transition-colors hover:text-paper"
            >
              See our work
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex items-center gap-3 border-t border-hairline pt-5"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            ↓
          </motion.span>
          <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.35em] text-paper/45">
            Scroll to explore
          </span>
          <span className="ml-auto hidden font-grotesk text-[10px] uppercase tracking-[0.35em] text-paper/45 sm:block">
            28 disciplines · 4 senior owners · 1 plan
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
