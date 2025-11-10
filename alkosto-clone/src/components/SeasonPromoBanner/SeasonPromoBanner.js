import React from "react";
import "./SeasonPromoBanner.scss";

export default function SeasonPromoBanner({
  src = "/images/banners/oferta.webp",
  alt = "Ofertas especiales",
  href = "#",
}) {
  return (
    <section className="season-banner">
      <div className="season-banner__container">
        <a className="season-banner__link" href={href} aria-label={alt}>
          <img src={src} alt={alt} loading="lazy" />
        </a>
      </div>
    </section>
  );
}
