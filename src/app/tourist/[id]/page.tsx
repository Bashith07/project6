import Image from "next/image";
import { tourist } from "@/data/touristData";

export default function TouristDetails({
  params,
}: {
  params: { id: string };
}) {
  const place = tourist.find(
    (item) => item.id === Number(params.id)
  );

  if (!place) {
    return <p className="p-6">Tourist place not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>

      <Image
        src={place.image}
        alt={place.name}
        width={800}
        height={450}
        className="rounded-lg mb-4"
      />

      <p className="mb-2">{place.description}</p>
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Entry Fee:</strong> {place.entryFee}</p>
      <p><strong>Timings:</strong> {place.timings}</p>
      <p><strong>Facilities:</strong> {place.facilities}</p>
      <p><strong>Contact:</strong> {place.contact}</p>
      <p><strong>Website:</strong> {place.website}</p>
    </div>
  );
}
