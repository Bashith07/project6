import Image from "next/image";
import { hospitals } from "@/data/hospitalData";

export default function HospitalsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hospitals</h1>
      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {hospitals.map((h) => (
          <div key={h.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <Image src={h.image} alt={h.name} width={400} height={250} style={{ width: "100%", height: "auto" }} />
            <h3>{h.name}</h3>
            <p><strong>Services:</strong> {h.services}</p>
            <p><strong>Departments:</strong> {h.departments?.join(", ")}</p>
            <p><strong>Address:</strong> {h.address}</p>
            <p><strong>Phone:</strong> {h.phone}</p>
            <p><strong>Timings:</strong> {h.timings}</p>
            <p><strong>Facilities:</strong> {h.facilities}</p>
            <p><strong>Website:</strong> <a href={h.website} target="_blank" rel="noopener noreferrer">{h.website}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

