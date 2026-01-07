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
} from "lucide-react";

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
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-background via-background to-muted/40"
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute -right-32 -top-10 w-96 h-96 bg-primary/20 blur-3xl opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="mb-6 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase bg-primary/10 text-primary">
              coc placements
            </Badge>
            <h1 className="hero-text text-foreground mb-6 leading-tight">
              Your Gateway to
              <span className="hero-gradient bg-clip-text text-transparent block mt-2">
                Global Opportunities
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Multi-disciplinary teams across counseling, compliance, and travel
              logistics work under one roof to design a seamless journey from
              first consultation to onboarding abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button variant="hero" size="lg" className="text-base px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Explore Services
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 border-0 shadow-2xl bg-card/90 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Success Radar
                </p>
                <h3 className="text-2xl font-semibold mt-2">
                  Structured mentoring stacks
                </h3>
              </div>
              <button className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest">
                Since 2001
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-2xl border border-border/70 p-4 bg-background/80"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 flex items-start space-x-4">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <div>
                <p className="font-semibold text-lg mb-1">
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