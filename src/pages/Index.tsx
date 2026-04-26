import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Practice } from "@/components/Practice";
import { Meetings } from "@/components/Meetings";
import { Resources } from "@/components/Resources";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title =
      "SGI-USA Birmingham West District | Nichiren Buddhism in Alabama";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "A local community of Nichiren Buddhists in Birmingham, Alabama — part of SGI-USA. Discussion meetings, study, and an introduction to chanting Nam-myoho-renge-kyo.";
    setMeta("description", description);
    setMeta("og:title", "SGI-USA Birmingham West District", "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    let ld = document.getElementById("ld-json-org");
    const json = {
      "@context": "https://schema.org",
      "@type": "ReligiousOrganization",
      name: "SGI-USA Birmingham West District",
      description,
      areaServed: "Birmingham, Alabama",
      parentOrganization: {
        "@type": "ReligiousOrganization",
        name: "Soka Gakkai International-USA",
        url: "https://www.sgi-usa.org/",
      },
    };
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-json-org";
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(json);
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Practice />
        <Meetings />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
