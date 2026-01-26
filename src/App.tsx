import { createContext } from "react";

import { Route, Routes } from "react-router";
import Product from "./components/Product";
import Home from "./components/Home";
import CartList from "./components/CartList";
import Checkout from "./components/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

export const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Product />} />
        <Route path="/:products" element={<Product />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartList />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
