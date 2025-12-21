import Image from "next/image";
import Link from "next/link";
import { hospitals } from "@/data/hospitalData";

interface PageProps {
  params: { id: string };
}

export default function HospitalDetails({ params }: PageProps) {
  const id = Number(params.id);
  const hospital = hospitals.find(h => h.id === id);

  if (!hospital) return <p>Hospital not found.</p>;

  return (
    <div className="page-container">
      <Link href="/hospitals" className="back-link">← Back to Hospitals</Link>
      <h1>{hospital.name}</h1>
      <Image src={hospital.image} alt={hospital.name} width={800} height={400} />
      <p><strong>Services:</strong> {hospital.services}</p>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Phone:</strong> {hospital.phone}</p>
    </div>
  );
}
