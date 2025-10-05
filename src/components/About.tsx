import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-slow">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            The Rebuild Begins
          </h2>
          
          <Card className="p-8 md:p-12 shadow-warm border-2">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Seventy years. Seven decades of living, learning, loving, and growing. 
              But this isn't the end of a story—it's the beginning of a new chapter.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              This year represents more than just a milestone. It's a conscious choice 
              to rebuild, reimagine, and reinvent what the next phase of life can be.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Welcome to my journey of transformation—where wisdom meets wonder, 
              and experience fuels new adventures.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
