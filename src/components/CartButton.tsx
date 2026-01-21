import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../context/Cart";

export default function CartButton() {
  const { cart } = useContext(CartContext);
  return (
    <div className="fixed top-5 right-50 z-50 flex items-center justify-center ">
      <FaCartArrowDown color="black" size={20} />
      <span className="text-white">{cart?.length}</span>
    </div>
  );
}
