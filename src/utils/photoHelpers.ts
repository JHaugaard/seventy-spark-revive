import { Photo } from "@/data/photos";
import { format, parseISO } from "date-fns";

export interface GroupedPhotos {
  [monthYear: string]: Photo[];
}

/**
 * Groups photos by month and year, sorted chronologically forward
 * @param photos Array of photos to group
 * @returns Object with month/year keys and photo arrays as values
 */
export const groupPhotosByMonth = (photos: Photo[]): GroupedPhotos => {
  // Sort photos by date (chronological order)
  const sortedPhotos = [...photos].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group by month/year
  const grouped = sortedPhotos.reduce((acc: GroupedPhotos, photo) => {
    const date = parseISO(photo.date);
    const monthYear = format(date, "MMMM yyyy"); // e.g., "September 2023"

    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(photo);

    return acc;
  }, {});

  return grouped;
};

/**
 * Formats a date string for display
 * @param dateString ISO date string (YYYY-MM-DD)
 * @returns Formatted date (e.g., "August 13, 2023")
 */
export const formatPhotoDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "MMMM d, yyyy");
};
