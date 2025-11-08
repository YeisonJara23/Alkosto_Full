import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu";


import { MEGA_MENU_CELULARES } from "../../data/megaMenu.celulares";
import { MEGA_MENU_COMPUTADORES } from "../../data/megaMenu.computadores"; // ✅ NUEVO
import { MEGA_MENU_ELECTRODOMESTICOS } from "../../data/megaMenu.electrodomesticos";
import { MEGA_MENU_TV } from "../../data/megaMenu.tv"; 
import "./MainNavigation.scss";

const MENU_ITEMS = [
  { id: "celulares", label: "Celulares", mega: MEGA_MENU_CELULARES },
  { id: "computadores", label: "Computadores", mega: MEGA_MENU_COMPUTADORES }, // ✅ con mega
  { id: "electrodomesticos", label: "Electrodomésticos", mega: MEGA_MENU_ELECTRODOMESTICOS },
  { id: "tv", label: "TV", mega: MEGA_MENU_TV }, 
  { id: "accesorios", label: "Accesorios" },
  { id: "videojuegos", label: "Videojuegos" },
  { id: "audio", label: "Audio" },
  { id: "camaras", label: "Cámaras" },
  { id: "pines", label: "Pines" },
  { id: "hogar", label: "Hogar" },
  { id: "deportes", label: "Deportes" },
  { id: "llantas-y-motos", label: "Llantas y Motos" },
  { id: "juguetes", label: "Juguetes" },
  { id: "navidad", label: "Navidad", featured: true },
  { id: "otros", label: "Otros" },
];

export default function MainNavigation() {
  const [openMenu, setOpenMenu] = useState(null);
  const activeItem = MENU_ITEMS.find((i) => i.id === openMenu);

  return (
    <nav
      className="main-nav"
      onMouseLeave={() => setOpenMenu(null)}   // cierra al salir del nav + mega
    >
      <div className="main-nav__container">
        <ul className="main-nav__list" role="menubar" aria-label="Categorías">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`main-nav__item ${item.featured ? "is-featured" : ""}`}
              onMouseEnter={() => item.mega && setOpenMenu(item.id)} // abre mega si existe
              role="none"
            >
              <NavLink
                to={`/category/${item.id}`}
                className={({ isActive }) =>
                  `main-nav__link ${isActive ? "is-active" : ""}`
                }
                role="menuitem"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* MegaMenu ancho completo, pegado al nav */}
      {activeItem?.mega && (
        <div
          className="mega-holder"
          onMouseEnter={() => {/* mantener abierto */}}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <MegaMenu data={activeItem.mega} />
        </div>
      )}
    </nav>
  );
}
