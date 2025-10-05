const SkeletonCard = () => {
  return (
    <div className="animate-fade-in">
      <div className="relative aspect-[1.22] bg-muted rounded overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-shimmer" />
      </div>
      <div className="mt-2 h-4 bg-muted rounded w-2/3" />
      <div className="mt-1 h-3 bg-muted rounded w-1/2" />
    </div>
  );
};

export default SkeletonCard;
