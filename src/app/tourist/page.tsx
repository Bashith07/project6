import Image from "next/image";
import { tourist } from "@/data/touristData";

export default function TouristPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Tourist Attractions</h1>

      <div className="grid">
        {tourist.map((item) => (
          <div key={item.id} className="card">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={250}
              className="card-image"
            />

            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>

              <p className="card-text">{item.description}</p>
              <p className="card-text"><strong>Location:</strong> {item.location}</p>
              <p className="card-text"><strong>Entry Fee:</strong> {item.entryFee}</p>
              <p className="card-text"><strong>Timings:</strong> {item.timings}</p>
              <p className="card-text"><strong>Facilities:</strong> {item.facilities}</p>
              <p className="card-text"><strong>Contact:</strong> {item.contact}</p>
              <p className="card-text"><strong>Website:</strong> {item.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
