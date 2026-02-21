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
    <section className="py-20 lg:py-28 bg-background" id="gallery">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="section-divider" />
          <h2 className="heading-text mb-4">Gallery: A Day at COC</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Peek into the everyday atmosphere that shapes our mentoring ethos.
            Each corner is designed for clarity and calm.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 stagger-children">
          {officeImages.map((image) => (
            <Card
              key={image.src}
              className="overflow-hidden border-0 card-shadow rounded-2xl group"
            >
              <div className="relative">
                <img
                  src={encodeURI(image.src)}
                  alt={image.label}
                  className="h-64 lg:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-display font-semibold text-white mb-1">
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
