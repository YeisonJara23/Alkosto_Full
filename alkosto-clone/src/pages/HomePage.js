import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import MiniCategories from "../components/MiniCategories/MiniCategories";
import BenefitsStrip from "../components/BenefitsStrip/BenefitsStrip";
import WideBanner from "../components/WideBanner/WideBanner";
import FeaturedDeals from "../components/FeaturedDeals/FeaturedDeals";
import "./HomePage.scss";

export default function HomePage() {
  const heroSlides = [
    { title: "Ofertas irresistibles", subtitle: "Tecnología al mejor precio", cta: "Ver ofertas", href: "/ofertas", img: "/images/hero/imagen1.webp" },
    { title: "Portátil 2 en 1 HP", subtitle: "51% de descuento", cta: "Comprar ahora", href: "/category/portatiles", img: "/images/hero/imagen2.webp" },
    { title: "TV LG 65\" 4K UHD", subtitle: "45% de descuento", cta: "Ver producto", href: "/category/tv", img: "/images/hero/imagen3.webp" },
    { title: "Llena tu cama de vida", subtitle: "y personalidad", cta: "Comprar ya", href: "/category/ropa-hogar", img: "/images/hero/imagen4.webp" },
    { title: "MOTOROLA Edge 60 Fusion", subtitle: "52% DTO", cta: "Lo quiero", href: "/category/celulares", img: "/images/hero/imagen5.webp" },
  ];

   return (
    <main className="home">
      {/* HERO + Mini categorías */}
      <section className="home-hero">
        <div className="home-hero__container">
          <div className="home-hero__left">
            <HeroCarousel slides={heroSlides} interval={6000} bleed={false} />
          </div>
          <aside className="home-hero__right">
            <MiniCategories variant="sidebar" columns={6} limit={null} />
          </aside>
        </div>
      </section>

      {/* Banner ancho (tu archivo cama.webp) */}
      <WideBanner src="/images/banners/cama.webp" alt="Todo para tu cama en un solo lugar" href="#" />

      {/* Tira de beneficios */}
      <BenefitsStrip />

      {/* Ofertas destacadas (deal1/2/3.webp) */}
      <FeaturedDeals />
    </main>
  );
}
