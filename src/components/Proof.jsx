import { CLIENTS } from "../data/content";
import { Reveal, Eyebrow, MaskedLines } from "./Reveal";

export const Proof = () => (
  <section id="proof" data-testid="proof-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
    <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <Reveal>
          <Eyebrow>Trust</Eyebrow>
        </Reveal>
        <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
          <MaskedLines lines={["PROOF, NOT PROMISES."]} />
        </h2>
      </div>
      <Reveal delay={0.15} className="md:col-span-4">
        <p className="text-base leading-relaxed text-fog">
          Client and partner programmes from the Fourward portfolio — across search, brand, lifecycle and field.
        </p>
      </Reveal>
    </div>

    <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
      {CLIENTS.map((c, i) => (
        <Reveal key={c} delay={(i % 3) * 0.06} className="bg-ink">
          <div
            data-testid={`client-${i}`}
            className="group flex h-full min-h-[130px] items-center justify-between p-8 transition-colors duration-500 hover:bg-pit"
          >
            <span className="font-grotesk text-xl font-semibold tracking-tight text-paper/60 transition-colors duration-500 group-hover:text-paper sm:text-2xl">
              {c}
            </span>
            <span
              className="block h-2 w-2 rotate-45 bg-paper/15 transition-colors duration-500 group-hover:bg-accent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
