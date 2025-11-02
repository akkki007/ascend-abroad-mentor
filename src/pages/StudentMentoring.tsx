import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, CheckCircle, Target, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const StudentMentoring = () => {
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
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Student Mentoring</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive support including psychometric testing, career counseling, and skill development to prepare you for global success.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mentoring Approach</h2>
                <p className="text-muted-foreground mb-6">
                  Our mentoring program is designed to help students discover their strengths, develop essential skills, and make informed decisions about their academic and career paths. We provide personalized guidance to help you reach your full potential.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Psychometric Testing</h3>
                    <p className="text-muted-foreground">
                      Scientifically validated assessments to identify your aptitudes, interests, personality traits, and learning styles.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Career Counseling</h3>
                    <p className="text-muted-foreground">
                      Expert guidance to help you explore career options aligned with your strengths, interests, and market demands.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Skill Assessment</h3>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation of your current skills and identification of areas for development to meet industry requirements.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Personal Development Plans</h3>
                    <p className="text-muted-foreground">
                      Customized roadmaps with specific goals, milestones, and resources to help you achieve your academic and career objectives.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Self-Discovery</h3>
                    <p className="text-muted-foreground">
                      Gain deeper insights into your strengths, weaknesses, interests, and values to make more informed decisions about your future.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Targeted Skill Development</h3>
                    <p className="text-muted-foreground">
                      Focus your efforts on developing the specific skills that will make you more competitive in your chosen field.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Confidence Building</h3>
                    <p className="text-muted-foreground">
                      Develop greater self-assurance through structured feedback, goal achievement, and recognition of your progress.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-medium text-lg mb-2">Global Perspective</h3>
                    <p className="text-muted-foreground">
                      Gain insights into international education and career opportunities, cultural differences, and global workplace expectations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mentoring Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Initial Assessment</h3>
                      <p className="text-muted-foreground">Comprehensive evaluation of your background, goals, strengths, and areas for development.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Psychometric Testing</h3>
                      <p className="text-muted-foreground">Scientific assessments to identify your aptitudes, interests, personality, and learning style.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Development Plan Creation</h3>
                      <p className="text-muted-foreground">Collaborative design of a personalized roadmap for your academic and career development.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Regular Mentoring Sessions</h3>
                      <p className="text-muted-foreground">Ongoing guidance, feedback, and support to help you implement your development plan.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Progress Evaluation</h3>
                      <p className="text-muted-foreground">Regular assessment of your advancement and adjustment of plans as needed.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-card p-6 rounded-lg border sticky top-24">
              <h3 className="font-semibold text-xl mb-6">Why Choose Our Mentoring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Experienced mentors with international expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personalized approach tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Scientifically validated assessment tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Holistic development focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Ongoing support throughout your journey</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <span>98% Student Satisfaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                  <span>85% Career Goal Achievement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>2000+ Students Mentored</span>
                </div>
              </div>

              <Button className="w-full mt-8">Schedule a Mentoring Session</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMentoring;