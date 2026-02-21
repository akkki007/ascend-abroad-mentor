import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { trackFormSubmission, trackCTA } from "@/lib/analytics";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackFormSubmission("contact_form", true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mahesh@cocplacement.in",
      href: "mailto:mahesh@cocplacement.in",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 97640 01584",
      href: "tel:+919764001584",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Nana Peth, Pune",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-divider" />
          <h2 className="heading-text mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to take the next step in your career or education journey?
            Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="animate-fade-in-up">
            <h3 className="subheading-text mb-8">Contact Information</h3>
            <div className="space-y-5">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => trackCTA(`contact_${method.title.toLowerCase()}`, "contact")}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm text-muted-foreground">
                      {method.title}
                    </p>
                    <p className="text-foreground font-medium">{method.value}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Quick response promise */}
            <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Quick Response:</span>{" "}
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <Card className="p-8 card-shadow-lg border-0 rounded-2xl animate-fade-in-up animate-delay-200">
            <h3 className="subheading-text mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    placeholder="Your first name"
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    placeholder="Your last name"
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select className="w-full h-12 px-4 border border-input rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option>Career Placements</option>
                  <option>Foreign Education</option>
                  <option>Student Mentoring</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your goals and how we can help you..."
                  className="min-h-32 rounded-xl resize-none"
                  required
                />
              </div>
              <Button
                variant="hero"
                className="w-full h-14 rounded-xl font-semibold text-base"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
