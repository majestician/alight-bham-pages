import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | SGI-USA Birmingham West District";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Get in touch with the SGI-USA Birmingham West District — questions about Nichiren Buddhism, meetings, or visiting are all welcome.",
    );
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="max-w-[60ch]">
              <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
                Contact Us
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] tracking-tight mt-4 text-balance">
                We’d love to hear from you.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6 text-pretty">
                Whether you’re curious about chanting Nam-myoho-renge-kyo,
                interested in attending a meeting, or just want to say hello —
                send us a note and a local member will get back to you.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="amber" size="lg">
                  <a href="mailto:birminghamwest.sgi@example.com?subject=Hello%20from%20a%20guest">
                    Email the District
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden border border-border">
              <div className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl text-primary mb-6">
                  Get in touch
                </h2>
                <dl className="flex flex-col gap-5 text-sm">
                  <div>
                    <dt className="text-accent uppercase tracking-widest text-[10px] font-medium mb-1">
                      Email
                    </dt>
                    <dd className="text-foreground">
                      <a
                        href="mailto:birminghamwest.sgi@example.com"
                        className="text-primary underline underline-offset-4 decoration-accent/50 hover:decoration-accent"
                      >
                        birminghamwest.sgi@example.com
                      </a>
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
                </dl>
              </div>

              <div className="bg-background p-8 md:p-10">
                <h2 className="font-serif text-xl text-primary mb-6">
                  What to expect
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed text-pretty">
                  A local member will reply within a few days. There is no cost,
                  no obligation, and no prior knowledge of Buddhism required.
                  Meetings are warm, informal gatherings — questions of every
                  kind are welcome.
                </p>
                <p className="text-xs text-muted-foreground italic font-serif mt-6 leading-relaxed">
                  This is a community page maintained by local district members
                  and is not an official SGI-USA publication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
