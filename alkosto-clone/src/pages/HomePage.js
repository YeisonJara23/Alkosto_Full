// src/pages/HomePage.js
import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import MiniCategories from "../components/MiniCategories/MiniCategories";
import "./HomePage.scss";

export default function HomePage() {
  // 🔹 Lista de imágenes para el carrusel
  const heroSlides = [
    {
      title: "Ofertas irresistibles",
      subtitle: "Tecnología al mejor precio",
      cta: "Ver ofertas",
      href: "/ofertas",
      img: "/images/hero/imagen1.webp",
    },
    {
      title: "Portátil 2 en 1 HP Pavilion",
      subtitle: "51% de descuento",
      cta: "Comprar ahora",
      href: "/category/portatiles",
      img: "/images/hero/imagen2.webp",
    },
    {
      title: "TV LG 65\" 4K UHD",
      subtitle: "45% de descuento",
      cta: "Ver producto",
      href: "/category/tv",
      img: "/images/hero/imagen3.webp",
    },
    {
      title: "Llena tu cama de vida",
      subtitle: "y personalidad",
      cta: "Comprar ya",
      href: "/category/ropa-hogar",
      img: "/images/hero/imagen4.webp", // si tu archivo se llama "iamgen4.webp", cámbialo aquí
    },
    {
      title: "MOTOROLA Edge 60 Fusion",
      subtitle: "52% DTO",
      cta: "Lo quiero",
      href: "/category/celulares",
      img: "/images/hero/imagen5.webp",
    },
  ];

  return (
    <main className="home">
      {/* ===== HERO: carrusel (izquierda) + mini-categorías (derecha) ===== */}
      <section className="home-hero" aria-label="Promociones y accesos rápidos">
        <div className="home-hero__container">
          {/* Carrusel a la izquierda */}
          <div className="home-hero__left">
            <HeroCarousel slides={heroSlides} interval={6000} bleed={false} />
          </div>

          {/* Mini-categorías a la derecha */}
          <aside className="home-hero__right" aria-label="Mini categorías">
            <MiniCategories variant="sidebar" columns={6} limit={null} />
          </aside>
        </div>
      </section>
    </main>
  );
}
