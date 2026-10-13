import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS, IMAGES } from "../data/content";

const REEL_IMAGES = ["dataGrid", "eventDinner", "circuit", "banquet", "concrete", "delhi"];

export const Reel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-78%"]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} data-testid="horizontal-project-reel" className="relative h-[340vh]" aria-label="Selected client work reel">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-max items-stretch gap-5 pl-5 sm:pl-10">
          <div className="flex w-[80vw] shrink-0 flex-col justify-between border border-hairline p-8 sm:w-[34vw]">
            <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
              The reel
            </p>
            <div>
              <h2 className="font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-5xl">
                SELECTED
                <br />
                WORK.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
                Keep scrolling — the reel moves with you. Programmes and campaigns from the Fourward portfolio.
              </p>
            </div>
            <p className="font-grotesk text-[10px] uppercase tracking-[0.35em] text-paper/40">
              {String(PROJECTS.length).padStart(2, "0")} names · scroll-driven
            </p>
          </div>

          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              data-testid={`reel-card-${i}`}
              data-cursor="explore"
              className="group relative flex h-[58vh] w-[72vw] shrink-0 flex-col justify-between overflow-hidden border border-hairline p-7 transition-colors duration-500 hover:border-paper/30 sm:w-[36vw] lg:w-[24vw]"
            >
              {i % 3 === 1 && (
                <img
                  src={IMAGES[REEL_IMAGES[i % REEL_IMAGES.length]]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                />
              )}
              <div className="relative flex items-start justify-between">
                <span className="font-grotesk text-6xl font-bold tracking-tight text-paper/12 transition-colors duration-500 group-hover:text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block h-6 w-[3px] bg-paper/15 transition-colors duration-500 group-hover:bg-accent" aria-hidden="true" />
              </div>
              <div className="relative">
                <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/45">{p.tag}</p>
                <h3 className="mt-3 font-grotesk text-3xl font-bold tracking-tight text-paper transition-transform duration-500 group-hover:translate-x-1.5 sm:text-4xl">
                  {p.name}
                </h3>
              </div>
            </div>
          ))}

          <div className="flex w-[40vw] shrink-0 items-center justify-center">
            <p className="font-grotesk text-2xl font-bold tracking-tight text-paper/30">
              And the next name could be <span className="text-accent">yours.</span>
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 w-full max-w-[1680px] px-5 sm:px-10">
          <div className="h-px w-full bg-hairline">
            <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
