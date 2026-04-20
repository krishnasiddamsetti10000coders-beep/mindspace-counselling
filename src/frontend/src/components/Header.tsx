import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const pageLinks = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "How It Works", to: "/how-it-works" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = () => {
    setIsOpen(false);
    if (isHome) {
      const target = document.querySelector("#contact");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border/60"
          : "bg-card/80 backdrop-blur-sm"
      }`}
      data-ocid="header"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            aria-label="MindSpace Counselling — home"
            className="flex items-center gap-2.5 transition-smooth hover:opacity-80"
            data-ocid="header.logo_link"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold text-foreground tracking-tight">
                Serenity Clinic
              </span>
              <span className="text-[10px] font-body text-muted-foreground tracking-widest uppercase">
                Psychological Counselling
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            data-ocid="header.nav"
          >
            {/* Home link (anchor scroll on home, navigate on other pages) */}
            {isHome ? (
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid="header.nav_link.home"
              >
                Home
              </button>
            ) : (
              <Link
                to="/"
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid="header.nav_link.home"
              >
                Home
              </Link>
            )}

            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-smooth"
                activeProps={{ className: "text-foreground font-semibold" }}
                data-ocid={`header.nav_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleContactClick}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid="header.nav_link.contact"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="rounded-full px-5 bg-primary/90 hover:bg-primary text-primary-foreground shadow-soft transition-smooth"
              onClick={handleContactClick}
              data-ocid="header.book_button"
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-ocid="header.mobile_menu_toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        data-ocid="header.mobile_menu"
      >
        <nav className="bg-card/98 backdrop-blur-md border-t border-border/40 px-6 py-4 flex flex-col gap-1">
          {isHome ? (
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left text-sm font-body font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth"
              data-ocid="header.mobile_nav_link.home"
            >
              Home
            </button>
          ) : (
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-left text-sm font-body font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth"
              data-ocid="header.mobile_nav_link.home"
            >
              Home
            </Link>
          )}

          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-left text-sm font-body font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth"
              activeProps={{ className: "text-foreground font-semibold" }}
              data-ocid={`header.mobile_nav_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={handleContactClick}
            className="text-left text-sm font-body font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth"
            data-ocid="header.mobile_nav_link.contact"
          >
            Contact
          </button>

          <Button
            size="sm"
            className="mt-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground transition-smooth"
            onClick={handleContactClick}
            data-ocid="header.mobile_book_button"
          >
            Book a Session
          </Button>
        </nav>
      </div>
    </header>
  );
}
