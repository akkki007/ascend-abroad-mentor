import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { trackVideoEngagement } from "@/lib/analytics";

const VideoShowcase = () => {
  const handleVideoInteraction = (action: 'play' | 'pause' | 'complete') => {
    trackVideoEngagement(action, "COC Placements walkthrough");
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="section-divider" />
          <h2 className="heading-text mb-4">Inside COC</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            See how our team works together to create success stories
          </p>
        </div>

        <Card className="p-6 lg:p-10 border-0 card-shadow-lg bg-card rounded-2xl max-w-5xl mx-auto">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="space-y-5 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10">
                <Play className="w-4 h-4 text-primary" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  Watch Video
                </p>
              </div>
              <h3 className="subheading-text text-2xl lg:text-3xl">
                Precision mentoring in action
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get a glimpse of how our counselors, compliance officers, and
                career architects collaborate to design global journeys for our
                students. From documentation war rooms to mentoring pods, this
                walkthrough showcases the energy our candidates experience each
                day.
              </p>
            </div>

            <div className="animate-fade-in-up animate-delay-200">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/p6AuwxhPaVQ?rel=0"
                  title="COC Placements walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => handleVideoInteraction('play')}
                />
              </AspectRatio>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoShowcase;
