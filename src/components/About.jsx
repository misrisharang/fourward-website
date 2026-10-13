import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Eyebrow, MaskedLines } from "./Reveal";
import { IMAGES, CONTACT } from "../data/content";

export const About = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" data-testid="about-section" className="bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-[1680px] gap-14 px-5 py-28 sm:px-10 sm:py-36 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink/50">About Fourward</p>
          </Reveal>
          <h2 className="mt-5 font-grotesk text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            <MaskedLines lines={["A GROWTH ENGINE,", "RUN AS A POD."]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink/70">
              Fourward is built around four senior marketers who have run search, brand, lifecycle and field
              marketing side by side inside the same growth team. Now they run those capabilities for clients.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              One senior team. One plan. Shipped every week. Measured on pipeline.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-6 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink/50">
              <span>{CONTACT.location}</span>
              <span className="hidden h-1.5 w-1.5 rotate-45 bg-ink/30 sm:block" aria-hidden="true" />
              <span>{CONTACT.reach}</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div ref={imgRef} className="relative overflow-hidden">
              <motion.img
                style={{ y, scale: 1.18 }}
                src={IMAGES.delhi}
                alt="Monochrome architectural light and shadow in Delhi NCR"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <span className="absolute bottom-4 left-4 bg-ink px-3 py-2 font-grotesk text-[10px] uppercase tracking-[0.3em] text-paper/80">
                Delhi NCR, India
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
