import React, { useState } from "react";
import vr from "../../assets/vr.png";
import { useCart } from "../../pages/CartContext";

const Vr = () => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const product = {
    id: "vr1", // unique id for cart
    name: "Oculus Quest",
    category: "VR Headset",
    price: 10000,
    offerPrice: 8000,
    rating: 4,
    image: vr,
  };

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    addToCart(product);
  };

  const handleSubtract = () => {
    const newCount = Math.max(count - 1, 0);
    setCount(newCount);
    // optionally remove from cart if implemented
  };

  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
      <div className="group cursor-pointer flex items-center justify-center px-2 my-4">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <span key={i}>{product.rating > i ? "★" : "☆"}</span>
            ))}
          <p>({product.rating})</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-indigo-500">
            Rs {product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              Rs{product.price}
            </span>
          </p>
          <div className="text-indigo-500">
            {count === 0 ? (
              <button
                className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                onClick={handleAdd}
              >
                + Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                <button
                  onClick={handleSubtract}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center">{count}</span>
                <button
                  onClick={handleAdd}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vr;
