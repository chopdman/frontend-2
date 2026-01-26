import { FaCartArrowDown } from "react-icons/fa";
import { useCartContext } from "../context/Cart";
import { Navigate, useNavigate } from "react-router";

export default function CartButton() {
  const navigate = useNavigate();
  const {totalItems} = useCartContext();
  return (
    <div onClick={()=> navigate("/cart")} className="fixed top-5 right-50 z-50 flex items-center justify-center ">
      <FaCartArrowDown color="black" size={20} />
      <span className="text-white">{totalItems}</span>
    </div>
  );
}
