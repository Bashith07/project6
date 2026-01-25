// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page-container">
      {/* ================= HERO ================= */}
      <section className="hero-elite">
        <div className="hero-content">
          <h1>
            Smart City
            <span>Information System</span>
          </h1>

          <p>
            Transport, healthcare, and tourism — beautifully organized
            for modern urban life.
          </p>

          <div className="hero-actions">
            <Link href="/transport" className="btn-primary">
              Explore City
            </Link>

            <Link href="/tourist" className="btn-outline">
              Discover Places
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section">
        <div className="container elite-grid">

          <Feature
            title="Transport"
            desc="Metro routes, bus timings, smart connectivity."
            link="/transport"
            img="/images/transport1.jpg"
          />

          <Feature
            title="Hospitals"
            desc="Emergency care, 24/7 hospitals near you."
            link="/hospitals"
            img="/images/hospital.jpg"
          />

          <Feature
            title="Tourism"
            desc="Iconic landmarks and must-visit destinations."
            link="/tourist"
            img="/images/tourism.jpg"
          />

        </div>
      </section>
    </main>
  );
}

/* ================= FEATURE CARD ================= */

function Feature({
  title,
  desc,
  link,
  img,
}: {
  title: string;
  desc: string;
  link: string;
  img: string;
}) {
  return (
    <Link href={link} className="elite-card">

      {/* IMAGE WRAPPER */}
      <div className="elite-img-box">
        <Image
          src={img}
          alt={title}
          fill
          className="elite-card-img"
        />
      </div>

      {/* CONTENT */}
      <div className="elite-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>Explore →</span>
      </div>

    </Link>
  );
}
