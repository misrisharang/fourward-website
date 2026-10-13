import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES, IMAGES } from "../data/content";
import { Reveal, Eyebrow, MaskedLines, EASE } from "./Reveal";
import { useSite } from "../context/site";

const CaseOverlay = ({ cs, onClose }) => {
  const { openContact, lenisRef } = useSite();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    lenisRef.current?.stop();
    return () => {
      document.body.style.overflow = "";
      lenisRef.current?.start();
    };
  }, [lenisRef]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      data-testid={`case-overlay-${cs.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[85] bg-ink"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study — ${cs.client}`}
    >
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        exit={{ y: 80 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="h-full overflow-y-auto"
      >
        <button
          data-testid="case-overlay-close"
          onClick={onClose}
          aria-label="Close case study"
          className="fixed right-5 top-5 z-10 border border-hairline bg-ink/80 px-4 py-3 font-grotesk text-[11px] uppercase tracking-[0.25em] text-paper/80 backdrop-blur-md transition-colors hover:border-accent hover:text-accent sm:right-10 sm:top-8"
        >
          Close ✕
        </button>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-10">
          <p className="font-grotesk text-sm font-semibold tracking-[0.3em] text-accent">
            CASE STUDY {cs.index} — {cs.client}
          </p>
          <p className="mt-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-paper/45">{cs.lane}</p>
          <h3 className="mt-8 max-w-4xl font-grotesk text-4xl font-bold leading-[1.02] tracking-tight text-paper sm:text-6xl">
            {cs.headline}
          </h3>

          <div className="mt-12 overflow-hidden">
            <motion.img
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
              src={IMAGES[cs.image]}
              alt={cs.imageAlt}
              className="aspect-[16/8] w-full object-cover grayscale-[35%]"
              loading="lazy"
            />
          </div>

          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-paper/80 sm:text-xl">{cs.story}</p>

          <div className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-ink p-6">
                <p className="font-grotesk text-4xl font-bold text-accent sm:text-5xl">{r.value}</p>
                <p className="mt-3 text-sm text-fog">{r.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 font-grotesk text-[11px] uppercase tracking-[0.3em] text-paper/45">What shipped</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {cs.shipped.map((s) => (
              <span key={s} className="border border-hairline px-4 py-2 text-sm text-paper/80">
                {s}
              </span>
            ))}
          </div>

          <button
            data-testid="case-overlay-cta"
            onClick={() => {
              onClose();
              setTimeout(openContact, 80);
            }}
            className="group mt-14 flex items-center gap-3 bg-accent px-7 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a conversation
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CaseStudies = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" data-testid="case-studies-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
      <div className="mb-6 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
          </Reveal>
          <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
            <MaskedLines lines={["OUR WORK."]} />
            <MaskedLines lines={["WHAT SHIPPED. WHAT MOVED."]} baseDelay={0.15} className="text-paper/40" />
          </h2>
        </div>
      </div>

      <div>
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.id}>
            <article
              data-testid={`case-study-${cs.id}`}
              data-cursor="view"
              role="button"
              tabIndex={0}
              aria-label={`Open case study — ${cs.client}, ${cs.lane}`}
              onClick={() => setSelected(cs)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(cs)}
              className="group grid items-center gap-8 border-t border-hairline py-14 last:border-b md:grid-cols-12"
            >
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <p className="flex items-center gap-3 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-paper/45">
                  <span className="text-accent">{cs.index}</span> {cs.client} · {cs.lane}
                </p>
                <h3 className="mt-5 max-w-md font-grotesk text-3xl font-bold leading-[1.05] tracking-tight text-paper transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                  {cs.headline}
                </h3>
                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                  {cs.results.slice(0, 3).map((r) => (
                    <p key={r.label} className="text-xs text-fog">
                      <span className="mr-2 font-grotesk text-lg font-bold text-paper transition-colors duration-500 group-hover:text-accent">
                        {r.value}
                      </span>
                      {r.label}
                    </p>
                  ))}
                </div>
              </div>
              <div className={`overflow-hidden md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  initial={{ clipPath: "inset(8% 8% 8% 8%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <img
                    src={IMAGES[cs.image]}
                    alt={cs.imageAlt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </motion.div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{selected && <CaseOverlay cs={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
};
