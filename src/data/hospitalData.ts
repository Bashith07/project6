export type Hospital = {
  id: number;
  name: string;
  image: string;
  services: string;
  departments?: string[];
  address?: string;
  phone?: string;
  timings?: string;
  facilities?: string;
  website?: string;
};

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "City General Hospital",
    image: "/images/hospitals/general.jpg",
    services: "24/7 Emergency, Surgery, ICU",
    departments: ["Emergency", "Surgery", "ICU"],
    address: "123 Main Street, City",
    phone: "☎ 108",
    timings: "24/7",
    facilities: "Ambulance, Pharmacy, Parking",
    website: "https://cityhospital.example.com",
  },
  {
    id: 2,
    name: "Emergency Care Center",
    image: "/images/hospitals/emergency.jpg",
    services: "Trauma Care, Ambulance",
    departments: ["Trauma", "Ambulance"],
    address: "456 Green Road, City",
    phone: "☎ 112",
    timings: "24/7",
    facilities: "Parking, Pharmacy",
    website: "https://emergencycare.example.com",
  },
];

