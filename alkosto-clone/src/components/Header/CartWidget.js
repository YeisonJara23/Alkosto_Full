// src/components/Header/CartWidget.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
  const { cartItems, totalQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="cart-widget"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Icono + texto */}
      <Link to="/cart" className="cart-link">
        <i className="alk-icon-cart" />
        <span>Mi carrito</span>
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>

      {/* Mini dropdown */}
      {isOpen && cartItems.length > 0 && (
        <div className="cart-dropdown">
          <ul>
            {cartItems.slice(0, 4).map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">x {item.quantity || 1}</div>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/cart" className="go-to-cart">
            Ver carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
