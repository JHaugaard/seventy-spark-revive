import { Photo } from "@/data/photos";
import { formatPhotoDate } from "@/utils/photoHelpers";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <article className="group animate-fade-in">
      <div className="relative aspect-[1.22] overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:opacity-90 cursor-pointer">
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
