import Image from "next/image";
import { transport } from "@/data/transportData";

export default function TransportDetails({ params }) {
  const item = transport.find(t => t.id.toString() === params.id);

  if (!item) return <p>Transport not found</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">{item.name}</h1>

      <Image
        src={item.image}
        alt={item.name}
        width={800}
        height={400}
        className="detail-image"
      />

      <div className="detail-box">
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Timing:</strong> {item.timing}</p>
        <p><strong>Route:</strong> {item.route}</p>
        <p><strong>Fare:</strong> {item.fare}</p>
        <p><strong>Stops:</strong> {item.stops?.join(", ")}</p>
        <p><strong>Facilities:</strong> {item.facilities}</p>
        <p><strong>Contact:</strong> {item.contact}</p>
        <p><strong>Description:</strong> {item.description}</p>
      </div>
    </div>
  );
}
