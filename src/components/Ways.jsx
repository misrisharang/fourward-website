import { WAYS } from "../data/content";
import { Reveal, Eyebrow, MaskedLines } from "./Reveal";
import { useSite } from "../context/site";

export const Ways = () => {
  const { openContact } = useSite();
  return (
    <section id="engage" data-testid="ways-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
      <div className="mb-14">
        <Reveal>
          <Eyebrow>Engagement models</Eyebrow>
        </Reveal>
        <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
          <MaskedLines lines={["WAYS TO WORK WITH US."]} />
        </h2>
      </div>

      <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
        {WAYS.map((w, i) => (
          <Reveal key={w.num} delay={i * 0.08} className="bg-ink">
            <div
              data-testid={`way-card-${w.num}`}
              className="group relative flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-pit sm:p-10"
            >
              {w.featured && (
                <span className="absolute right-0 top-0 bg-accent px-3 py-1.5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                  The full department
                </span>
              )}
              <p className="font-grotesk text-sm font-semibold tracking-[0.3em] text-paper/40">{w.num}</p>
              <h3 className="mt-8 font-grotesk text-4xl font-bold tracking-tight text-paper transition-colors duration-500 group-hover:text-accent">
                {w.name}
              </h3>
              <p className="mt-3 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">
                {w.meta}
              </p>
              <p className="mt-6 text-base leading-relaxed text-fog">{w.body}</p>
              <ul className="mt-8 space-y-2.5 border-t border-hairline pt-6 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                {w.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-paper/75">
                    <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <button
                data-testid={`way-cta-${w.num}`}
                onClick={openContact}
                className="link-line mt-auto w-max pt-10 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 transition-colors hover:text-accent"
              >
                Start with {w.name.toLowerCase()} →
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
