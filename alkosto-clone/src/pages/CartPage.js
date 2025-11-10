import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.scss";

const FALLBACK_IMG = "/images/products/placeholder.webp";

export default function CartPage() {
  const {
    cartItems,
    total = 0,
    subtotal = 0,
    shipping = 0,
    totalQuantity = 0,
    updateQuantity,
    removeFromCart,
    clearCart,
    money,
  } = useCart();

  const navigate = useNavigate();

  // Carrito vacío
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart container">
        <h1 className="cart__title">Carrito de compras</h1>
        <div className="cart__empty">
          Tu carrito de compras está vacío.{" "}
          <Link to="/" className="cart__link">
            Ver ofertas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart container">
      <h1 className="cart__title">Carrito de compras</h1>

      <div className="cart__grid">
        {/* Columna izquierda - Items */}
        <div className="cart__items">
          {cartItems.map((it) => (
            <article key={`${it.id}`} className="c-item">
              {/* Imagen del producto con fallback y onError */}
              <div className="c-item__imgbox">
                <img
                  className="c-item__img"
                  src={it.image || FALLBACK_IMG}
                  alt={it.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  onError={(e) => {
                    const fallback = window.location.origin + FALLBACK_IMG;
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = FALLBACK_IMG;
                    }
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="c-item__content">
                <div className="c-item__head">
                  {/* Si más adelante tienes ruta a detalle, cambia el # por /product/:id */}
                  <Link to="#" className="c-item__name">
                    {it.name}
                  </Link>
                  {it.brand && <div className="c-item__brand">{it.brand}</div>}
                </div>

                {/* Badge envío */}
                <div className="c-item__shipping">
                  <span className="badge badge--radio" />
                  Envío <b>gratis</b>
                </div>

                {/* Cantidad y eliminar */}
                <div className="c-item__qty">
                  <span>Cantidad:</span>
                  <select
                    value={it.quantity}
                    onChange={(e) => updateQuantity(it.id, Number(e.target.value))}
                    aria-label={`Cantidad de ${it.name}`}
                  >
                    {[...Array(10)].map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {idx + 1}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className="c-item__remove"
                    onClick={() => removeFromCart(it.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {/* Precio unitario del item */}
              <div className="c-item__price">
                {money(typeof it.price === "number" ? it.price : 0)}
              </div>
            </article>
          ))}

          {/* Vaciar carrito */}
          <button className="cart__clear" onClick={clearCart} type="button">
            Vaciar carrito
          </button>
        </div>

        {/* Columna derecha - Resumen */}
        <aside className="cart__summary">
          <h3 className="sum__title">Mi carrito</h3>

          <div className="sum__row">
            <span>
              Subtotal ({totalQuantity} producto{totalQuantity > 1 ? "s" : ""})
            </span>
            <b>{money(Number(subtotal) || 0)}</b>
          </div>

          <div className="sum__row">
            <span>Entrega</span>
            <b>{Number(shipping) === 0 ? "Gratis" : money(Number(shipping) || 0)}</b>
          </div>

          <div className="sum__total">
            <span>Total a pagar</span>
            <b>{money(Number(total) || 0)}</b>
          </div>

          <button
            className="sum__btn"
            type="button"
            onClick={() => navigate("/checkout")}
          >
            Ir a pagar
          </button>

          <div className="sum__safe">Tu compra siempre segura</div>
        </aside>
      </div>
    </div>
  );
}
