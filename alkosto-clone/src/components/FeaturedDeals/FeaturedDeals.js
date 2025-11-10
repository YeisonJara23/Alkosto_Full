import React from "react";
import "./FeaturedDeals.scss";

/**
 * Usa directamente tus archivos:
 * /images/deals/deal1.webp, deal2.webp, deal3.webp
 */
const DEFAULT_DEALS = [
  { src: "/images/deals/deal2.webp", alt: "Portátil LENOVO 15.3”", href: "#" },
  { src: "/images/deals/deal1.webp", alt: "iPhone 13",             href: "#" },
  { src: "/images/deals/deal3.webp", alt: "AirPods Pro 2",         href: "#" },
];

export default function FeaturedDeals({ title = "Ofertas destacadas", deals = DEFAULT_DEALS }) {
  return (
    <section className="featured-deals">
      <div className="featured-deals__container">
        <h2 className="featured-deals__title">{title}</h2>

        <div className="deals-grid">
          {deals.map((d, i) => (
            <article className="deal-card" key={i}>
              <a href={d.href} aria-label={d.alt}>
                <img src={d.src} alt={d.alt} loading="lazy" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
