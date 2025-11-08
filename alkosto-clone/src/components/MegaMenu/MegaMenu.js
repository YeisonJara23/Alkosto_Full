import React from "react";
import "./MegaMenu.scss";

/**
 * Mapa de iconos por título de columna (normalizado).
 * Ajusta la ruta si el nombre de archivo difiere.
 * Las rutas son relativas a /public (sirven tal cual en <img src="/assets/...">).
 */
const ICONS = {
  // Celulares
  CELULARES: "/assets/icons/ICONO-CELULAR-AK.png",
  TABLETAS: "/assets/icons/ICONO-TABLET-AK.png",
  SMARTWATCH: "/assets/icons/ICONO-SMARTWATCH-AK.png",
  ACCESORIOS_CELULARES_Y_TABLETAS: "/assets/icons/ICONO-ACCESORIOS-AK.png",
  CONOCE_MAS: "/assets/icons/ICONO-CONOCE-MAS-AK.png",
  MUNDO_APPLE: "/assets/icons/mundo-apple-ak.png",

  // Computadores (según tu carpeta)
  COMPUTADORES_PORTATILES: "/assets/icons/PORTATILES-ICON-AK-2-.png",
  COMPUTADORES_DE_ESCRITORIO_Y_ALL_IN_ONE: "/assets/icons/COMPUTADOR-ESCRITORIO-ICON-AK.png",
  ZONA_GAMING: "/assets/icons/ZONA-GAMER-ICON-AK.png",
  ACCESORIOS_Y_COMPLEMENTOS: "/assets/icons/ACCESORIOS-COMPUTADORES-ICON-AK.png",
  PORTAFOLIO_EMPRESARIAL: "/assets/icons/COMPUTADOR-ESCRITORIO-ICON-AK.png", // o el que prefieras
  IMPRESORAS_Y_MULTIFUNCIONALES: "/assets/icons/IMPRESION-ICON-AK.png",
  MONITORES: "/assets/icons/MONITORES-ICON-AK.png",
  PROYECTORES: "/assets/icons/PROYECTORES-ICON-AK.png",
  TINTAS_Y_PAPEL: "/assets/icons/TINTA-PAPEL-ICON-AK.png",

  REFRIGERACION: "/assets/icons/REFRIGERACION-ICON-AK.png",
  LAVADORAS_Y_SECADORAS: "/assets/icons/LAVADO-ICON-AK.png",
  COCINA: "/assets/icons/COCINA-ICON-AK.png",
  PREPARACION_DE_ALIMENTOS: "/assets/icons/PREPARACION-ALIMENTOS-ICON-AK.png",
  CLIMATIZACION: "/assets/icons/CLIMATIZACION-ICON-AK.png",
  CUIDADO_PERSONAL: "/assets/icons/CUIDADO-PERSONAL-ICON-AK.png",
  CUIDADO_DEL_HOGAR: "/assets/icons/CUIDADO-HOGAR-ICON-AK.png",
  OTROS_ELECTROHOGAR: "/assets/icons/OTROS-ELECTROHOGAR-ICON-AK.png",
  ACCESORIOS_Y_REPUESTOS: "/assets/icons/accesorios-ak.png",
};

// Normaliza: sin acentos, mayúsculas y con guiones bajos
const norm = (str = "") =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/\s+/g, "_");

const resolveIcon = (title, explicitIcon) => {
  if (explicitIcon) return explicitIcon;               // permite override por columna
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
                  // Icono opcional por bloque; ejemplo para "Mundo Apple"
                  const secKey = norm(sec?.name || "");
                  const secIcon =
                    sec?.icon ||
                    (secKey === "MUNDO_APPLE" ? ICONS.MUNDO_APPLE : null);

                  return (
                    <div key={secIndex} className="mega__block">
                      {sec?.name && (
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
                      )}

                      {Array.isArray(sec?.items) && sec.items.length > 0 && (
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
