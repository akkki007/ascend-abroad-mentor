import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Globe,
  Target,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { trackCTA } from "@/lib/analytics";

const stats = [
  { icon: Users, label: "Students Placed", value: "5000+" },
  { icon: Globe, label: "Partner Countries", value: "25+" },
  { icon: Target, label: "Offer Conversion", value: "95%" },
];

const differentiators = [
  "Dedicated Middle East placement desk",
  "Partnerships with 120+ global universities",
  "Visa, travel, and compliance handled in-house",
  "Psychometric readiness & mentoring suite",
];

const Hero = () => {
  const handleCTAClick = (ctaName: string) => {
    trackCTA(ctaName, "hero");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-primary/15 blur-[100px] rounded-full" />
      <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] bg-blue-500/10 blur-[80px] rounded-full" />

      <div className="container mx-auto px-6 relative">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <Badge className="mb-6 px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase bg-primary/10 text-primary border-0 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              COC Placements
            </Badge>

            <h1 className="hero-text text-foreground mb-6">
              Your Gateway to
              <span className="block mt-2 bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
                Global Opportunities
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl font-body">
              Multi-disciplinary teams across counseling, compliance, and travel
              logistics work under one roof to design a seamless journey from
              first consultation to onboarding abroad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 h-14 rounded-xl font-semibold"
                onClick={() => handleCTAClick("start_journey")}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-14 rounded-xl font-medium"
                onClick={() => handleCTAClick("explore_services")}
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>

            {/* Differentiators */}
            <div className="grid sm:grid-cols-2 gap-3 mt-10 stagger-children">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm hover-lift"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <Card className="p-8 border-0 card-shadow-lg bg-card/95 backdrop-blur-sm rounded-2xl animate-fade-in-up animate-delay-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Success Radar
                </p>
                <h3 className="text-xl md:text-2xl font-display font-semibold mt-1">
                  Structured mentoring stacks
                </h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                Since 2001
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center rounded-xl border border-border/60 p-4 bg-muted/30 hover-lift"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-11 h-11 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ISO banner */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-5 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg mb-1">
                  ISO aligned process templates
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every application moves through a transparent 7-step workflow
                  covering documentation, training, employer alignment, and post
                  landing assistance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
