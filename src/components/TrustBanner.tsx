import { Users, Globe, Award, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Students Placed",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Partner Countries",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: Building2,
    value: "120+",
    label: "University Partners",
  },
];

const TrustBanner = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/80 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
