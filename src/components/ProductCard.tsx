import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ProductCard() {
        const theme = useContext(ThemeContext);
    return(
        <div className="flex items-center justify-center w-screen h-screen">

         <div className="max-w-fit rounded overflow-hidden shadow-lg bg-blue-500   min-h-1/3">
      <div className="px-6 py-2 flex items-center justify-between gap-4">
        <div className={`font-bold text-xl mb-2 ${theme==="dark" ? `text-white` :`text-black`} `}>Chips</div>
     
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: 100
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Category: Food
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Quantity: 10
        </span>
     

      </div>
    </div>
        </div>
    )
}
