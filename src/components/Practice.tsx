const pillars = [
  {
    n: "01",
    label: "Faith",
    title: "Belief in inherent potential",
    body: "Faith in Nichiren Buddhism is not blind belief, but a confident trust in the Buddha nature — the courage, wisdom, and compassion — that exists equally within every person’s life.",
  },
  {
    n: "02",
    label: "Practice",
    title: "Chanting Nam-myoho-renge-kyo",
    body: "Practice has two aspects: practice for oneself — chanting Nam-myoho-renge-kyo and reciting portions of the Lotus Sutra daily — and practice for others, sharing this Buddhism through compassionate dialogue.",
  },
  {
    n: "03",
    label: "Study",
    title: "The writings of Nichiren Daishonin",
    body: "Studying the writings of Nichiren Daishonin and SGI President Daisaku Ikeda’s guidance gives our daily practice direction, depth, and a foundation rooted in reason and humanity.",
  },
];

export const Practice = () => {
  return (
    <section id="practice" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-16">
        <div className="flex flex-col gap-5 max-w-[60ch]">
          <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
            Faith · Practice · Study
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] tracking-tight text-balance">
            The three foundations of our daily life.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Nichiren Buddhism encourages a dynamic balance of faith, practice,
            and study. Together, these three elements bring forth our inherent
            wisdom and the strength to transform any circumstance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group bg-background p-8 md:p-10 rounded-sm shadow-soft border-t-2 border-transparent hover:border-accent hover:shadow-elevated transition-all duration-300 ease-soft flex flex-col gap-6"
            >
              <div className="text-xs font-medium text-accent tabular-nums tracking-[0.2em]">
                {p.n} &mdash; {p.label.toUpperCase()}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-2xl text-primary leading-snug">
                  {p.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed text-pretty">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
