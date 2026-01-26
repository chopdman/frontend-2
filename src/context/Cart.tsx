import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/cartReducer.js";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItems");
  if (localCartData?.length === 0) {
    return [];
  } else {
    return JSON.parse(localCartData!);
  }
};
const initialstate = {
  cart: getLocalCartData(),
  totalItems: 0,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialstate);
  const AddToCart = (id: any, title: any, price: any, ItemQuantity: any) => {
    dispatch({
      type: "addedtoCart",
      payload: {
        id,
        title,
        price,
        quantity: ItemQuantity,
      },
    });
  };
  const DeleteItem = (id: any) => {
    dispatch({
      type: "deleteItem",
      payload: id,
    });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, AddToCart, DeleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
