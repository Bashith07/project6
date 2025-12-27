"use client";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFavourite } from "@/redux/slices/favSlice";

export default function FavouritesPage() {
  const dispatch: AppDispatch = useDispatch();

  const favourites = useSelector(
    (state: RootState) => state.favourites.items
  );

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-bold text-center mb-6">
        ⭐ Your Wishlist
      </h1>

      {favourites.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 mb-4">
            No favourites saved yet
          </p>
          <Link href="/tourist" className="btn-primary">
            Explore Tourist Places
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((place) => (
            <div
              key={place.id}
              className="relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                onClick={() => dispatch(removeFavourite(place.id))}
                className="absolute top-3 right-3 w-9 h-9 rounded-full 
                           bg-black/60 text-white flex items-center justify-center
                           hover:bg-red-600 transition"
              >
                🗑️
              </button>

              <img
                src={place.image || "/default-place.jpg"}
                alt={place.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{place.name}</h3>
                <p className="text-sm text-gray-600">
                  {place.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
