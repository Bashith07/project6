import Image from "next/image";
import { transport } from "@/data/transportData";

export default function TransportPage() {
  return (
    <div className="container section">
      <h1 className="page-title">Public Transport</h1>

      <div className="grid">
        {transport.map((t) => (
          <div key={t.id} className="card">
            
            <Image
              src={t.image}
              alt={t.name}
              width={400}
              height={250}
              className="card-image"
            />

            <div className="card-content">
              <h3 className="card-title">{t.name}</h3>

              <p className="card-text">
                <b>Type:</b> {t.type}
              </p>

              <p className="card-text">
                <b>Timing:</b> {t.timing}
              </p>

              <p className="card-text">
                <b>Route:</b> {t.route}
              </p>

              <p className="card-text">
                <b>Fare:</b> {t.fare}
              </p>

              <p className="card-text">
                <b>Stops:</b> {t.stops?.join(", ")}
              </p>

              <p className="card-text">
                <b>Facilities:</b> {t.facilities}
              </p>

              <p className="card-text">
                <b>Contact:</b> {t.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
