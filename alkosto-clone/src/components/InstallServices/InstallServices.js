import React from "react";
import "./InstallServices.scss";

const services = [
  { img: "/images/install/tv.webp", title: "Instalaciones para", strong: "Televisores", href: "#" },
  { img: "/images/install/muebles.webp", title: "Instalaciones para", strong: "Muebles", href: "#" },
  { img: "/images/install/electrohogar.webp", title: "Instalaciones para", strong: "Electrodomésticos", href: "#" },
  { img: "/images/install/aires.webp", title: "Instalaciones para", strong: "Calentadores & aires", href: "#" },
];

export default function InstallServices() {
  return (
    <section className="install">
      <div className="container">
        <div className="install__head">
          <h2>Descubre nuestros servicios de instalación</h2>
          <a className="link" href="#">Ver todo</a>
        </div>

        <div className="install__grid">
          {services.map((s, i) => (
            <a key={i} href={s.href} className="install-card">
              <div className="install-card__left">
                <img src={s.img} alt={s.strong} />
              </div>
              <div className="install-card__txt">
                <span className="muted">{s.title}</span>
                <strong>{s.strong}</strong>
              </div>
              <span className="chev">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
