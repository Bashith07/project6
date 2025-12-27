"use client";

import Image from "next/image";
import { tourists } from "@/data/touristData";
import { useDispatch } from "react-redux";
import { addFavourite } from "@/redux/slices/favSlice";
import { useRouter } from "next/navigation";

export default function TouristPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFavourite = (tourist: any) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      router.push("/login"); // ❌ not logged in
      return;
    }

    dispatch(
      addFavourite({
        id: tourist.id,
        name: tourist.name,
        shortDesc: tourist.type,
        image: tourist.image,
      })
    );
  };

  return (
    <div className="container section">
      <h1 className="page-title">Tourist Spots</h1>

      <div className="grid">
        {tourists.map((t) => (
          <div key={t.id} className="card">
            
            {/* IMAGE + STAR */}
            <div style={{ position: "relative" }}>
              <Image
                src={t.image}
                alt={t.name}
                width={400}
                height={250}
                className="card-image"
              />

              {/* ⭐ Favourite Button */}
              <button
                onClick={() => handleFavourite(t)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "white",
                  borderRadius: "50%",
                  padding: "6px 8px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ⭐
              </button>
            </div>

            {/* CONTENT */}
            <div className="card-content">
              <h3 className="card-title">{t.name}</h3>
              <p className="card-text"><b>Type:</b> {t.type}</p>
              <p className="card-text"><b>Timings:</b> {t.timings}</p>
              <p className="card-text"><b>Entry Fee:</b> {t.entryFee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
