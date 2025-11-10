// src/pages/CheckoutPage.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import "./CheckoutPage.scss";

export default function CheckoutPage() {
  // Tomamos lo que nos dé el contexto, con defaults seguros
  const {
    cartItems = [],
    subtotal: ctxSubtotal,
    shipping: ctxShipping,
    total: ctxTotal,
    clearCart,
    money, // si existe, lo usamos
  } = useCart();

  const navigate = useNavigate();

  // ------- Formateador seguro -------
  const localMoney = (n) =>
    Number(n ?? 0).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    });

  const toMoney = (n) =>
    typeof money === "function" ? money(Number(n ?? 0)) : localMoney(n);

  // ------- Totales seguros (si el contexto no los trae, los calculamos) -------
  const fallbackSubtotal = cartItems.reduce((acc, it) => {
    const q = Number(it?.quantity ?? 1);
    const p = Number(it?.price ?? 0);
    return acc + q * p;
  }, 0);

  const subtotal = typeof ctxSubtotal === "number" ? ctxSubtotal : fallbackSubtotal;
  const shipping = typeof ctxShipping === "number" ? ctxShipping : 0;
  const total = typeof ctxTotal === "number" ? ctxTotal : subtotal + shipping;

  // ------- Formulario -------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de compra finalizada
    const payload = {
      ...formData,
      subtotal,
      shipping,
      total,
      items: cartItems,
    };
    clearCart();
    navigate("/order-confirmation", { state: payload });
  };

  if (!cartItems.length) {
    return (
      <div className="checkout-page empty">
        <h2>No tienes productos en el carrito</h2>
        <Link to="/" className="co__link">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Finalizar compra</h1>

      <div className="checkout-container">
        {/* -------- Columna izquierda: Formulario -------- */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Datos de envío</h2>

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <h2>Método de pago</h2>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit-card">Tarjeta de crédito</option>
            <option value="debit-card">Tarjeta débito</option>
            <option value="cash">Pago en efectivo</option>
          </select>

          <button type="submit" className="confirm-btn">
            Confirmar compra
          </button>
        </form>

        {/* -------- Columna derecha: Resumen -------- */}
        <aside className="checkout-summary">
          <h2>Resumen del pedido</h2>

          <ul className="sum__list">
            {cartItems.map((it) => {
              const q = Number(it?.quantity ?? 1);
              const p = Number(it?.price ?? 0);
              return (
                <li key={it.id} className="sum__item">
                  <div className="sum__item-left">
                    <img
                      src={it.image || "/images/products/placeholder.webp"}
                      alt={it.name}
                      className="sum__thumb"
                    />
                    <div>
                      <div className="sum__name">{it.name}</div>
                      {it.brand && <div className="sum__brand">{it.brand}</div>}
                      <div className="sum__qty">Cantidad: {q}</div>
                    </div>
                  </div>

                  <div className="sum__line-total">{toMoney(q * p)}</div>
                </li>
              );
            })}
          </ul>

          <div className="sum__row">
            <span>Subtotal</span>
            <b>{toMoney(subtotal)}</b>
          </div>

          <div className="sum__row">
            <span>Entrega</span>
            <b>{shipping === 0 ? "Gratis" : toMoney(shipping)}</b>
          </div>

          <div className="sum__total">
            <span>Total a pagar</span>
            <b>{toMoney(total)}</b>
          </div>
        </aside>
      </div>
    </div>
  );
}
