import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold">PlaceEd</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="nav"
                size="sm"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;