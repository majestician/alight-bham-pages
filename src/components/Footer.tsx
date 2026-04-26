export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col gap-3">
          <p className="font-serif text-xl">
            SGI-USA Birmingham West District
          </p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-md">
            A local community within the Soka Gakkai International-USA, practicing
            Nichiren Buddhism in Birmingham, Alabama.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-2">
            Explore
          </p>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#practice" className="hover:text-accent transition-colors">Practice</a>
          <a href="#meetings" className="hover:text-accent transition-colors">Meetings</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="md:col-span-4 flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-2">
            SGI-USA
          </p>
          <a
            href="https://www.sgi-usa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            sgi-usa.org
          </a>
          <a
            href="https://www.worldtribune.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            World Tribune
          </a>
          <a
            href="https://www.sgi-usa.org/find-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Find a meeting near you
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} SGI-USA Birmingham West District. Community page.</p>
          <p className="italic font-serif">Nam-myoho-renge-kyo</p>
        </div>
      </div>
    </footer>
  );
};
