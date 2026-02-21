import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Brain, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { trackServiceClick } from "@/lib/analytics";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Career Placements",
      description:
        "Connect with top employers across Middle Eastern countries. We specialize in matching talented professionals with opportunities in UAE, Saudi Arabia, Qatar, and more.",
      features: [
        "Resume Optimization",
        "Interview Preparation",
        "Visa Assistance",
        "Salary Negotiation",
      ],
      link: "/services/career-placements",
      color: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "Foreign Education",
      description:
        "Navigate your study abroad journey with expert guidance. From university selection to visa processing, we ensure your educational dreams become reality.",
      features: [
        "University Selection",
        "Application Support",
        "Scholarship Guidance",
        "Student Visa Processing",
      ],
      link: "/services/foreign-education",
      color: "from-emerald-500/10 to-emerald-600/5",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "Student Mentoring",
      description:
        "Comprehensive support including psychometric testing, career counseling, and skill development to prepare you for global success.",
      features: [
        "Psychometric Testing",
        "Career Counseling",
        "Skill Assessment",
        "Personal Development Plans",
      ],
      link: "/services/student-mentoring",
      color: "from-violet-500/10 to-violet-600/5",
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-divider" />
          <h2 className="heading-text mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Comprehensive solutions to guide you from education to career success
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative p-8 border-0 card-shadow hover:card-shadow-lg transition-all duration-300 bg-gradient-to-br ${service.color} bg-card overflow-hidden rounded-2xl`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="subheading-text mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={service.link}
                onClick={() => trackServiceClick(service.title)}
              >
                <Button
                  variant="outline"
                  className="w-full group/btn rounded-xl h-12 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
