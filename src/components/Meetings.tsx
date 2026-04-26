const meetings = [
  {
    title: "District Discussion Meeting",
    when: "Monthly · [TBD — date & time]",
    where: "[TBD — Birmingham, AL location]",
    body: "Our central monthly gathering. We chant together, share encouraging experiences from daily life, and discuss a guidance or study theme. Newcomers especially welcome.",
  },
  {
    title: "Study Meeting",
    when: "Monthly · [TBD — date & time]",
    where: "[TBD — host home or community space]",
    body: "A relaxed group study based on the writings of Nichiren Daishonin and SGI-USA publications such as the World Tribune and Living Buddhism.",
  },
  {
    title: "Introduction to Buddhism",
    when: "By request — anytime",
    where: "In person or by phone / video",
    body: "If you’d like to learn about chanting Nam-myoho-renge-kyo or have questions about the practice, a member would be glad to meet with you one-on-one.",
  },
];

export const Meetings = () => {
  return (
    <section id="meetings" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
              Activities
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] tracking-tight mt-4 text-balance">
              Meetings &amp; gatherings.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>
              Our local meetings are open to everyone. They are warm, informal,
              and rooted in dialogue — a place to chant together, hear how
              members are applying Buddhism to real life, and ask any question
              you have.
            </p>
            <p className="text-sm italic font-serif text-muted-foreground">
              Please reach out for the current schedule and address — meeting
              times rotate among members’ homes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
          {meetings.map((m) => (
            <article
              key={m.title}
              className="bg-background p-8 md:p-10 flex flex-col gap-5"
            >
              <h3 className="font-serif text-2xl text-primary leading-snug">
                {m.title}
              </h3>
              <dl className="flex flex-col gap-2 text-sm">
                <div className="flex gap-3">
                  <dt className="text-accent uppercase tracking-widest text-[10px] font-medium w-14 pt-0.5">
                    When
                  </dt>
                  <dd className="text-foreground">{m.when}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-accent uppercase tracking-widest text-[10px] font-medium w-14 pt-0.5">
                    Where
                  </dt>
                  <dd className="text-foreground">{m.where}</dd>
                </div>
              </dl>
              <p className="text-[15px] text-muted-foreground leading-relaxed text-pretty">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
