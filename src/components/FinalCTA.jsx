import { useSite } from "../context/site";
import { Reveal, MaskedLines } from "./Reveal";

export const FinalCTA = () => {
  const { openContact } = useSite();
  return (
    <section id="contact" data-testid="final-cta" className="relative overflow-hidden border-t border-hairline">
      <div className="pointer-events-none absolute inset-0 flex justify-center gap-[14vw]" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-full w-px bg-gradient-to-b from-paper/20 via-paper/5 to-paper/20"
            style={{ animation: `fw-lane-pulse ${6 + i * 1.4}s ease-in-out ${i * 0.8}s infinite` }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-[1680px] flex-col items-start justify-center px-5 py-32 sm:px-10">
        <Reveal>
          <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
            The starting point
          </p>
        </Reveal>
        <h2 className="mt-6 max-w-6xl font-grotesk text-5xl font-bold leading-[0.96] tracking-tight text-paper sm:text-7xl lg:text-8xl">
          <MaskedLines lines={["TELL US THE NUMBER", "YOU NEED TO MOVE."]} />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
            Signups. Pipeline. Citations. Share of voice. Send us the metric and the deadline.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fog">
            Within three working days, you get a written 30-day plan and what it would cost. Free, and useful
            even if you never hire us.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <button
            data-testid="final-cta-button"
            onClick={openContact}
            className="group mt-12 flex items-center gap-4 bg-accent px-9 py-5 font-grotesk text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(199,243,107,0.3)]"
          >
            Start a conversation
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};
