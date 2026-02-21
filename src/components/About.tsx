import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

const About = () => {
  const cultureHighlights = [
    "Dedicated counseling lounges for one-on-one mentoring",
    "On-site documentation studio for faster application turnarounds",
    "Visa & compliance desk managed by experienced coordinators",
  ];

  const founderPrinciples = [
    "Ethical recruitment and transparent guidance",
    "Global network built over two decades",
    "Personalized roadmap for every student",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 section-bg">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-divider" />
          <h2 className="heading-text mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Building careers and futures since 2001
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <Badge
              variant="secondary"
              className="uppercase tracking-wider font-medium px-4 py-1.5"
            >
              Our workspace
            </Badge>
            <h3 className="subheading-text text-2xl lg:text-3xl">
              A collaborative office designed for clarity and trust
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Walk into our counseling studio and you will find open desks for
              collaborative sessions, private cabins for sensitive discussions,
              and a digital command center that tracks every candidate's
              lifecycle. The environment mirrors our promise—organized, warm,
              and globally connected.
            </p>

            <div className="space-y-3 pt-2">
              {cultureHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-card border border-border/50 hover-lift"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/office-1.jpg"
                alt="Inside the COC Placements office"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <Card className="absolute -bottom-8 left-4 right-4 md:left-6 md:right-auto md:max-w-xs p-5 glass border-0 shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <p className="font-display font-semibold">Mentorship Bay</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated pods for mock interviews, university interviews, and
                visa filing assistance.
              </p>
            </Card>
          </div>
        </div>

        {/* Founder section */}
        <div className="mt-24 lg:mt-32 grid gap-8 lg:gap-10 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          {/* Founder message */}
          <Card className="p-8 lg:p-10 border-0 card-shadow-lg rounded-2xl animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/founder.jpg"
                alt="Mahesh Nazare, Founder of COC Placements"
                className="w-36 h-36 object-cover rounded-2xl shadow-lg ring-4 ring-background"
                loading="lazy"
              />
              <div className="space-y-4 text-center md:text-left">
                <Badge className="bg-primary/10 text-primary border-0 font-medium">
                  Founder Message
                </Badge>
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "Guiding careers is about more than a single placement. It's
                  about building resilience, cultural readiness, and a mindset
                  prepared for global success."
                </p>
                <div>
                  <p className="font-display font-bold text-xl">Mahesh Nazare</p>
                  <p className="text-sm text-muted-foreground">
                    Founder & Director, COC Placements
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Principles card */}
          <Card className="p-8 border border-border/50 rounded-2xl animate-fade-in-up animate-delay-200">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold">
                  Three guiding principles
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  COC leadership ethos
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {founderPrinciples.map((item, index) => (
                <div key={item} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <Button
              variant="hero"
              className="w-full mt-8 h-12 rounded-xl font-semibold"
              onClick={() => trackCTA("meet_counselors", "about")}
            >
              Meet Our Counselors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
