import { useContext, useReducer } from "react";
import { ThemeContext } from "../App";
import { cartReducer, initialState } from "../reducer/cartReducer.js";

export default function ProductCard({ data }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function AddToCart() {
    console.log(state);
    dispatch({ type: "ADD_CART", payload: {
      id:data.id,
      title:data.title,
      stock:data.stock,
      price:data.price,
      category:data.category
    } });
  }
  const theme = useContext(ThemeContext);
  return (
    <div className=" border rounded overflow-hidden shadow-lg bg-blue-500 z-20 min-h-56  w-1/4">
      <div className="px-6 py-2 flex flex-wrap items-center justify-between gap-4">
        <div
          className={`font-bold text-xl mb-2 ${theme === "dark" ? `text-white` : `text-black`} `}
        >
          {data.title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col gap-2 justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: {data.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Category: {data.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Quantity: {data.stock}
        </span>
        <button
          onClick={AddToCart}
          className="border bg-green-400 rounded w-40"
        >
          Add Cart +
        </button>
      </div>
    </div>
  );
}
