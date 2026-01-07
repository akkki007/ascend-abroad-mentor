import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <Card className="p-10 border border-border/60 shadow-xl bg-background/90 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Inside COC
              </p>
              <h2 className="heading-text">Precision mentoring in action</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get a glimpse of how our counselors, compliance officers, and
                career architects collaborate to design global journeys for our
                students. From documentation war rooms to mentoring pods, this
                walkthrough showcases the energy our candidates experience each
                day.
              </p>
            </div>

            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full rounded-2xl border border-border/60"
                src="https://www.youtube.com/embed/p6AuwxhPaVQ?rel=0"
                title="COC Placements walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </AspectRatio>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoShowcase;

