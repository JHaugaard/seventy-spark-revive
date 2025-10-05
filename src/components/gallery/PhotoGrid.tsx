import { photos } from "@/data/photos";
import { groupPhotosByMonth } from "@/utils/photoHelpers";
import PhotoCard from "./PhotoCard";
import MonthDivider from "./MonthDivider";

const PhotoGrid = () => {
  const groupedPhotos = groupPhotosByMonth(photos);

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {Object.entries(groupedPhotos).map(([monthYear, monthPhotos]) => (
          <>
            <MonthDivider key={`divider-${monthYear}`} monthYear={monthYear} />
            {monthPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </>
        ))}
      </div>
    </main>
  );
};

export default PhotoGrid;
