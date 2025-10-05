const Inspiration = () => {
  return (
    <section className="py-32 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto max-w-4xl relative z-10 text-center animate-fade-in-slow">
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 leading-relaxed">
          "The best time to plant a tree was 20 years ago. 
          The second best time is now."
        </blockquote>
        <p className="text-xl md:text-2xl text-primary-foreground/90">
          — Ancient Proverb
        </p>
      </div>
    </section>
  );
};

export default Inspiration;
