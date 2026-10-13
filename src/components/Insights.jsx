import { INSIGHTS } from "../data/content";
import { Reveal, Eyebrow, MaskedLines } from "./Reveal";

export const Insights = () => (
  <section id="insights" data-testid="insights-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
    <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <Reveal>
          <Eyebrow>Insights</Eyebrow>
        </Reveal>
        <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
          <MaskedLines lines={["FIELD NOTES."]} />
        </h2>
      </div>
      <Reveal delay={0.15} className="md:col-span-4">
        <p className="text-base leading-relaxed text-fog">
          The themes we write, speak and build on — an editorial series from the pod.
        </p>
      </Reveal>
    </div>

    <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
      {INSIGHTS.map((item, i) => (
        <Reveal key={item.theme} delay={(i % 4) * 0.06} className="bg-ink">
          <div
            data-testid={`insight-${i}`}
            data-cursor="explore"
            className="group flex h-full min-h-[230px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-pit"
          >
            <div className="flex items-start justify-between">
              <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">
                {item.category}
              </span>
              <span className="font-grotesk text-xs text-paper/25">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <h3 className="font-grotesk text-2xl font-bold leading-tight tracking-tight text-paper transition-transform duration-500 group-hover:translate-x-1.5">
                {item.theme}
              </h3>
              <p className="mt-4 flex items-center justify-between font-grotesk text-[10px] uppercase tracking-[0.25em] text-paper/40">
                <span>Field notes · 2026</span>
                <span className="text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  READ →
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
