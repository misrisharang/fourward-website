import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DASHBOARD, LANE_NAMES } from "../data/content";
import { Reveal, Eyebrow, MaskedLines, EASE } from "./Reveal";

export const Dashboard = () => {
  const [lane, setLane] = useState("SEARCH");

  return (
    <section id="dashboard" data-testid="sample-reporting-dashboard" className="mx-auto w-full max-w-[1680px] px-5 py-28 sm:px-10 sm:py-36">
      <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow>Reporting</Eyebrow>
          </Reveal>
          <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight text-paper sm:text-6xl">
            <MaskedLines lines={["ONE DASHBOARD.", "EVERY LANE, EVERY WEEK."]} baseDelay={0} />
          </h2>
        </div>
        <Reveal delay={0.15} className="md:col-span-4">
          <p className="text-base leading-relaxed text-fog">
            This is the shape of the reporting you get — pipeline-first, per lane, every week.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="border border-hairline bg-pit/30">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline px-6 py-4">
            <p className="font-grotesk text-xs font-semibold uppercase tracking-[0.3em] text-paper/70">
              Fourward / Growth Dashboard
            </p>
            <p
              data-testid="dashboard-sample-badge"
              className="flex items-center gap-2 border border-accent/40 px-3 py-1.5 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-accent"
            >
              <span className="block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
              Sample reporting view — illustrative data, not live
            </p>
          </div>

          <div className="flex flex-wrap border-b border-hairline" role="tablist" aria-label="Dashboard lanes">
            {LANE_NAMES.map((l) => (
              <button
                key={l}
                data-testid={`dashboard-tab-${l.toLowerCase()}`}
                role="tab"
                aria-selected={lane === l}
                onClick={() => setLane(l)}
                className={`relative px-6 py-4 font-grotesk text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-300 ${
                  lane === l ? "text-accent" : "text-paper/45 hover:text-paper"
                }`}
              >
                {l}
                {lane === l && (
                  <motion.span layoutId="dash-tab" className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={lane}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5"
            >
              {DASHBOARD[lane].map((kpi, i) => (
                <div key={kpi.k} data-testid={`dashboard-kpi-${lane.toLowerCase()}-${i}`} className="bg-ink p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fog">{kpi.k}</p>
                  <p className="mt-3 font-grotesk text-3xl font-bold tracking-tight text-paper">{kpi.v}</p>
                  <p className="mt-1 font-grotesk text-xs font-semibold text-accent">{kpi.d}</p>
                  <div className="mt-5 flex h-14 items-end gap-[3px]" aria-hidden="true">
                    {kpi.bars.map((h, j) => (
                      <motion.div
                        key={j}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.05 + j * 0.035, ease: EASE }}
                        style={{ height: `${h}%` }}
                        className={`w-full origin-bottom ${j === kpi.bars.length - 1 ? "bg-accent" : "bg-paper/15"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
};
