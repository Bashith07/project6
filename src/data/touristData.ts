export type Tourist = {
  id: number;
  name: string;
  image: string;
  description: string;
  type?: string;
  timings?: string;
  entryFee?: string;
  facilities?: string;
  contact?: string;
};

export const tourists: Tourist[] = [
  {
    id: 1,
    name: "Sunny Beach",
    image: "/images/tourist/beach.jpg",
    description: "A beautiful beach perfect for relaxation and sunsets.",
    type: "Beach",
    timings: "Sunrise to Sunset",
    entryFee: "Free",
    facilities: "Restrooms, Cafeteria",
    contact: "☎ 123456789",
  },
  {
    id: 2,
    name: "Historic Fort",
    image: "/images/tourist/fort.jpg",
    description: "An ancient fort showcasing the city's rich history.",
    type: "Historic Site",
    timings: "9:00 AM – 6:00 PM",
    entryFee: "$5",
    facilities: "Guided Tours, Parking",
    contact: "☎ 987654321",
  },
];

