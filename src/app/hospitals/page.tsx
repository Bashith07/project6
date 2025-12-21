import Link from "next/link";
import Image from "next/image";
import { hospitals } from "@/data/hospitalData";

export default function HospitalsPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Hospitals</h1>

      <div className="grid">
        {hospitals.map((h) => (
          <Link key={h.id} href={`/hospitals/${h.id}`} className="card">
            <Image
              src={h.image}
              alt={h.name}
              width={400}
              height={250}
              className="card-image"
            />

            <div className="card-content">
              <h3 className="card-title">{h.name}</h3>

              <p className="card-text"><strong>Services:</strong> {h.services}</p>
              <p className="card-text"><strong>Departments:</strong> {h.departments?.join(", ")}</p>
              <p className="card-text"><strong>Address:</strong> {h.address}</p>
              <p className="card-text"><strong>Contact:</strong> {h.phone}</p>
              <p className="card-text"><strong>Timings:</strong> {h.timings}</p>
              <p className="card-text"><strong>Facilities:</strong> {h.facilities}</p>
              <p className="card-text"><strong>Website:</strong> {h.website}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
