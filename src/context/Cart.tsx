import { createContext, useContext, useEffect, useState, useMemo } from "react";

const CartContext = createContext(undefined);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");

    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(items));
  }, [items]);

  const AddToCart = (product) => {
    console.log(product);
    setItems((prev) => {
      // console.log(prev);
      if (prev === null) return [{ ...product, quantity: 1 }];
      const existing = prev?.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increment = (id) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0),
    );
  };
  const removeItem = (id: any) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };
  const totalItems = useMemo(
    () => items?.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items?.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        AddToCart,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
