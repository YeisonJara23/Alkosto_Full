import React from "react";
import "./WideBanner.scss";

/**
 * Muestra un banner ancho.
 * Usa directamente la ruta del archivo (p.ej. /images/banners/cama.webp)
 */
export default function WideBanner({
  src = "/images/banners/cama.webp",
  alt = "Promoción",
  href = "#",
}) {
  return (
    <section className="wide-banner">
      <div className="wide-banner__container">
        <a className="wide-banner__link" href={href} aria-label={alt}>
          <img src={src} alt={alt} loading="eager" />
        </a>
      </div>
    </section>
  );
}
