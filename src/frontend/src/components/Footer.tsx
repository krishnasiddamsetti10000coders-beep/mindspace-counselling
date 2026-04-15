import { Heart, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Individual Counselling", href: "#services" },
  { label: "Couples Counselling", href: "#services" },
  { label: "Behavioural Support", href: "#services" },
];

const smoothScroll =
  (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border/60" data-ocid="footer">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main footer columns */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <span className="font-display text-base font-semibold text-foreground">
                MindSpace Counselling
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A safe, confidential space for understanding yourself and finding
              clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div data-ocid="footer.quick_links">
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={smoothScroll(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.quick_link.${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-ocid="footer.services">
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    onClick={smoothScroll("#services")}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.service_link.${service.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-ocid="footer.contact">
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-muted-foreground">
                  +44 (0) 20 7946 0123
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:hello@serenityclinic.co.uk"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  hello@serenityclinic.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-muted-foreground">
                  14 Wellness Lane, London, W1A 1AA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Psychological Counselling. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
