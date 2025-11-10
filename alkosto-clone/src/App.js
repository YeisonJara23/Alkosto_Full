import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
// ⬇️ Usa el footer negro (y elimina el import del Footer blanco)
import FooterDark from "./components/FooterDark/FooterDark";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";

// Registro
import RegisterPage from "./pages/RegisterPage";

import "./App.scss";

// Sube al inicio en cada navegación
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />

              {/* Registro */}
              <Route path="/register" element={<RegisterPage />} />

              {/* (Opcional) Ruta 404
              <Route path="*" element={<NotFoundPage />} />
              */}
            </Routes>
          </main>

          {/* ⬇️ Deja solo el footer negro */}
          <FooterDark />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
