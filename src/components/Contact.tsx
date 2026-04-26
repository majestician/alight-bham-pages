import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
              Visit us
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] tracking-tight mt-4 text-balance">
              Come chant with us.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-[48ch] text-pretty">
              Whether you’re curious about Buddhism, looking for a supportive
              community, or you’ve practiced for years and just moved to the
              Birmingham area — we’d love to hear from you.
            </p>

            <div className="mt-10">
              <Button asChild variant="amber" size="lg">
                <a href="mailto:birminghamwest.sgi@example.com?subject=Hello%20from%20a%20guest">
                  Email the District
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 bg-surface p-8 md:p-10 rounded-sm shadow-soft">
            <h3 className="font-serif text-xl text-primary mb-6">
              Get in touch
            </h3>
            <dl className="flex flex-col gap-5 text-sm">
              <div>
                <dt className="text-accent uppercase tracking-widest text-[10px] font-medium mb-1">
                  Email
                </dt>
                <dd className="text-foreground">
                  [TBD — district contact email]
                </dd>
              </div>
              <div>
                <dt className="text-accent uppercase tracking-widest text-[10px] font-medium mb-1">
                  Area
                </dt>
                <dd className="text-foreground">
                  West Birmingham, Alabama
                </dd>
              </div>
              <div>
                <dt className="text-accent uppercase tracking-widest text-[10px] font-medium mb-1">
                  Region
                </dt>
                <dd className="text-foreground">
                  SGI-USA Alabama Region · Southeast Zone
                </dd>
              </div>
              <div>
                <dt className="text-accent uppercase tracking-widest text-[10px] font-medium mb-1">
                  National
                </dt>
                <dd>
                  <a
                    href="https://www.sgi-usa.org/find-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 decoration-accent/50 hover:decoration-accent"
                  >
                    sgi-usa.org/find-us
                  </a>
                </dd>
              </div>
            </dl>
            <p className="text-xs text-muted-foreground italic font-serif mt-8 leading-relaxed">
              This is a community page maintained by local district members and
              is not an official SGI-USA publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
