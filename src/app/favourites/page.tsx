// src/app/favourites/page.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../redux/store";
import { removeFavourite, FavouriteItem } from "../../redux/slices/favSlice";

export default function FavouritesPage() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const favourites: FavouriteItem[] = useSelector(
    (state: RootState) => state.favourites.items
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) return null;

  const handleRemove = (id: string | number) => {
    dispatch(removeFavourite(id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">⭐ Saved Favourites</h1>

      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No favourites saved yet.
          </p>
          <Link href="/tourist" className="btn-primary">
            Explore Places
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {favourites.map((place) => (
            <div
              key={place.id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white dark:bg-gray-800 cursor-pointer flex flex-col"
            >
              <Link href={`/tourist/${place.id}`}>
                <Image
                  src={place.image || "/default-place.jpg"}
                  alt={place.name}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{place.shortDesc}</p>
                <button
                  onClick={() => handleRemove(place.id)}
                  className="mt-auto text-red-500 hover:underline self-start"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
