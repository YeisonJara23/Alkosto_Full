import React from "react";
import "./BrandsStrip.scss";

const BRANDS = [
  { key: "apple",      alt: "Apple"      , src: "/images/brands/apple.webp" },
  { key: "samsung",    alt: "Samsung"    , src: "/images/brands/samsung.webp" },
  { key: "hp",         alt: "HP"         , src: "/images/brands/hp.webp" },
  { key: "lg",         alt: "LG"         , src: "/images/brands/lg.webp" },
  { key: "lenovo",     alt: "Lenovo"     , src: "/images/brands/lenovo.webp" },
  { key: "asus",       alt: "Asus"       , src: "/images/brands/asus.webp" },
  { key: "kalley",     alt: "Kalley"     , src: "/images/brands/kalley.webp" },
  { key: "xiaomi",     alt: "Xiaomi"     , src: "/images/brands/xiaomi.webp" },
  { key: "motorola",   alt: "Motorola"   , src: "/images/brands/motorola.webp" },
  { key: "haceb",      alt: "Haceb"      , src: "/images/brands/haceb.webp" },
  { key: "whirlpool",  alt: "Whirlpool"  , src: "/images/brands/whirlpool.webp" },
  { key: "mabe",       alt: "Mabe"       , src: "/images/brands/mabe.webp" },
  { key: "bose",       alt: "Bose"       , src: "/images/brands/bose.webp" },
  { key: "epson",      alt: "Epson"      , src: "/images/brands/epson.webp" },
  { key: "oppo",       alt: "Oppo"       , src: "/images/brands/oppo.webp" },
  { key: "challenger", alt: "Challenger" , src: "/images/brands/challenger.webp" },
  { key: "acer",       alt: "Acer"       , src: "/images/brands/acer.webp" },
  { key: "tcl",        alt: "TCL"        , src: "/images/brands/tcl.webp" },
];

export default function BrandsStrip({
  title = "Lleva a casa las mejores marcas",
  viewAllHref = "/marcas",
  banner = "/images/banners/davivienda-0.webp",   // 👈 Banner 0% interés
}) {
  return (
    <section className="brands">
      <div className="brands__container">
        <div className="brands__head">
          <h2 className="brands__title">{title}</h2>
          <a className="brands__all" href={viewAllHref}>Ver todo</a>
        </div>

        <ul className="brands__grid" role="list">
          {BRANDS.map((b) => (
            <li key={b.key} className="brands__item">
              {/* A dónde quieres dirigir el click del logo: /c/<marca> o una búsqueda */}
              <a className="brand" href={`/c/${b.key}`} aria-label={b.alt}>
                <img src={b.src} alt={b.alt} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>

        {/* Banner 0% interés */}
        <a
          className="brands__banner"
          href="/medios-pago/legales-medios-pago"
          aria-label="Lleve con 0% de interés pagando con Tarjetas de Crédito Davivienda"
        >
          <img src={banner} alt="Lleve con 0% de interés pagando con Tarjetas de Crédito Davivienda" />
        </a>
      </div>
    </section>
  );
}
