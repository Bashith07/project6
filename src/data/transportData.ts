export type Transport = {
  id: number;
  name: string;
  image: string;
  type?: string;
  timing?: string;
  route?: string;
  fare?: string;
  stops?: string[];
  facilities?: string;
  contact?: string;
  description?: string;
};

export const transport: Transport[] = [
  {
    id: 1,
    name: "Metro Train",
    image: "/images/transport/metro.jpg",
    type: "Train",
    timing: "5:00 AM – 11:00 PM",
    route: "North – South Line",
    fare: "$1 – $3",
    stops: ["Station A", "Station B", "Station C"],
    facilities: "AC, WiFi, Seating",
    contact: "☎ 1800-111-222",
    description: "Fast and convenient metro service across the city.",
  },
  {
    id: 2,
    name: "City Bus",
    image: "/images/transport/bus.jpg",
    type: "Bus",
    timing: "24 Hours",
    route: "Main Routes",
    fare: "$0.5 – $2",
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    facilities: "AC, Standing Area",
    contact: "☎ 1800-333-444",
    description: "City-wide bus service covering major areas.",
  },
];

