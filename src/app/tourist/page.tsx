import Image from "next/image";
import { tourists } from "@/data/touristData";

export default function TouristPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tourist Spots</h1>
      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {tourists.map((t) => (
          <div key={t.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <Image src={t.image} alt={t.name} width={400} height={250} style={{ width: "100%", height: "auto" }} />
            <h3>{t.name}</h3>
            <p><strong>Type:</strong> {t.type}</p>
            <p><strong>Timings:</strong> {t.timings}</p>
            <p><strong>Entry Fee:</strong> {t.entryFee}</p>
            <p><strong>Facilities:</strong> {t.facilities}</p>
            <p><strong>Contact:</strong> {t.contact}</p>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


