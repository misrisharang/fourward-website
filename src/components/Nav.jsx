import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSite } from "../context/site";
import { Logo } from "./Logo";
import { EASE } from "./Reveal";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Lanes", href: "#lanes" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollTo, openContact, lenisRef } = useSite();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenisRef]);

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        data-testid="main-nav"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? "border-b border-hairline bg-ink/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-5 py-4 sm:px-10">
          <button
            data-testid="nav-logo"
            onClick={() => go("#top")}
            aria-label="Fourward — back to top"
            className="flex items-center gap-3"
          >
            <Logo className="h-6 w-6" />
            <span className="font-grotesk text-base font-bold tracking-[0.22em] text-paper">FOURWARD</span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <button
                key={l.label}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="link-line font-grotesk text-[11px] font-medium uppercase tracking-[0.25em] text-paper/65 transition-colors duration-300 hover:text-paper"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-cta-start-conversation"
              onClick={openContact}
              className="bg-accent px-5 py-2.5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(199,243,107,0.25)]"
            >
              Start a conversation
            </button>
          </nav>

          <button
            data-testid="nav-menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
          >
            <span className="block h-px w-7 bg-paper" />
            <span className="block h-px w-5 bg-paper" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink"
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-10">
              <div className="flex items-center gap-3">
                <Logo className="h-6 w-6" />
                <span className="font-grotesk text-base font-bold tracking-[0.22em]">FOURWARD</span>
              </div>
              <button
                data-testid="nav-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 font-grotesk text-[11px] uppercase tracking-[0.3em] text-paper/70"
              >
                Close ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <div key={l.label} className="overflow-hidden">
                  <motion.button
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: EASE }}
                    onClick={() => go(l.href)}
                    className="flex items-baseline gap-4 py-2 text-left font-grotesk text-5xl font-bold tracking-tight text-paper transition-colors hover:text-accent sm:text-6xl"
                  >
                    <span className="font-grotesk text-xs tracking-[0.3em] text-accent">0{i + 1}</span>
                    {l.label}
                  </motion.button>
                </div>
              ))}
              <motion.button
                data-testid="mobile-nav-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
                onClick={() => {
                  setOpen(false);
                  openContact();
                }}
                className="mt-8 w-max bg-accent px-7 py-3.5 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Start a conversation
              </motion.button>
            </nav>
            <p className="px-8 pb-8 font-grotesk text-[11px] uppercase tracking-[0.3em] text-paper/40">
              Four lanes. One direction.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
