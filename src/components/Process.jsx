import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "../data/content";
import { Reveal, Eyebrow, MaskedLines } from "./Reveal";

export const Process = () => {
  const stepsRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start center", "end center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" data-testid="sticky-process-timeline" className="bg-pit/40">
      <div className="mx-auto grid w-full max-w-[1680px] gap-12 px-5 py-28 sm:px-10 sm:py-36 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal>
              <Eyebrow>Process</Eyebrow>
            </Reveal>
            <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
              <MaskedLines lines={["NO BLACK BOX."]} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-fog">
                One plan. One dashboard. One reporting rhythm. You always know what shipped, what moved and what
                is next.
              </p>
            </Reveal>
            <div className="mt-12 hidden h-44 w-px bg-hairline md:block" aria-hidden="true">
              <motion.div style={{ scaleY: lineScale }} className="h-full w-px origin-top bg-accent" />
            </div>
          </div>
        </div>

        <div ref={stepsRef} className="md:col-span-7">
          {PROCESS.map((s, i) => (
            <motion.div
              key={s.num}
              data-testid={`process-step-${i}`}
              onViewportEnter={() => setActive(i)}
              viewport={{ margin: "-42% 0px -42% 0px" }}
              className="flex min-h-[52vh] flex-col justify-center border-b border-hairline py-12 transition-opacity duration-700 first:border-t md:min-h-[62vh]"
              style={{ opacity: active === i ? 1 : 0.28 }}
            >
              <p className="flex items-center gap-4 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em]">
                <span className={active === i ? "text-accent" : "text-paper/40"}>{s.num}</span>
                <span className="text-paper/40">{s.cadence}</span>
              </p>
              <h3 className="mt-5 font-grotesk text-4xl font-bold tracking-tight text-paper sm:text-5xl">
                {s.title}
              </h3>
              <ul className="mt-6 space-y-1.5">
                {s.lines.map((line) => (
                  <li key={line} className="flex items-center gap-3 text-base text-fog sm:text-lg">
                    <span
                      className={`block h-1.5 w-1.5 rotate-45 transition-colors duration-500 ${active === i ? "bg-accent" : "bg-paper/25"}`}
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
