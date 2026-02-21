import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { trackNavClick, trackCTA } from "@/lib/analytics";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    trackNavClick(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2"
            onClick={() => handleNavClick("logo")}
          >
            <span className="text-xl font-display font-bold tracking-tight">
              COC Placements
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-sm font-medium px-4 hover:bg-primary/5 hover:text-primary transition-colors"
                asChild
                onClick={() => handleNavClick(item.label)}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium gap-2"
              asChild
              onClick={() => trackCTA("call_now", "nav")}
            >
              <a href="tel:+919764001584" aria-label="Call COC Placements">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              variant="hero"
              size="sm"
              className="text-sm font-semibold px-5 rounded-lg"
              onClick={() => trackCTA("get_started", "nav")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-muted transition-colors"
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-4">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2"
                  asChild
                  onClick={() => trackCTA("call_now", "mobile_nav")}
                >
                  <a href="tel:+919764001584">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    trackCTA("get_started", "mobile_nav");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
