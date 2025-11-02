const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-background text-foreground rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">COC Placements</span>
            </div>
            <p className="text-background/80 text-sm">
              Empowering students and professionals to achieve their global career and education dreams.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Career Placements</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Foreign Education</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Student Mentoring</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Psychometric Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Countries</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">UAE</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Saudi Arabia</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Qatar</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kuwait</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 COC Placements. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;