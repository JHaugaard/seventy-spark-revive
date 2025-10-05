import { useEffect, useCallback } from "react";
import { Photo } from "@/data/photos";
import { formatPhotoDate } from "@/utils/photoHelpers";
import { useSwipeable } from "react-swipeable";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  currentPhoto: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox = ({
  isOpen,
  currentPhoto,
  photos,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) => {
  const currentIndex = currentPhoto
    ? photos.findIndex((p) => p.id === currentPhoto.id)
    : -1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (!isFirst) onPrevious();
          break;
        case "ArrowRight":
          if (!isLast) onNext();
          break;
      }
    },
    [isOpen, isFirst, isLast, onClose, onNext, onPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => !isLast && onNext(),
    onSwipedRight: () => !isFirst && onPrevious(),
    trackMouse: false,
  });

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{
        backgroundColor: "rgba(26, 26, 26, 0.95)",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute top-6 right-6 z-50 text-white hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-2"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      {!isFirst && (
        <button
          onClick={onPrevious}
          aria-label="Previous photo"
          className="absolute left-6 z-50 text-white hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-2 hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Next button */}
      {!isLast && (
        <button
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-6 z-50 text-white hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-2 hidden md:block"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Mobile navigation buttons */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-between px-6 md:hidden z-50">
        {!isFirst ? (
          <button
            onClick={onPrevious}
            aria-label="Previous photo"
            className="text-white bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-3"
          >
            <ChevronLeft size={24} />
          </button>
        ) : (
          <div />
        )}
        {!isLast ? (
          <button
            onClick={onNext}
            aria-label="Next photo"
            className="text-white bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-3"
          >
            <ChevronRight size={24} />
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* Overlay click to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Photo and caption container */}
      <div
        {...swipeHandlers}
        className="relative z-10 flex flex-col items-center justify-center max-h-screen px-4 md:px-8 py-20 md:py-16 pointer-events-none"
      >
        {/* Photo */}
        <div className="relative w-full max-w-5xl flex items-center justify-center pointer-events-auto animate-scale-in">
          <img
            src={currentPhoto.imageUrl}
            alt={currentPhoto.alt}
            className="w-full h-auto object-contain max-h-[70vh] md:max-h-[75vh]"
            style={{ aspectRatio: "1.22 / 1" }}
          />
        </div>

        {/* Caption area */}
        <div className="mt-6 text-center px-6 pointer-events-none">
          <p className="text-[#E0E0E0] text-sm mb-1">
            {formatPhotoDate(currentPhoto.date)}
          </p>
          <p className="text-white text-[15px] leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
