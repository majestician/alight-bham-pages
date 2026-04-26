import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sun opacity-60 -z-10" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 flex flex-col gap-8 animate-fade-up">
            <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
              Welcome to our district
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight text-balance">
              A Buddhism for the dignity of every life.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[52ch] text-pretty">
              SGI-USA Birmingham West District is a small, diverse community in
              Birmingham, Alabama practicing Nichiren Buddhism — a philosophy
              that calls forth the courage, wisdom, and compassion within each
              person to transform their life and contribute to a peaceful world.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
              <Button asChild variant="amber" size="lg">
                <a href="#meetings">Attend a Meeting</a>
              </Button>
              <a
                href="#practice"
                className="text-sm text-primary font-medium underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition"
              >
                What is Nichiren Buddhism?
              </a>
            </div>

            <p className="text-sm italic text-muted-foreground font-serif pt-2">
              Guests are always welcome — no experience or commitment required.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div
              className="absolute -inset-4 bg-surface rounded-sm -z-10 translate-y-8 translate-x-4"
              aria-hidden
            />
            <div className="bg-surface rounded-sm overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="An open book lit by warm morning light, with a small green leaf — a quiet symbol of study and growth"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
