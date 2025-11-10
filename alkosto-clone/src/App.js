import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// ⬇️ Usa la exportación por defecto de tu CartContext
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header/Header";
import FooterDark from "./components/FooterDark/FooterDark";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
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

function AppShell() {
  const location = useLocation();

  // Rutas donde NO queremos mostrar el footer
  const HIDE_FOOTER_ON = ["/cart", "/checkout", "/order-confirmation"];

  // Si la ruta actual empieza por alguna de las anteriores, ocultamos el footer
  const hideFooter = HIDE_FOOTER_ON.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      {/* ⬇️ Footer visible solo si la ruta NO está marcada para ocultarse */}
      {!hideFooter && <FooterDark />}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppShell />
      </Router>
    </CartProvider>
  );
}
