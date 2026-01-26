import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import {  useNavigate } from "react-router";
// import { CartContext } from "../context/Cart";

export default function CartButton() {
  const navigate = useNavigate();
  // const { cart } = useContext(CartContext);
  return (
    <div onClick={()=> navigate("/cart")} className="fixed top-5 right-50 z-50 flex items-center justify-center ">
      <FaCartArrowDown color="black" size={20} />
      {/* <span className="text-white">{cart?.length}</span> */}
    </div>
  );
}
