import React from "react";
import "./ProductCard.scss";
import { useCart } from "../../context/CartContext";

const FALLBACK_IMG = "/images/products/placeholder.webp";

export default function ProductCard({ product }) {
  const { addToCart, money } = useCart();

  const handleAdd = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        // ✅ guarda SIEMPRE una imagen válida en el carrito
        image: product.image || FALLBACK_IMG,
      },
      1
    );
  };

  return (
    <article className="p-card">
      <img
        className="p-card__img"
        src={product.image || FALLBACK_IMG}
        alt={product.name}
        loading="lazy"
        // ✅ si falla el src, usa el fallback
        onError={(e) => {
          if (e.currentTarget.src !== window.location.origin + FALLBACK_IMG) {
            e.currentTarget.src = FALLBACK_IMG;
          }
        }}
      />
      <div className="p-card__body">
        <h4 className="p-card__title">{product.name}</h4>
        {product.brand && <div className="p-card__brand">{product.brand}</div>}
        <div className="p-card__price">{money(product.price)}</div>
        <button className="p-card__btn" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
