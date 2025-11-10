import React, { useRef, useEffect, useState } from "react";
import "./NavidadDecor.scss";

/**
 * Props:
 * - videoSrc: ruta del mp4 en /public
 * - poster:   imagen para el poster del video
 * - items:    [{img, title, old, price, off, href}]
 */
export default function NavidadDecor({
  videoSrc = "/images/banners/navidad.mp4",
  poster = "/images/banners/imagen2.webp",
  items = [
    {
      img: "/images/banners/imagen1.webp",
      title: "Muñeco Navideño JOY Reno mediano",
      old: "$119.900",
      price: "$71.940",
      off: "40%",
      href: "#",
    },
    {
      img: "/images/banners/imagen2.webp",
      title: "Duvet/Edredón navideño JOY doble",
      old: "$199.800",
      price: "$99.900",
      off: "50%",
      href: "#",
    },
    {
      img: "/images/banners/imagen3.webp",
      title: "Árbol de Navidad JOY 180 cm",
      old: "$489.900",
      price: "$293.940",
      off: "40%",
      href: "#",
    },
    {
      img: "/images/banners/imagen4.webp",
      title: "Manta navideña JOY Pino 130×170",
      old: "$119.800",
      price: "$59.900",
      off: "50%",
      href: "#",
    },
  ],
}) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    const calc = () => {
      if (!el) return;
      const p = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
      setPages(p);
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    calc();
    window.addEventListener("resize", calc);
    const onScroll = () =>
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", calc);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="navidad-decor" aria-label="Todo para decorar en navidad">
      <div className="navidad-decor__container">
        {/* Encabezado */}
        <header className="navidad-decor__head">
          <span className="ornament">✦</span>
          <h2>¡Todo para decorar en navidad!</h2>
          <span className="promo">
            HASTA <b>50%</b> DTO
          </span>
          <span className="ornament">✦</span>
        </header>

        <div className="navidad-decor__content">
          {/* Video a la izquierda */}
          <div className="video-tile">
            <video
              src={videoSrc}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              aria-label="Navidad en Alkosto"
            />
            <a className="video-cta" href="#">
              Conoce la Navidad Tradicional y Nevada en Alkosto 🎄
            </a>
          </div>

          {/* Carrusel de productos */}
          <div className="slider">
            <button
              className="arrow prev"
              onClick={() => go(-1)}
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="track" ref={trackRef}>
              {items.map((it, idx) => (
                <article className="p-card" key={idx}>
                  <a href={it.href}>
                    <div className="imgbox">
                      <img src={it.img} alt={it.title} loading="lazy" />
                    </div>
                    <h3 className="title">{it.title}</h3>

                    <div className="prices">
                      <span className="old">{it.old}</span>
                      <span className="off">{it.off}</span>
                    </div>
                    <div className="price-today">
                      <span className="today">Hoy</span>
                      <span className="price">{it.price}</span>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <button
              className="arrow next"
              onClick={() => go(1)}
              aria-label="Siguiente"
            >
              ›
            </button>

            {pages > 1 && (
              <div className="dots" role="tablist" aria-label="Paginación">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={page === i}
                    className={`dot ${page === i ? "active" : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
