const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-800 to-orange-900 text-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-card/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🕉️</span>
              </div>
              <span className="font-bold text-lg">Geeta Olympiad</span>
            </div>
            <p className="text-sm text-card/80">
              Empowering minds through the wisdom of the Bhagavad Geeta
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><a href="#" className="hover:text-card transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Prizes</a></li>
              <li><a href="#" className="hover:text-card transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><a href="#" className="hover:text-card transition-colors">Kids Olympiad</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Youth Olympiad</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Senior Olympiad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li>Email: info@geetaolympiad.com</li>
              <li>Phone: +91 12345 67890</li>
              <li className="flex gap-3 mt-4">
                <a href="#" className="hover:scale-110 transition-transform">📘</a>
                <a href="#" className="hover:scale-110 transition-transform">📷</a>
                <a href="#" className="hover:scale-110 transition-transform">🐦</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card/20 pt-6 text-center text-sm text-card/60">
          <p>© 2024 Geeta Olympiad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
