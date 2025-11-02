import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, CheckCircle, BookOpen, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ForeignEducation = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Foreign Education</h1>
              <p className="text-xl text-muted-foreground">
                Navigate your study abroad journey with expert guidance. From university selection to visa processing, we ensure your educational dreams become reality.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Education Services</h2>
                <p className="text-muted-foreground mb-6">
                  We provide comprehensive support for students seeking international education opportunities. Our team of experienced counselors will guide you through every step of your academic journey abroad.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">University Selection</h3>
                    <p className="text-muted-foreground">
                      We help you identify universities that align with your academic goals, budget, and career aspirations across various countries.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Application Support</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assistance with application forms, personal statements, recommendation letters, and other required documents.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Scholarship Guidance</h3>
                    <p className="text-muted-foreground">
                      Information and application support for scholarships, grants, and financial aid opportunities to fund your education.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Student Visa Processing</h3>
                    <p className="text-muted-foreground">
                      Step-by-step guidance through the visa application process, including documentation preparation and interview coaching.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Popular Study Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">United States</h3>
                  </div>
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">United Kingdom</h3>
                  </div>
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">Canada</h3>
                  </div>
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">Australia</h3>
                  </div>
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">Germany</h3>
                  </div>
                  <div className="bg-card p-5 rounded-lg border text-center">
                    <h3 className="font-medium">New Zealand</h3>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Initial Consultation</h3>
                      <p className="text-muted-foreground">We assess your academic background, interests, and career goals to understand your aspirations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">University & Course Selection</h3>
                      <p className="text-muted-foreground">We help you identify suitable universities and programs based on your profile and preferences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Application Preparation</h3>
                      <p className="text-muted-foreground">We assist with preparing and submitting applications to your chosen institutions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Visa Processing</h3>
                      <p className="text-muted-foreground">Once accepted, we guide you through the student visa application process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Pre-Departure Support</h3>
                      <p className="text-muted-foreground">We provide guidance on accommodation, travel arrangements, and cultural preparation.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-card p-6 rounded-lg border sticky top-24">
              <h3 className="font-semibold text-xl mb-6">Why Study Abroad</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Access to world-class education and facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Global exposure and cultural experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Enhanced career opportunities worldwide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Develop independence and global perspective</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Network with international professionals</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>1000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>50+ University Partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>95% Visa Success Rate</span>
                </div>
              </div>

              <Button className="w-full mt-8">Book a Counseling Session</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignEducation;