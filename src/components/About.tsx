import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, Quote } from "lucide-react";

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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="uppercase tracking-wider">
              Our workspace
            </Badge>
            <h2 className="heading-text">
              A collaborative office designed for clarity and trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Walk into our counseling studio and you will find open desks for
              collaborative sessions, private cabins for sensitive discussions,
              and a digital command center that tracks every candidate's
              lifecycle. The environment mirrors our promise&mdash;organized,
              warm, and globally connected.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {cultureHighlights.map((item) => (
                <Card
                  key={item}
                  className="p-5 bg-background border border-border/60 shadow-sm"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-black/20 to-black/60">
              <img
                src="/office-1.jpg"
                alt="Inside the COC Placements office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <Card className="absolute -bottom-10 left-6 max-w-xs p-5 bg-background/90 backdrop-blur border border-border/70 shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <Building2 className="h-6 w-6 text-primary" />
                <p className="font-semibold">Mentorship Bay</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated pods for mock interviews, university interviews, and
                visa filing assistance.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          <Card className="p-8 bg-card/80 backdrop-blur border-0 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/founder.jpg"
                alt="Mahesh Nazare, Founder of COC Placements"
                className="w-40 h-40 object-cover rounded-2xl shadow-lg border-4 border-background"
                loading="lazy"
              />
              <div className="space-y-4">
                <Badge>Founder Message</Badge>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &ldquo;Guiding careers is about more than a single placement.
                  It&apos;s about building resilience, cultural readiness, and a
                  mindset prepared for global success.&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-xl">Mahesh Nazare</p>
                  <p className="text-sm text-muted-foreground">
                    Founder &amp; Director, COC Placements
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border border-border/60 shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <Quote className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold leading-tight">
                  Three guiding principles
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  COC leadership ethos
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {founderPrinciples.map((item, index) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    <span>{index + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="hero" className="w-full mt-8">
              Meet Our Counselors
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

