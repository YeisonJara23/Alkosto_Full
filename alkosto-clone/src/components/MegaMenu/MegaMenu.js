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

  // Computadores
  COMPUTADORES_PORTATILES: "/assets/icons/PORTATILES-ICON-AK-2-.png",
  COMPUTADORES_DE_ESCRITORIO_Y_ALL_IN_ONE:
    "/assets/icons/COMPUTADOR-ESCRITORIO-ICON-AK.png",
  ZONA_GAMING: "/assets/icons/ZONA-GAMER-ICON-AK.png",
  ACCESORIOS_Y_COMPLEMENTOS:
    "/assets/icons/ACCESORIOS-COMPUTADORES-ICON-AK.png",
  PORTAFOLIO_EMPRESARIAL: "/assets/icons/COMPUTADOR-ESCRITORIO-ICON-AK.png",
  IMPRESORAS_Y_MULTIFUNCIONALES: "/assets/icons/IMPRESION-ICON-AK.png",
  MONITORES: "/assets/icons/MONITORES-ICON-AK.png",
  PROYECTORES: "/assets/icons/PROYECTORES-ICON-AK.png",
  TINTAS_Y_PAPEL: "/assets/icons/TINTA-PAPEL-ICON-AK.png",

  // Electro
  REFRIGERACION: "/assets/icons/REFRIGERACION-ICON-AK.png",
  LAVADORAS_Y_SECADORAS: "/assets/icons/LAVADO-ICON-AK.png",
  COCINA: "/assets/icons/COCINA-ICON-AK.png",
  PREPARACION_DE_ALIMENTOS: "/assets/icons/PREPARACION-ALIMENTOS-ICON-AK.png",
  CLIMATIZACION: "/assets/icons/CLIMATIZACION-ICON-AK.png",
  CUIDADO_PERSONAL: "/assets/icons/CUIDADO-PERSONAL-ICON-AK.png",
  CUIDADO_DEL_HOGAR: "/assets/icons/CUIDADO-HOGAR-ICON-AK.png",
  OTROS_ELECTROHOGAR: "/assets/icons/OTROS-ELECTROHOGAR-ICON-AK.png",
  ACCESORIOS_Y_REPUESTOS: "/assets/icons/accesorios-AK.png",

  // TV
  TELEVISORES: "/assets/icons/TV-ICON-AK.png",
  COMPLEMENTOS_DE_TV: "/assets/icons/TV-COMPLEMENTOS-ICON-AK.png",
  ACCESORIOS_TV: "/assets/icons/TV-ACCESORIOS-ICON-AK.png",
  NETFLIX_Y_PINES: "/assets/icons/NETFLIX-ICON-AK.png",

    // ===== Videojuegos =====
  CONSOLAS: "/assets/icons/CONSOLAS-ICON-AK.png",
  VIDEOJUEGOS: "/assets/icons/VIDEOJUEGOS-ICON-AK.png",       // si tu archivo se llama distinto, ajusta
  CONTROLES_Y_ACCESORIOS: "/assets/icons/ACCESORIOS-VIDEOJUEGOS-ICON-AK.png",
  MEMBRESIAS_Y_CODIGOS_DIGITALES: "/assets/icons/CODIGOS-DIGITALES-ICON-AK.png",
  PC_GAMING: "/assets/icons/COMPUTADOR-ESCRITORIO-ICON-AK.png", // o ZONA-GAMER-ICON-AK.png si prefieres

  XBOX: "/assets/icons/XBOX-ICON-AK.png",
  PLAY_STATION: "/assets/icons/PLAYSTATION-ICON-AK.png",
  NINTENDO: "/assets/icons/NINTENDO-ICON-AK.png",
  COLECCIONABLES: "/assets/icons/icon-coleccionables-trofeo.png",

    // Cámaras (NUEVOS)
  CAMARAS: "/assets/icons/CAMARAS-ICON-AK.png",
  ACCESORIOS_CAMARAS: "/assets/icons/ACCESORIOS-CAMARAS-ICON-AK.png",
  CAMARAS_DE_SEGURIDAD: "/assets/icons/CAMARAS-SEGURIDAD-ICON-AK.png",
  DRONES: "/assets/icons/DRONES-ICON-AK.png",

    // Pines
  NETFLIX: "/assets/icons/NETFLIX-ICON-AK.png",
  SPOTIFY: "/assets/icons/SPOTIFY-ICON-AK.png",
  PARAMOUNT: "/assets/icons/PARAMOUNT-ICON-AK.png",
  MEMBRESIAS_Y_CODIGOS_DIGITALES: "/assets/icons/CODIGOS-DIGITALES-ICON-AK.png",
  LICENCIAS_SOFTWARE: "/assets/icons/LICENCIAS-SOFTWARE-ICON-AK.png",

  // HOGAR
  MUEBLES: "/assets/icons/HABITACION-ICON-AK.png",
  SILLAS_Y_SOFAS: "/assets/icons/SOFAS-ICON-AK.png",
  COLCHONES: "/assets/icons/COLCHONES-ICON-AK.png",
  BANO: "/assets/icons/BANO-ICON-AK.png",
  COCINA: "/assets/icons/COCINA-ICON-AK.png",
  DECORACION: "/assets/icons/DECORACION-ICON-AK.png",
  MESA_Y_COMPLEMENTOS: "/assets/icons/MESAS-ICON-AK.png",
  ORGANIZACION_Y_ASEO: "/assets/icons/ORGANIZACION-ICON-AK.png",
  EXTERIOR: "/assets/icons/EXTERIOR-ICON-AK.png",

  // DEPORTES
  EJERCICIO_Y_FITNESS: "/assets/icons/EJERCICIO-FITNES-ICON-AK.png",
  MOVILIDAD: "/assets/icons/MOVILIDAD-ICON-AK.png",
  BICICLETAS: "/assets/icons/bici.png",
  ACCESORIOS_DEPORTIVOS: "/assets/icons/ACCESORIOS-DEPORTIVOS-ICON-AK.png",
  SALUD_Y_BIENESTAR: "/assets/icons/SALUD-BIENESTAR-AK.png",
  SMARTWATCH: "/assets/icons/ICONO-SMARTWATCH-AK.png",

  // LLANTAS Y MOTOS
  LLANTAS: "/assets/icons/LLANTAS-ICON-AK.png",
  BUSCA_TU_LLANTA: "/assets/icons/LLANTAS-ICON-AK.png", // (no hay icono dedicado; reutilizo)
  ACCESORIOS_PARA_AUTO: "/assets/icons/CAR-AUDIO-ICON-AK.png",
  BATERIAS: "/assets/icons/baterias-icon.png",
  ACCESORIOS_PARA_MOTOS: "/assets/icons/MOTOS-ICON-AK.png",
  MOTOS: "/assets/icons/MOTOS-ICON-AK.png",
  LIMPIEZA: "/assets/icons/limpieza-icono-AK.png",
  INSTALACION_DE_LLANTAS: "/assets/icons/AK-ICON-INSTALACIONES.png",

  // JUGUETES
  JUEGOS_DE_MESA_Y_ROMPECABEZAS: "/assets/icons/juegos-mesa-rompecabezas.png",
  MUNECAS_Y_SUS_ACCESORIOS: "/assets/icons/icon-mu-ecas.png",
  JUGUETES_BEBE: "/assets/icons/icon-bebes.png",
  JUEGOS_DE_ROL: "/assets/icons/juegos-rol.png",
  JUEGOS_Y_DEPORTES_EXTERIOR: "/assets/icons/juegos-exterior.png",
  PISTAS_Y_CARROS: "/assets/icons/icon-pistas-carros.png",
  COLECCIONABLES: "/assets/icons/icon-coleccionables-trofeo.png",
  FIGURAS_DE_ACCION: "/assets/icons/figuras-accion.png",
  LEGO_Y_BLOQUES_DE_ARMAR: "/assets/icons/lego.png",
  OTROS_JUGUETES: "/assets/icons/otros-juguetes.png",



  // OTROS
  ROPA: "/assets/icons/ICONO-ROPA.png",
  MERCADO: "/assets/icons/AK-ICON-OTROS.png",                // (no hay icono de 'mercado'; reutilizo)
  SEGUROS: "/assets/icons/AK-ICON-SEGUROS.png",
  INSTALACIONES_Y_MANTENIMIENTO: "/assets/icons/AK-ICON-INSTALACIONES.png",
  BIENESTAR_Y_SALUD: "/assets/icons/SALUD-BIENESTAR-AK.png",
};

// Normaliza: sin acentos, mayúsculas y con guiones bajos
const norm = (str = "") =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/\s+/g, "_");

const resolveIcon = (title, explicitIcon) => {
  if (explicitIcon) return explicitIcon; // permite override por columna
  const key = norm(title);
  return ICONS[key] || null;
};

export default function MegaMenu({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mega">
      <div className="mega__inner">
        {data.map((col, colIndex) => {
          const colIcon = resolveIcon(col?.title || "", col?.icon);

          return (
            <div key={`col-${colIndex}`} className="mega__col">
              <h4 className="mega__title">
                {colIcon && (
                  <img
                    src={colIcon}
                    alt={col?.title || ""}
                    className="mega__icon"
                    loading="eager"
                  />
                )}
                {col?.title}
              </h4>

              <div className="mega__blocks">
                {(col?.sections || []).map((sec, secIndex) => {
                  const secName = sec?.name || "";
                  const secKey = norm(secName);
                  const secIcon =
                    sec?.icon ||
                    (secKey === "MUNDO_APPLE" ? ICONS.MUNDO_APPLE : null);

                  return (
                    <div key={`sec-${colIndex}-${secIndex}`} className="mega__block">
                      {secName && (
                        <div className="mega__block-title">
                          {secIcon && (
                            <img
                              src={secIcon}
                              alt={secName}
                              className="mega__block-icon"
                              loading="eager"
                            />
                          )}
                          {secName}
                        </div>
                      )}

                      {Array.isArray(sec?.items) && sec.items.length > 0 && (
                        <ul className="mega__list">
                          {sec.items.map((it, itemIndex) => {
                            // Permite string o {label, em, href}
                            const item =
                              typeof it === "string" ? { label: it } : it || {};
                            const { label = "", em = false, href = "#" } = item;

                            return (
                              <li key={`item-${colIndex}-${secIndex}-${itemIndex}`}>
                                <a
                                  href={href}
                                  className={`mega__link ${em ? "mega__link--em" : ""}`}
                                >
                                  {label}
                                </a>
                              </li>
                            );
                          })}
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
