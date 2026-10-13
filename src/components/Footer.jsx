import { Logo } from "./Logo";
import { CONTACT, LANES } from "../data/content";
import { useSite } from "../context/site";

const MENU = [
  { label: "Work", href: "#work" },
  { label: "Lanes", href: "#lanes" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const { scrollTo, openContact } = useSite();
  return (
    <footer data-testid="footer" className="border-t border-hairline">
      <div className="mx-auto w-full max-w-[1680px] px-5 pb-10 pt-20 sm:px-10">
        <button
          data-testid="footer-wordmark"
          onClick={() => scrollTo("#top")}
          aria-label="Back to top"
          className="group block w-full text-left"
        >
          <span className="block font-grotesk text-[16vw] font-bold leading-[0.85] tracking-tight text-paper/10 transition-colors duration-700 group-hover:text-paper/20 lg:text-[11rem]">
            FOURWARD<span className="text-accent/40 transition-colors duration-700 group-hover:text-accent">.</span>
          </span>
        </button>

        <div className="mt-14 grid gap-12 border-t border-hairline pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-5 w-5" />
              <span className="font-grotesk text-sm font-bold tracking-[0.22em] text-paper">FOURWARD</span>
            </div>
            <p className="mt-4 max-w-xs font-grotesk text-lg font-semibold text-paper/80">
              Four lanes. One direction.
            </p>
            <p className="mt-3 text-sm text-fog">
              {CONTACT.location} · {CONTACT.reach}
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Footer">
            <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">Menu</p>
            <ul className="mt-5 space-y-3">
              {MENU.map((m) => (
                <li key={m.label}>
                  <button
                    data-testid={`footer-link-${m.label.toLowerCase()}`}
                    onClick={() => scrollTo(m.href)}
                    className="link-line text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">Lanes</p>
            <ul className="mt-5 space-y-3">
              {LANES.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`footer-lane-${l.id}`}
                    onClick={() => scrollTo("#lanes")}
                    className="link-line text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {l.name.charAt(0) + l.name.slice(1).toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a data-testid="footer-email" data-cursor="external" href={`mailto:${CONTACT.email}`} className="link-line text-paper/70 transition-colors hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-linkedin"
                  data-cursor="external"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-paper/70 transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <button data-testid="footer-cta" onClick={openContact} className="link-line text-paper/70 transition-colors hover:text-accent">
                  Start a conversation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-paper/40">
            Every number names its source.
          </p>
          <p className="text-xs text-paper/30">© 2026 Fourward · Delhi NCR, India</p>
        </div>
      </div>
    </footer>
  );
};
