import Image from "next/image";
import { hospitals } from "@/data/hospitalData";

export default function HospitalsPage() {
  return (
    <div className="container section">
      <h1 className="page-title">Hospitals</h1>

      <div className="grid">
        {hospitals.map((h) => (
          <div key={h.id} className="card">
            
            <Image
              src={h.image}
              alt={h.name}
              width={400}
              height={250}
              className="card-image"
            />

            <div className="card-content">
              <h3 className="card-title">{h.name}</h3>

              <p className="card-text">
                <b>Services:</b> {h.services}
              </p>

              <p className="card-text">
                <b>Departments:</b> {h.departments?.join(", ")}
              </p>

              <p className="card-text">
                <b>Address:</b> {h.address}
              </p>

              <p className="card-text">
                <b>Phone:</b> {h.phone}
              </p>

              <p className="card-text">
                <b>Timings:</b> {h.timings}
              </p>

              <p className="card-text">
                <b>Facilities:</b> {h.facilities}
              </p>

              {h.website && (
                <a
                  href={h.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
