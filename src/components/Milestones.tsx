import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Compass, BookOpen } from "lucide-react";

const milestones = [
  {
    icon: Compass,
    title: "New Directions",
    description: "Exploring paths not yet taken, discovering passions long dormant",
  },
  {
    icon: Heart,
    title: "Health & Vitality",
    description: "Recommitting to wellness—body, mind, and spirit",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "Embracing curiosity and the joy of continuous growth",
  },
  {
    icon: Sparkles,
    title: "Living Fully",
    description: "Making each day count, creating memories that matter",
  },
];

const Milestones = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          The Journey Ahead
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-hero group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-primary">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
