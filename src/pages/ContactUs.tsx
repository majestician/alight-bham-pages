import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

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
      "Contact the SGI-USA Birmingham West District — we'd love to hear from you.",
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hello from ${firstName} ${lastName}`.trim(),
    );
    const bodyLines = [
      `Name: ${firstName} ${lastName}`.trim(),
      email ? `Email: ${email}` : "",
      city ? `City: ${city}` : "",
      "",
      message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:birminghamwest.sgi@example.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email app",
      description: "Your message is ready to send.",
    });
  };

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="text-center">
              <span className="text-accent font-medium tracking-[0.18em] text-xs uppercase">
                Contact
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1] tracking-tight mt-4">
                Contact us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We would like to hear from you!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-6"
            >
              <div>
                <Label className="text-accent uppercase tracking-widest text-[10px] font-medium">
                  Name
                </Label>
                <div className="mt-3 grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-sm text-foreground">
                      First Name <span className="text-muted-foreground">(required)</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-sm text-foreground">
                      Last Name <span className="text-muted-foreground">(required)</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm text-foreground">
                  Email <span className="text-muted-foreground">(required)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-sm text-foreground">
                  Message <span className="text-muted-foreground">(required)</span>
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="city" className="text-sm text-foreground">
                  City <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <Button type="submit" variant="amber" size="lg">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
