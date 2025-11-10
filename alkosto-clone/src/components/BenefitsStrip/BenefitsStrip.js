import React from "react";
import "./BenefitsStrip.scss";

/**
 * Las rutas de iconos son absolutas desde /public
 * /public/assets/icons/benefits/*.svg  =>  /assets/icons/benefits/*.svg
 */
const DEFAULT_ITEMS = [
  {
    icon: "/assets/icons/benefits/cambios.avif",
    text: "Participa por la mitad de tu compra",
    href: "#",
  },
  {
    icon: "/assets/icons/benefits/colombia.avif",
    text: "Envío gratis a 900 municipios",
    href: "#",
  },
  {
    icon: "/assets/icons/benefits/gana-50.avif",
    text: "30 días para cambios y devoluciones",
    href: "#",
  },
  {
    icon: "/assets/icons/benefits/seguro-celulares.avif",
    text: "Seguro gratis en celulares",
    href: "#",
  },
];

export default function BenefitsStrip({ items = DEFAULT_ITEMS }) {
  return (
    <section className="benefits-strip" aria-label="Beneficios principales">
      <div className="benefits-strip__container">
        <ul className="benefits-box">
          {items.map((it, i) => (
            <li className="benefits-item" key={i}>
              <a href={it.href}>
                <img src={it.icon} alt="" aria-hidden="true" />
                <span>{it.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
