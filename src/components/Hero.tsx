import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>
      
      <div className="relative z-10 container px-4 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          My 70th Year Rebuild
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A journey of transformation, renewal, and discovering what comes next
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-hero hover:opacity-90 transition-all duration-300 shadow-warm"
          >
            Begin the Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
