import { Card } from "@/components/ui/card";

const officeImages = [
  {
    src: "/WhatsApp Image 2026-01-07 at 3.50.43 PM (1).jpeg",
    label: "Counseling desks",
    description: "Real-time mentoring pods for candidate intake",
  },
  {
    src: "/WhatsApp Image 2026-01-07 at 3.50.42 PM.jpeg",
    label: "Operations bay",
    description: "Compliance and application tracking area",
  },
  {
    src: "/WhatsApp Image 2026-01-07 at 3.50.43 PM (2).jpeg",
    label: "Client lounge",
    description: "Collaborative huddle zone for mock sessions",
  },
  {
    src: "/WhatsApp Image 2026-01-07 at 3.50.43 PM.jpeg",
    label: "Consultation view",
    description: "Panoramic look at the student experience hub",
  },
];

const OfficeGallery = () => {
  return (
    <section className="py-24 bg-background" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Inside Our Office
          </p>
          <h2 className="heading-text mb-4">Gallery: A Day at COC</h2>
          <p className="text-muted-foreground">
            Peek into the everyday atmosphere that shapes our mentoring ethos.
            From onboarding tables to the lounge where career roadmaps are
            crafted, each corner is designed for clarity and calm.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {officeImages.map((image) => (
            <Card
              key={image.src}
              className="overflow-hidden border border-border/60 shadow-lg backdrop-blur bg-card/80"
            >
              <div className="relative group">
                <img
                  src={encodeURI(image.src)}
                  alt={image.label}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-semibold text-white">
                    {image.label}
                  </p>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;

