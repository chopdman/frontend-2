import { createContext, useState } from 'react';

const CartContext = createContext({
 id: [],
 setcart: () => {},
});

const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);

 return (
   <CartContext.Provider value={{ cart, setCart }}>
     {children}
   </CartContext.Provider>
 );
};

export { CartContext, CartProvider };