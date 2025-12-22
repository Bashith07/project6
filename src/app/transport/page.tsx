import Image from "next/image";
import { transport } from "@/data/transportData";

export default function TransportPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Public Transport</h1>

      <div className="grid">
        {transport.map((item) => (
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

              <p className="card-text"><strong>Type:</strong> {item.type}</p>
              <p className="card-text"><strong>Timing:</strong> {item.timing}</p>
              <p className="card-text"><strong>Route:</strong> {item.route}</p>
              <p className="card-text"><strong>Fare:</strong> {item.fare}</p>
              <p className="card-text"><strong>Stops:</strong> {item.stops?.join(", ")}</p>
              <p className="card-text"><strong>Facilities:</strong> {item.facilities}</p>
              <p className="card-text"><strong>Contact:</strong> {item.contact}</p>

              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
