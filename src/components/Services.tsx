import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Career Placements",
      description: "Connect with top employers across Middle Eastern countries. We specialize in matching talented professionals with opportunities in UAE, Saudi Arabia, Qatar, and more.",
      features: ["Resume Optimization", "Interview Preparation", "Visa Assistance", "Salary Negotiation"],
      link: "/services/career-placements"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Foreign Education",
      description: "Navigate your study abroad journey with expert guidance. From university selection to visa processing, we ensure your educational dreams become reality.",
      features: ["University Selection", "Application Support", "Scholarship Guidance", "Student Visa Processing"],
      link: "/services/foreign-education"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Student Mentoring",
      description: "Comprehensive support including psychometric testing, career counseling, and skill development to prepare you for global success.",
      features: ["Psychometric Testing", "Career Counseling", "Skill Assessment", "Personal Development Plans"],
      link: "/services/student-mentoring"
    }
  ];

  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-text mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to guide you from education to career success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 card-shadow hover:shadow-xl transition-shadow duration-300 border-0 bg-card">
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="subheading-text mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;