import { useState } from "react";
import { photos, Photo } from "@/data/photos";
import { groupPhotosByMonth } from "@/utils/photoHelpers";
import PhotoCard from "./PhotoCard";
import MonthDivider from "./MonthDivider";
import Lightbox from "./Lightbox";

const PhotoGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const groupedPhotos = groupPhotosByMonth(photos);

  const openLightbox = (photo: Photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentPhoto(null);
  };

  const goToNext = () => {
    if (!currentPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === currentPhoto.id);
    if (currentIndex < photos.length - 1) {
      setCurrentPhoto(photos[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (!currentPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === currentPhoto.id);
    if (currentIndex > 0) {
      setCurrentPhoto(photos[currentIndex - 1]);
    }
  };

  return (
    <>
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 md:gap-4">
          {Object.entries(groupedPhotos).map(([monthYear, monthPhotos]) => (
            <>
              <MonthDivider key={`divider-${monthYear}`} monthYear={monthYear} />
              {monthPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onClick={() => openLightbox(photo)}
                />
              ))}
            </>
          ))}
        </div>
      </main>

      <Lightbox
        isOpen={lightboxOpen}
        currentPhoto={currentPhoto}
        photos={photos}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
};

export default PhotoGrid;
