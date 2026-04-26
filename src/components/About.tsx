export const About = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
              About the District
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] tracking-tight mt-4 text-balance">
              A grassroots community in West Birmingham.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>
              The Soka Gakkai International-USA (SGI-USA) is the most diverse
              Buddhist community in the United States — part of a global,
              community-based network of more than 11 million people in 192
              countries and territories who practice Nichiren Buddhism, centered
              on respect for the dignity of life.
            </p>
            <p>
              The <span className="text-primary font-medium">Birmingham West District</span>{" "}
              is a local circle of practitioners within the Alabama Region. We
              gather for monthly discussion meetings, study sessions, and
              community activities — open to anyone curious about Buddhism or
              looking for a supportive practice community in the Birmingham area.
            </p>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-primary leading-snug border-l-2 border-accent pl-6 mt-4">
              “True happiness means forging a strong spirit that is undefeated,
              no matter how trying our circumstances.”
              <footer className="text-sm not-italic text-muted-foreground font-sans mt-3 tracking-wide">
                — Daisaku Ikeda
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
