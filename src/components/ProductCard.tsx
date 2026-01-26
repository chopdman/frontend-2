import { useContext } from "react";
import { ThemeContext } from "../App";
import { useCartContext } from "../context/Cart.js";

export default function ProductCard({ product }) {
const { AddToCart } = useCartContext();
 
  const theme = useContext(ThemeContext);
  return (
    <div className=" border rounded shadow-lg bg-blue-500 ">
      <div className="px-6 py-2 flex flex-wrap items-center justify-between gap-4">
        <div
          className={`font-bold text-xl mb-2 ${theme === "dark" ? `text-white` : `text-black`} `}
        >
          {product?.title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col gap-2 justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: {product?.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Category: {product?.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Quantity: {product?.stock}
        </span>
        <button
          onClick={() => AddToCart(product)}
          className="border bg-green-400 rounded w-40"
        >
          Add Cart +
        </button>
      </div>
    </div>
  );
}
