import { useEffect, useState } from "react";
import { useCartContext } from "../context/Cart"

const Checkout = () => {
    const {totalPrice} = useCartContext();
    const [secondsLeft,setSecondsLeft] =useState(5*60);
    const [showCoupon,setShowCoupon] = useState(false);
    const [coupon,setCoupon] = useState(0);
     const [discountTotal,setDiscountTotal] = useState(totalPrice);
     const [originalTotal,setOriginalTotal] =useState(totalPrice);
     
     useEffect(()=>{
        setSecondsLeft(5*60);
        setOriginalTotal(totalPrice);
        setDiscountTotal(totalPrice);
     },[totalPrice]);

     useEffect(()=>{
        if(secondsLeft<=0)return;

        const timer = setInterval(()=>{
            setSecondsLeft((prev)=>prev-1);
        },1000);

        return () =>clearInterval(timer);
     },[secondsLeft]);

     useEffect(()=>{
        const newTotal=Math.max(0,originalTotal-coupon);
        setDiscountTotal(newTotal);
     },[coupon,originalTotal]);

     const minutes = String(Math.floor(secondsLeft/60)).padStart(2,"0");
     const seconds = String(secondsLeft%60).padStart(2,"0");

     const isExpired = secondsLeft <=0;
     const warning = secondsLeft <=60;


 return (
  <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
 
    {/* Timer */}
    <p
      className={`text-sm font-medium ${
        warning ? "text-red-600 animate-pulse" : "text-gray-700"
      }`}
    >
      Stock reserved for {minutes}:{seconds}
    </p>
 
    {/* Coupon Section */}
    {!showCoupon && (
      <button
        onClick={() => setShowCoupon(true)}
        className="text-blue-600 underline text-sm"
      >
        Have a Coupon?
      </button>
    )}
 
    {showCoupon && (
      <input
        type="number"
        autoFocus
        placeholder="Enter coupon value"
        value={coupon}
        onChange={(e) => setCoupon(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
 
    {/* Price Info */}
    <div className="space-y-1">
      <p className="text-lg font-semibold text-gray-800">
        Total: ${discountTotal.toFixed(2)}
      </p>
 
      {coupon > 0 && (
        <p className="text-sm text-green-600">
          You saved ${coupon} (was ${originalTotal.toFixed(2)})
        </p>
      )}
    </div>
 
    {/* Action Button */}
    <button
      disabled={isExpired}
      className={`w-full py-2 rounded-md font-semibold transition ${
        isExpired
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-green-600 hover:bg-green-700 text-white"
      }`}
    >
      {isExpired ? "Reservation Expired" : "Place Order"}
    </button>
  </div>
);
}
export default Checkout