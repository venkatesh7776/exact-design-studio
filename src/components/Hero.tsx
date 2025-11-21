import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-krishna-arjuna.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(234, 88, 12, 0.85), rgba(249, 115, 22, 0.75)), url(${heroImage})`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-card">
          <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 shadow-elevated">
            <span className="text-3xl">🕉️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            ज्ञान प्रवेश से ज्ञान आरोहित तक –<br />
            चलो सजाए गीता की न्याय
          </h1>
          
          <p className="text-lg mb-8 text-card/90">
            हरेक बालक की यह विशेष समय
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" className="bg-card text-primary hover:bg-card/90 shadow-lg">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-card text-card hover:bg-card/10">
              Learn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
