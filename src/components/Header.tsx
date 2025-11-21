import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl">🕉️</span>
          </div>
          <span className="font-bold text-xl text-foreground">Geeta Olympiad</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Events</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Register Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
