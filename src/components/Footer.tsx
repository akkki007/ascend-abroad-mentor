import { trackExternalLink } from "@/lib/analytics";

const Footer = () => {
  const handleLinkClick = (linkName: string) => {
    trackExternalLink(linkName);
  };

  const footerLinks = {
    services: [
      { label: "Career Placements", href: "/services/career-placements" },
      { label: "Foreign Education", href: "/services/foreign-education" },
      { label: "Student Mentoring", href: "/services/student-mentoring" },
      { label: "Psychometric Testing", href: "#services" },
    ],
    countries: [
      { label: "UAE", href: "#" },
      { label: "Saudi Arabia", href: "#" },
      { label: "Qatar", href: "#" },
      { label: "Kuwait", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-5">
              <span className="text-xl font-display font-bold">COC Placements</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Empowering students and professionals to achieve their global
              career and education dreams since 2001.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    onClick={() => handleLinkClick(link.label)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">
              Countries
            </h4>
            <ul className="space-y-3">
              {footerLinks.countries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    onClick={() => handleLinkClick(link.label)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    onClick={() => handleLinkClick(link.label)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} COC Placements. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="mailto:mahesh@cocplacement.in"
              className="text-sm text-background/50 hover:text-background transition-colors"
            >
              mahesh@cocplacement.in
            </a>
            <a
              href="tel:+919764001584"
              className="text-sm text-background/50 hover:text-background transition-colors"
            >
              +91 97640 01584
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
