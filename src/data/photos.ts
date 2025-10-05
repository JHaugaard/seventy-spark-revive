import photo001 from "@/assets/photos/photo-001.jpg";
import photo002 from "@/assets/photos/photo-002.jpg";
import photo003 from "@/assets/photos/photo-003.jpg";
import photo004 from "@/assets/photos/photo-004.jpg";
import photo005 from "@/assets/photos/photo-005.jpg";
import photo006 from "@/assets/photos/photo-006.jpg";
import photo007 from "@/assets/photos/photo-007.jpg";
import photo008 from "@/assets/photos/photo-008.jpg";
import photo009 from "@/assets/photos/photo-009.jpg";
import photo010 from "@/assets/photos/photo-010.jpg";
import photo011 from "@/assets/photos/photo-011.jpg";
import photo012 from "@/assets/photos/photo-012.jpg";

export interface Photo {
  id: string;
  date: string; // ISO format YYYY-MM-DD
  caption: string;
  imageUrl: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    id: "photo-001",
    date: "2023-08-13",
    caption: "Sunset over calm waters",
    imageUrl: photo001,
    alt: "Peaceful sunset over calm ocean water with warm orange and pink sky",
  },
  {
    id: "photo-002",
    date: "2023-08-15",
    caption: "Morning coffee ritual",
    imageUrl: photo002,
    alt: "Morning coffee cup on wooden table with natural window light",
  },
  {
    id: "photo-003",
    date: "2023-08-20",
    caption: "Autumn arrives",
    imageUrl: photo003,
    alt: "Colorful autumn leaves on ground with red and orange foliage",
  },
  {
    id: "photo-004",
    date: "2023-09-05",
    caption: "Urban stillness",
    imageUrl: photo004,
    alt: "Old bicycle leaning against brick wall in urban setting",
  },
  {
    id: "photo-005",
    date: "2023-09-12",
    caption: "Meadow in bloom",
    imageUrl: photo005,
    alt: "Wildflowers in a meadow with soft focus botanical scene",
  },
  {
    id: "photo-006",
    date: "2023-09-18",
    caption: "Words on paper",
    imageUrl: photo006,
    alt: "Vintage typewriter on desk in close-up detail",
  },
  {
    id: "photo-007",
    date: "2023-09-25",
    caption: "Rainy evening",
    imageUrl: photo007,
    alt: "Rainy window with water droplets and blurred city lights in background",
  },
  {
    id: "photo-008",
    date: "2023-10-03",
    caption: "Quiet reading",
    imageUrl: photo008,
    alt: "Open book on park bench with natural light",
  },
  {
    id: "photo-009",
    date: "2023-10-15",
    caption: "Winter's first breath",
    imageUrl: photo009,
    alt: "Snowy winter landscape with bare trees in peaceful scene",
  },
  {
    id: "photo-010",
    date: "2023-10-22",
    caption: "Tools of the trade",
    imageUrl: photo010,
    alt: "Vintage camera on wooden surface",
  },
  {
    id: "photo-011",
    date: "2023-10-28",
    caption: "Garden path",
    imageUrl: photo011,
    alt: "Garden path with flowers on both sides in peaceful scene",
  },
  {
    id: "photo-012",
    date: "2023-10-31",
    caption: "Lighthouse watch",
    imageUrl: photo012,
    alt: "Lighthouse on rocky coast with dramatic sky",
  },
];
