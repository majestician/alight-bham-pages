const resources = [
  {
    title: "SGI-USA",
    href: "https://www.sgi-usa.org/",
    body: "The national SGI-USA website — introductions to Buddhism, study materials, news, and the member portal.",
  },
  {
    title: "World Tribune & Living Buddhism",
    href: "https://www.worldtribune.org/",
    body: "SGI-USA’s weekly newspaper and monthly study journal — members’ experiences, study, and in-depth lectures on the writings of Nichiren Daishonin.",
  },
  {
    title: "The Basics of Nichiren Buddhism",
    href: "https://www.sgi-usa.org/basics-of-our-practice/",
    body: "An accessible introduction to Buddhism for daily life, the chant, and SGI’s humanistic philosophy.",
  },
  {
    title: "Buddhability",
    href: "https://buddhability.org/",
    body: "A podcast and online community exploring how Buddhist practice can unlock your potential to live a happier, more empowered life.",
  },
];

export const Resources = () => {
  return (
    <section id="resources" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col gap-5 max-w-[60ch] mb-16">
          <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
            Study &amp; Reading
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] tracking-tight text-balance">
            Continue exploring.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Materials and publications from SGI-USA to learn more about
            Nichiren Buddhism, the practice of chanting Nam-myoho-renge-kyo, and
            the global SGI movement.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
          {resources.map((r) => (
            <li key={r.title}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background p-8 md:p-10 rounded-sm shadow-soft hover:shadow-elevated transition-all duration-300 ease-soft border-l-2 border-transparent hover:border-accent"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-serif text-2xl text-primary leading-snug">
                    {r.title}
                  </h3>
                  <span
                    aria-hidden
                    className="text-accent text-xl translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-soft"
                  >
                    →
                  </span>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-3 text-pretty">
                  {r.body}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
