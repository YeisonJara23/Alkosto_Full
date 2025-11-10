import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.scss";

const money = (n) => n.toLocaleString("es-CO");

export default function CartPage() {
  const { cartItems, subtotal, updateQty, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart container">
        <h1>Carrito de compras</h1>
        <p className="empty">Tu carrito de compras está vacío.</p>
        <Link to="/" className="btn btn-orange">Volver al inicio</Link>
      </main>
    );
  }

  const shipping = 0;     // Gratis
  const discounts = 0;    // Si más adelante aplicas, cámbialo aquí
  const total = subtotal - discounts + shipping;

  return (
    <main className="cart container">
      <h1>Carrito de compras</h1>

      <div className="cart__wrap">
        {/* Lista de items */}
        <section className="cart__list">
          {cartItems.map(item => (
            <div className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-row__info">
                <h3>{item.name}</h3>
                <button
                  className="link-red"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>

              <div className="cart-row__qty">
                <label>Cantidad</label>
                <select
                  value={item.quantity}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className="cart-row__price">
                ${money(item.price * item.quantity)}
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button className="link" onClick={clearCart}>Vaciar carrito</button>
          </div>
        </section>

        {/* Resumen */}
        <aside className="cart__summary">
          <h4>Mi carrito</h4>

          <div className="sum-line">
            <span>Subtotal ({cartItems.length} producto{cartItems.length > 1 ? "s" : ""})</span>
            <b>${money(subtotal)}</b>
          </div>
          <div className="sum-line">
            <span>Entrega</span><b>Gratis</b>
          </div>
          <div className="sum-line">
            <span>Descuentos</span><b>${money(discounts)}</b>
          </div>

          <div className="sum-total">
            <span>Total a pagar</span>
            <b>${money(total)}</b>
          </div>

          <button className="btn btn-orange btn-lg">Ir a pagar</button>

          {/* Si quieres, pon sprites de medios de pago aquí */}
          {/* <p className="pay-icons"><img src="/images/payments/cards.png" alt="" /></p> */}
        </aside>
      </div>
    </main>
  );
}
