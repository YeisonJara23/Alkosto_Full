// src/pages/HomePage.js
import React from "react";

import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import MiniCategories from "../components/MiniCategories/MiniCategories";
import BenefitsStrip from "../components/BenefitsStrip/BenefitsStrip";
import WideBanner from "../components/WideBanner/WideBanner";
import FeaturedDeals from "../components/FeaturedDeals/FeaturedDeals";
import DealsSection from "../components/DealsSection/DealsSection";
import SeasonPromoBanner from "../components/SeasonPromoBanner/SeasonPromoBanner";
import NavidadDecor from "../components/NavidadDecor/NavidadDecor";
import BrandsStrip from "../components/BrandsStrip/BrandsStrip";
import InstallServices from "../components/InstallServices/InstallServices";
import PaymentOffers from "../components/PaymentOffers/PaymentOffers";


import "./HomePage.scss";

export default function HomePage() {
  // Slides del hero
  const heroSlides = [
    {
      title: "Ofertas irresistibles",
      subtitle: "Tecnología al mejor precio",
      cta: "Ver ofertas",
      href: "/ofertas",
      img: "/images/hero/imagen1.webp",
    },
    {
      title: "Portátil 2 en 1 HP",
      subtitle: "51% de descuento",
      cta: "Comprar ahora",
      href: "/category/portatiles",
      img: "/images/hero/imagen2.webp",
    },
    {
      title: 'TV LG 65" 4K UHD',
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
      img: "/images/hero/imagen4.webp",
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
      {/* ===== HERO + MINI CATEGORÍAS ===== */}
      <section className="home-hero" aria-label="Promociones y accesos rápidos">
        <div className="home-hero__container">
          <div className="home-hero__left">
            <HeroCarousel slides={heroSlides} interval={6000} bleed={false} />
          </div>
          <aside className="home-hero__right" aria-label="Mini categorías">
            <MiniCategories variant="sidebar" columns={6} limit={null} />
          </aside>
        </div>
      </section>

      {/* ===== BANNER ANCHO (cama) ===== */}
      <WideBanner
        src="/images/banners/cama.webp"
        alt="Todo para tu cama en un solo lugar"
      />

      {/* ===== TIRA DE BENEFICIOS ===== */}
      <BenefitsStrip />

      {/* ===== OFERTAS DESTACADAS GRANDES (3) ===== */}
      <FeaturedDeals />

      {/* ===== BLOQUES DE 4 TARJETAS ===== */}
      <DealsSection
        title="Celulares con descuentos inmejorables"
        viewAllHref="/category/celulares"
        deals={[
          { src: "/images/deals/deal4.webp", alt: "Honor X8c" },
          { src: "/images/deals/deal5.webp", alt: "Realme 15 Pro" },
          { src: "/images/deals/deal6.webp", alt: "Samsung Galaxy A26" },
          { src: "/images/deals/deal7.webp", alt: "Redmi Note 14 Pro" },
        ]}
      />

      <DealsSection
        title="Computadores a los mejores precios"
        viewAllHref="/category/computadores"
        deals={[
          { src: "/images/deals/deal8.webp", alt: "All in One Lenovo" },
          { src: "/images/deals/deal9.webp", alt: "Portátil MSI Modern" },
          { src: "/images/deals/deal10.webp", alt: "PC Orion 7000" },
          { src: "/images/deals/deal11.webp", alt: "Portátil ASUS Vivobook" },
        ]}
      />

      <DealsSection
        title="TV y Audio con ofertas imperdibles"
        viewAllHref="/category/tv"
        deals={[
          { src: "/images/deals/deal12.webp", alt: "Navidad Kalley" },
          { src: "/images/deals/deal13.webp", alt: 'TV Samsung 55"' },
          { src: "/images/deals/deal14.webp", alt: 'TV LG 50" 4K LED' },
          { src: "/images/deals/deal15.webp", alt: 'TV TCL 50" FHD QLED' },
        ]}
      />

      {/* ===== PROMO HASBRO (azul) ===== */}
      <SeasonPromoBanner
        src="/images/banners/oferta.webp"
        alt="Hasta 60% Hasbro"
      />

      {/* ===== FRANJA NAVIDEÑA: VIDEO + SLIDER =====
         - Repite el video automáticamente (loop)
         - Silenciado y compatible con móvil (playsInline)
         - priceColor="yellow" → etiqueta de precio amarilla en vez de verde */}
      <NavidadDecor
        videoSrc="/images/banners/navidad.mp4"
        poster="/images/banners/imagen2.webp"
        videoProps={{ autoPlay: true, loop: true, muted: true, playsInline: true }}
        priceColor="yellow"
      />

      {/* ===== MÁS BLOQUES ===== */}
      <DealsSection
        title="Llantas y deportes: con promociones inigualables"
        viewAllHref="/category/llantas_motos"
        deals={[
          { src: "/images/deals/deal20.webp", alt: "Llantas Michelin 15%" },
          { src: "/images/deals/deal21.webp", alt: "Llanta Goodyear Direction" },
          { src: "/images/deals/deal22.webp", alt: "Llanta/moto Dunlop 15%" },
          { src: "/images/deals/deal23.webp", alt: "Llanta Triangle TR259" },
        ]}
      />

      <DealsSection
        title="Lo mejor en videojuegos y más"
        viewAllHref="/category/videojuegos"
        deals={[
          { src: "/images/deals/deal25.webp", alt: "Consola Nintendo Switch 2" },
          { src: "/images/deals/deal26.webp", alt: "Paquete PlayStation / Promo" },
          { src: "/images/deals/deal27.webp", alt: "Reloj Huawei Watch GT6" },
          { src: "/images/deals/deal28.webp", alt: "Roku Express 4K" },
        ]}
      />

      <DealsSection
        title="Estrena en tu hogar"
        viewAllHref="/category/hogar"
        deals={[
          { src: "/images/deals/deal29.webp", alt: "Colchón Spring Doble Selene" },
          { src: "/images/deals/deal30.webp", alt: "Comforter Doble K-Line" },
          { src: "/images/deals/deal31.webp", alt: "Colchón Romance Relax" },
          { src: "/images/deals/deal32.webp", alt: "Almohada Cervical K-Line" },
        ]}
      />

      <DealsSection
        title="Lo mejor para tu decoración en esta Navidad"
        viewAllHref="/category/navidad"
        deals={[
          { src: "/images/deals/deal33.webp", alt: "Adornos y colgantes navideños" },
          { src: "/images/deals/deal34.webp", alt: "Figuras navideñas JOY" },
          { src: "/images/deals/deal35.webp", alt: "Manta Navidad Pino Verde JOY" },
          { src: "/images/deals/deal36.webp", alt: "Inflables navideños" },
        ]}
      />

      {/* ===== MARCAS + BANNER 0% ===== */}
      <BrandsStrip banner="/images/banners/davivienda-0.webp" />

      {/* ===== SERVICIOS DE INSTALACIÓN ===== */}
      <InstallServices />

      {/* ===== OFERTAS / MEDIOS DE PAGO / PAGA FÁCIL ===== */}
      <PaymentOffers />
      
    </main>
  );
}
