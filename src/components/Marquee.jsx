const ITEMS = ["SEARCH", "BRAND", "LIFECYCLE", "FIELD", "ONE DIRECTION", "PIPELINE"];

const Row = ({ hidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span
          className={`px-8 font-grotesk text-4xl font-bold tracking-tight sm:text-6xl ${
            item === "PIPELINE" ? "text-accent" : "text-paper/85"
          }`}
        >
          {item}
        </span>
        <span className="block h-2 w-2 rotate-45 bg-accent/70" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div data-testid="editorial-marquee" className="overflow-hidden border-y border-hairline py-7">
    <div className="marquee-track flex">
      <Row />
      <Row hidden />
    </div>
  </div>
);
