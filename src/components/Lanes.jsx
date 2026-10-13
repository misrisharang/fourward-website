import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANES } from "../data/content";
import { Reveal, Eyebrow, MaskedLines, EASE } from "./Reveal";
import { useSite } from "../context/site";

const LaneOverlay = ({ lane, onClose }) => {
  const { openContact, scrollTo, lenisRef } = useSite();

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
      data-testid={`lane-overlay-${lane.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={lane.name}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="h-full overflow-y-auto"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-grotesk text-sm font-semibold tracking-[0.3em] text-accent">LANE {lane.num}</p>
              <h3 className="mt-4 max-w-3xl font-grotesk text-4xl font-bold leading-none tracking-tight text-paper sm:text-6xl">
                {lane.name}
              </h3>
            </div>
            <button
              data-testid="lane-overlay-close"
              onClick={onClose}
              aria-label="Close lane detail"
              className="shrink-0 border border-hairline px-4 py-3 font-grotesk text-[11px] uppercase tracking-[0.25em] text-paper/70 transition-colors hover:border-accent hover:text-accent"
            >
              Close ✕
            </button>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">{lane.description}</p>

          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {lane.services.map((s) => (
              <div key={s} className="bg-ink px-5 py-4 text-sm text-paper/80">
                {s}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-8 border border-hairline p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-grotesk text-5xl font-bold text-accent">{lane.metric.value}</p>
              <p className="mt-2 text-sm text-fog">{lane.metric.label}</p>
              <p className="mt-1 font-grotesk text-[10px] uppercase tracking-[0.3em] text-paper/40">
                Source · {lane.metric.source}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                data-testid="lane-overlay-case-btn"
                onClick={() => {
                  onClose();
                  setTimeout(() => scrollTo("#work"), 80);
                }}
                className="link-line px-1 py-3 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 hover:text-paper"
              >
                See the case study
              </button>
              <button
                data-testid="lane-overlay-cta"
                onClick={() => {
                  onClose();
                  setTimeout(openContact, 80);
                }}
                className="bg-accent px-6 py-3.5 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a conversation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DesktopPanels = ({ onOpen }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      data-testid="interactive-four-lanes-panels"
      className="hidden h-[76vh] min-h-[560px] border-y border-hairline lg:flex"
      onMouseLeave={() => setActive(null)}
    >
      {LANES.map((lane, i) => {
        const isActive = active === i;
        return (
          <div
            key={lane.id}
            data-testid={`lane-panel-${lane.id}`}
            data-cursor="open"
            role="button"
            tabIndex={0}
            aria-label={`Open ${lane.name}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => onOpen(lane)}
            onKeyDown={(e) => e.key === "Enter" && onOpen(lane)}
            className="group relative flex flex-col justify-between overflow-hidden border-r border-hairline p-7 last:border-r-0"
            style={{
              flexGrow: active === null ? 1 : isActive ? 2.6 : 0.62,
              flexBasis: 0,
              transition: "flex-grow 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
              style={{ background: "linear-gradient(180deg, rgba(199,243,107,0.07), transparent 55%)" }}
              aria-hidden="true"
            />
            <div className="relative flex items-start justify-between">
              <span className={`font-grotesk text-sm font-semibold tracking-[0.3em] transition-colors duration-500 ${isActive ? "text-accent" : "text-paper/40"}`}>
                {lane.num}
              </span>
              <span
                className={`block h-8 w-[3px] transition-colors duration-500 ${isActive ? "bg-accent" : "bg-paper/20"}`}
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <h3
                className={`font-grotesk font-bold leading-[1.02] tracking-tight transition-all duration-700 ${
                  isActive ? "text-3xl text-paper xl:text-4xl" : "text-xl text-paper/70 xl:text-2xl"
                }`}
              >
                {lane.name}
              </h3>
              <div
                className={`grid transition-all duration-700 ${isActive ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-md text-sm leading-relaxed text-fog">{lane.description}</p>
                  <p className="mt-4 font-grotesk text-2xl font-bold text-accent">{lane.metric.value}</p>
                  <p className="text-xs text-fog">{lane.metric.label}</p>
                  <p className="mt-5 font-grotesk text-[10px] uppercase tracking-[0.3em] text-paper/50">
                    {lane.services.length} disciplines — click to open the lane →
                  </p>
                </div>
              </div>
              {!isActive && (
                <p
                  className="mt-6 hidden font-grotesk text-[10px] uppercase tracking-[0.4em] text-paper/35 xl:block"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {lane.short}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MobileAccordion = () => {
  const [openId, setOpenId] = useState(null);
  const { openContact } = useSite();
  return (
    <div data-testid="lanes-accordion" className="border-t border-hairline lg:hidden">
      {LANES.map((lane) => {
        const open = openId === lane.id;
        return (
          <div key={lane.id} className="border-b border-hairline">
            <button
              data-testid={`lane-accordion-${lane.id}`}
              onClick={() => setOpenId(open ? null : lane.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <div className="flex items-baseline gap-4">
                <span className={`font-grotesk text-xs font-semibold tracking-[0.3em] ${open ? "text-accent" : "text-paper/40"}`}>
                  {lane.num}
                </span>
                <span className="font-grotesk text-xl font-bold leading-tight tracking-tight text-paper">
                  {lane.name}
                </span>
              </div>
              <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease: EASE }} className="text-xl text-accent">
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-9 pr-2">
                    <p className="text-sm leading-relaxed text-fog">{lane.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {lane.services.map((s) => (
                        <span key={s} className="border border-hairline px-3 py-1.5 text-xs text-paper/70">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 font-grotesk text-3xl font-bold text-accent">{lane.metric.value}</p>
                    <p className="text-xs text-fog">{lane.metric.label}</p>
                    <button
                      data-testid={`lane-accordion-cta-${lane.id}`}
                      onClick={openContact}
                      className="mt-6 bg-accent px-5 py-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
                    >
                      Start a conversation
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export const Lanes = () => {
  const [openLane, setOpenLane] = useState(null);
  return (
    <section id="lanes" data-testid="lanes-section" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
      <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow>The four lanes</Eyebrow>
          </Reveal>
          <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
            <MaskedLines lines={["EVERYTHING A MARKETING", "DEPARTMENT DOES."]} />
            <MaskedLines lines={["ORGANIZED INTO FOUR LANES."]} baseDelay={0.25} className="text-paper/40" />
          </h2>
        </div>
        <Reveal delay={0.2} className="md:col-span-4">
          <p className="text-base leading-relaxed text-fog">
            The lanes are how we split ownership, not the limit of what we do. Between them they cover 28
            disciplines, with a senior owner for every lane.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <DesktopPanels onOpen={setOpenLane} />
        <MobileAccordion />
      </Reveal>

      <AnimatePresence>
        {openLane && <LaneOverlay lane={openLane} onClose={() => setOpenLane(null)} />}
      </AnimatePresence>
    </section>
  );
};
