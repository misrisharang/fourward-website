import { Reveal, Eyebrow, MaskedLines } from "./Reveal";
import { WHY } from "../data/content";

export const Why = () => (
  <section id="why" data-testid="why-section" className="bg-paper text-ink">
    <div className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
      <Reveal>
        <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink/50">Why Fourward</p>
      </Reveal>
      <h2 className="mt-5 max-w-4xl font-grotesk text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
        <MaskedLines lines={["SENIOR MARKETERS,", "WORKING AS ONE GROWTH TEAM."]} />
      </h2>

      <div className="mt-20">
        {WHY.map((w, i) => (
          <Reveal key={w.num} delay={i * 0.05}>
            <div
              data-testid={`why-principle-${w.num}`}
              className="group grid gap-4 border-t border-ink/15 py-10 transition-colors duration-500 last:border-b hover:bg-ink/[0.03] md:grid-cols-12 md:items-baseline"
            >
              <span className="font-grotesk text-sm font-semibold tracking-[0.3em] text-ink/40 md:col-span-2">
                {w.num}
              </span>
              <h3 className="font-grotesk text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl md:col-span-5">
                {w.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-ink/60 md:col-span-5">{w.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
