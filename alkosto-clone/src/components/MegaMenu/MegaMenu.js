import React from "react";
import "./MegaMenu.scss";

/**
 * Mapa de iconos por título de columna.
 * Usamos claves normalizadas para evitar problemas con acentos/espacios.
 */
const ICONS = {
  CELULARES: "/assets/icons/ICONO-CELULAR-AK.png",
  TABLETAS: "/assets/icons/ICONO-TABLET-AK.png",
  SMARTWATCH: "/assets/icons/ICONO-SMARTWATCH-AK.png",
  ACCESORIOS_CELULARES_Y_TABLETAS: "/assets/icons/ICONO-ACCESORIOS-AK.png",
  CONOCE_MAS: "/assets/icons/ICONO-CONOCE-MAS-AK.png",
  MUNDO_APPLE: "/assets/icons/mundo-apple-ak.png",
};

// Normaliza títulos: sin acentos, mayúsculas y con guiones bajos
const norm = (str = "") =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/\s+/g, "_");

const resolveIcon = (title, explicitIcon) => {
  if (explicitIcon) return explicitIcon;
  const key = norm(title);
  return ICONS[key] || null;
};

export default function MegaMenu({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mega">
      <div className="mega__inner">
        {data.map((col, colIndex) => {
          const colIcon = resolveIcon(col.title, col.icon);

          return (
            <div key={colIndex} className="mega__col">
              <h4 className="mega__title">
                {colIcon && (
                  <img
                    src={colIcon}
                    alt={col.title}
                    className="mega__icon"
                    loading="eager"
                  />
                )}
                {col.title}
              </h4>

              <div className="mega__blocks">
                {col.sections?.map((sec, secIndex) => {
                  // Icono opcional para bloques (ej: Mundo Apple)
                  const secIcon =
                    sec.icon || (norm(sec.name) === "MUNDO_APPLE" ? ICONS.MUNDO_APPLE : null);

                  return (
                    <div key={secIndex} className="mega__block">
                      <div className="mega__block-title">
                        {secIcon && (
                          <img
                            src={secIcon}
                            alt={sec.name}
                            className="mega__block-icon"
                            loading="eager"
                          />
                        )}
                        {sec.name}
                      </div>

                      {Array.isArray(sec.items) && sec.items.length > 0 && (
                        <ul className="mega__list">
                          {sec.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href="#" className="mega__link">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
