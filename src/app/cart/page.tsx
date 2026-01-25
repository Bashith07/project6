"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="container section">
        <h1 className="page-title">Your Cart</h1>
        <p className="text-center">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="page-title">Your Cart</h1>

      <div className="grid">
        {cartItems.map(item => (
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
              <p className="card-text"><b>Price:</b> {item.price}</p>
              <p className="card-text"><b>Quantity:</b> {item.quantity}</p>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
