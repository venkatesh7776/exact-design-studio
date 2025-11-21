import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 top-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero section.jpg')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 -mt-1">
        <div className="max-w-2xl text-card">
          <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6">
            <img src="/vivekananda.png" alt="Vivekananda" className="w-full h-full object-contain" />
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
