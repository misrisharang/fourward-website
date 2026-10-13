import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { METRICS } from "../data/content";
import { Reveal, Eyebrow, MaskedLines, EASE } from "./Reveal";

const CountUp = ({ value, prefix = "", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export const Metrics = () => (
  <section id="numbers" data-testid="metrics-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
    <div className="mb-16">
      <Reveal>
        <Eyebrow>Proof of work</Eyebrow>
      </Reveal>
      <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
        <MaskedLines lines={["WHAT WE SHIPPED."]} />
        <MaskedLines lines={["AND WHAT IT MOVED."]} baseDelay={0.15} className="text-paper/40" />
      </h2>
    </div>

    <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
      {METRICS.map((m, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08} className="bg-ink">
          <div data-testid={`metric-${i}`} className="group flex h-full min-h-[220px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-pit">
            <p className="font-grotesk text-6xl font-bold tracking-tight text-paper transition-colors duration-500 group-hover:text-accent sm:text-7xl">
              {m.text ? m.text : <CountUp value={m.value} prefix={m.prefix || ""} suffix={m.suffix || ""} decimals={m.decimals || 0} />}
            </p>
            <div className="mt-6">
              <p className="max-w-xs text-sm leading-snug text-fog">{m.label}</p>
              <p className="mt-3 flex items-center gap-2 font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">
                <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
                {m.source}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
