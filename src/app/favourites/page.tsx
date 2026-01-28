"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFavourite } from "@/redux/slices/favSlice";

export default function FavouritesPage() {
  const dispatch: AppDispatch = useDispatch();

  const favourites = useSelector(
    (state: RootState) => state.favourites.items
  );

  if (favourites.length === 0) {
    return (
      <div className="container section">
        <h1 className="page-title">Your Wishlist</h1>

        <p className="text-center card-text">
          No favourites saved yet
        </p>

        <div className="flex justify-center mt-4">
          <Link href="/tourist" className="btn-primary">
            Explore Tourist Places
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="container section">
      <h1 className="page-title">Your Wishlist</h1>

      <div className="grid">
        {favourites.map((place) => (
          <div key={place.id} className="card">

            {/* IMAGE */}
            <Image
              src={place.image || "/default-place.jpg"}
              alt={place.name}
              width={400}
              height={250}
              className="card-image"
            />

            {/* CONTENT */}
            <div className="card-content">
              <h3 className="card-title">{place.name}</h3>

              <p className="card-text">
                {place.shortDesc}
              </p>

              <button
                onClick={() => dispatch(removeFavourite(place.id))}
                className="btn-outline"
              >
                Remove from Wishlist
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
