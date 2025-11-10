import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// ---------- helpers ----------
const CURRENCY = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export const money = (n = 0) => CURRENCY.format(Number(n) || 0);

// ---------- context ----------
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persist
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // add or increase
  const addToCart = (product, qty = 1) => {
    if (!product || !product.id) return;

    setCartItems((prev) => {
      const idx = prev.findIndex((it) => it.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty };
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name || product.title || "Producto",
          brand: product.brand || "",
          image:
            product.image ||
            product.img ||
            "/images/products/placeholder.webp",
          price: Number(product.price) || 0,
          quantity: qty,
        },
      ];
    });
  };

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: Number(qty) } : it))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce(
      (acc, it) => acc + Number(it.price) * Number(it.quantity),
      0
    );
    const totalQuantity = cartItems.reduce((acc, it) => acc + it.quantity, 0);
    const shipping = 0; // "Gratis" para este clon
    const total = subtotal + shipping;
    return { subtotal, total, shipping, totalQuantity };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    ...totals,
    money, // helper de formato
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
