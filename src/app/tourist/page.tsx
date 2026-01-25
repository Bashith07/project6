"use client";

import Image from "next/image";
import { tourists } from "@/data/touristData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addFavourite, removeFavourite } from "@/redux/slices/favSlice";
import { RootState } from "@/redux/store";

export default function TouristPage() {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.favourites.items);

  const isFavourite = (id: string | number) =>
    favItems.some((item) => item.id === id);

  return (
    <div className="container section">

      <h1 className="page-title">Tourist Spots</h1>

      <div className="tourist-grid">
        {tourists.map((t) => {
          const fav = isFavourite(t.id.toString());

          return (
            <div key={t.id} className="tourist-card">

              {/* IMAGE */}
              <Image
                src={t.image}
                alt={t.name}
                width={400}
                height={220}
                className="card-image"
              />

              {/* CONTENT */}
              <div className="card-content">
                <h3 className="card-title">{t.name || "Unknown Spot"}</h3>
                <p><b>Description:</b> {t.description || "No description available."}</p>
                <p><b>Type:</b> {t.type || "N/A"}</p>
                <p><b>Timing:</b> {t.timings || "N/A"}</p>
                <p><b>Entry Fee:</b> {t.entryFee || "0"}</p>
                <p><b>Facilities:</b> {t.facilities || "N/A"}</p>
                <p><b>Contact:</b> {t.contact || "N/A"}</p>

                {/* ADD TO CART */}
                <button
                  className="btn-primary cart-btn"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: t.id.toString(),
                        name: t.name,
                        image: t.image,
                        price: t.entryFee || "0",
                        quantity: 1,
                      })
                    )
                  }
                >
                  🛒 Add to Cart
                </button>

                {/* FAVORITE BUTTON */}
                <button
                  className={`btn-favorite ${fav ? "active" : ""}`}
                  onClick={() =>
                    fav
                      ? dispatch(removeFavourite(t.id.toString()))
                      : dispatch(
                          addFavourite({
                            id: t.id.toString(),
                            name: t.name,
                            image: t.image,
                            shortDesc: t.description || "Tourist Spot",
                          })
                        )
                  }
                >
                  ❤️
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
