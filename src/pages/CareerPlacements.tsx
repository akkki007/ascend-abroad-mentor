import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, CheckCircle, Users, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const CareerPlacements = () => {
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
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Career Placements</h1>
              <p className="text-xl text-muted-foreground">
                Connect with top employers across Middle Eastern countries. We specialize in matching talented professionals with opportunities in UAE, Saudi Arabia, Qatar, and more.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Help You Succeed</h2>
                <p className="text-muted-foreground mb-6">
                  Our career placement services are designed to give you a competitive edge in the international job market. 
                  We work closely with employers in the Middle East to understand their needs and match them with qualified candidates.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Resume Optimization</h3>
                    <p className="text-muted-foreground">
                      Our experts will help you tailor your resume to highlight your strengths and match the requirements of your target positions and regions.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Interview Preparation</h3>
                    <p className="text-muted-foreground">
                      Comprehensive interview coaching including mock interviews, cultural preparation, and guidance on answering technical and behavioral questions.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Visa Assistance</h3>
                    <p className="text-muted-foreground">
                      Navigate the complex visa processes with our expert guidance, ensuring all documentation is properly prepared and submitted.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Salary Negotiation</h3>
                    <p className="text-muted-foreground">
                      Get insights on competitive compensation packages in different regions and industries, and strategies for effective negotiation.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Placement Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Initial Consultation</h3>
                      <p className="text-muted-foreground">We assess your skills, experience, and career goals to understand your unique profile.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Profile Enhancement</h3>
                      <p className="text-muted-foreground">We help optimize your resume, LinkedIn profile, and other professional materials.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Job Matching</h3>
                      <p className="text-muted-foreground">We connect you with suitable opportunities based on your skills and preferences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Interview Preparation</h3>
                      <p className="text-muted-foreground">Comprehensive coaching to help you excel in interviews with potential employers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Offer & Relocation Support</h3>
                      <p className="text-muted-foreground">We assist with offer negotiation, visa processing, and relocation guidance.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-card p-6 rounded-lg border sticky top-24">
              <h3 className="font-semibold text-xl mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Extensive network of employers across the Middle East</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Specialized knowledge of regional job markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personalized career guidance and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>High success rate in placements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Comprehensive post-placement support</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>500+ Successful Placements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <span>100+ Partner Companies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>6 Countries Covered</span>
                </div>
              </div>

              <Button className="w-full mt-8">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlacements;