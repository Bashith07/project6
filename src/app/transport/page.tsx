"use client";

import Image from "next/image";
import { transport } from "@/data/transportData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addFavourite, removeFavourite } from "@/redux/slices/favSlice";
import { RootState } from "@/redux/store";

export default function TransportPage() {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.favourites.items);

  const isFavourite = (id: string | number) =>
    favItems.some((item) => item.id === id);

  return (
    <div className="container section">

      <h1 className="page-title">Public Transport</h1>

      <div className="transport-grid">
        {transport.map((t) => {
          const fav = isFavourite(t.id.toString());

          return (
            <div key={t.id} className="transport-card">

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
                <h3 className="card-title">{t.name}</h3>
                <p><b>Type:</b> {t.type}</p>
                <p><b>Timing:</b> {t.timing}</p>
                <p><b>Route:</b> {t.route}</p>
                <p><b>Fare:</b> {t.fare}</p>
                <p><b>Stops:</b> {t.stops?.join(", ")}</p>
                <p><b>Facilities:</b> {t.facilities}</p>
                <p><b>Contact:</b> {t.contact}</p>

                {/* ADD TO CART */}
                <button
                  className="btn-primary cart-btn"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: t.id.toString(),
                        name: t.name,
                        image: t.image,
                        price: t.fare?.toString() || "0",
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
                            shortDesc: t.type || "Transport",
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
