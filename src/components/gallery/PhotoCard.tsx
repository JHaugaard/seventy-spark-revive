import { Photo } from "@/data/photos";
import { formatPhotoDate } from "@/utils/photoHelpers";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

const PhotoCard = ({ photo, onClick }: PhotoCardProps) => {
  return (
    <article className="group animate-fade-in">
      <div
        className="relative aspect-[1.22] overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View photo: ${photo.caption}`}
      >
        <img
          src={photo.imageUrl}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="text-sm text-muted-foreground">
          {formatPhotoDate(photo.date)}
        </p>
        <p className="text-base text-foreground mt-1">{photo.caption}</p>
      </div>
    </article>
  );
};

export default PhotoCard;
