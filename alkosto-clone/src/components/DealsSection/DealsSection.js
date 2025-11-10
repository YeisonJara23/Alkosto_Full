import React from "react";
import "./DealsSection.scss";

/**
 * Props:
 * - title: string
 * - viewAllHref: string (link "Ver todo")
 * - deals: Array<{ src: string; alt?: string; href?: string }>
 */
export default function DealsSection({ title, viewAllHref = "#", deals = [] }) {
  return (
    <section className="deals-section">
      <div className="deals-section__container">
        <header className="deals-section__header">
          <h2>{title}</h2>
          <a className="view-all" href={viewAllHref}>Ver todo</a>
        </header>

        <div className="deals-grid">
          {deals.map((d, i) => (
            <article className="deal-card" key={i}>
              <a href={d.href || "#"} aria-label={d.alt || `Oferta ${i + 1}`}>
                <img src={d.src} alt={d.alt || ""} loading="lazy" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
