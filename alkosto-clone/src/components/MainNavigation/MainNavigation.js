import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu";


import { MEGA_MENU_CELULARES } from "../../data/megaMenu.celulares";
import { MEGA_MENU_COMPUTADORES } from "../../data/megaMenu.computadores"; // ✅ NUEVO
import { MEGA_MENU_ELECTRODOMESTICOS } from "../../data/megaMenu.electrodomesticos";
import { MEGA_MENU_TV } from "../../data/megaMenu.tv"; 
import { MEGA_MENU_ACCESORIOS } from "../../data/megaMenu.accesorios";
import { MEGA_MENU_VIDEOJUEGOS } from "../../data/megaMenu.videojuegos";
import { MEGA_MENU_AUDIO } from "../../data/megaMenu.audio";
import { MEGA_MENU_CAMARAS } from "../../data/megaMenu.camaras";
import { MEGA_MENU_PINES } from "../../data/megaMenu.pines";
import { MEGA_MENU_HOGAR } from "../../data/megaMenu.hogar";
import { MEGA_MENU_DEPORTES } from "../../data/megaMenu.deportes";
import { MEGA_MENU_LLANTAS_MOTOS } from "../../data/megaMenu.llantas_motos";
import { MEGA_MENU_JUGUETES } from "../../data/megaMenu.juguetes";
import { MEGA_MENU_OTROS } from "../../data/mehaMenu.otros";
import { MEGA_MENU_NAVIDAD } from "../../data/megaMenu.navidad";
import "./MainNavigation.scss";



const MENU_ITEMS = [
  { id: "celulares", label: "Celulares", mega: MEGA_MENU_CELULARES },
  { id: "computadores", label: "Computadores", mega: MEGA_MENU_COMPUTADORES }, // ✅ con mega
  { id: "electrodomesticos", label: "Electrodomésticos", mega: MEGA_MENU_ELECTRODOMESTICOS },
  { id: "tv", label: "TV", mega: MEGA_MENU_TV }, 
  { id: "accesorios", label: "Accesorios", mega: MEGA_MENU_ACCESORIOS },
  { id: "videojuegos", label: "Videojuegos", mega: MEGA_MENU_VIDEOJUEGOS },
  { id: "audio", label: "Audio", mega: MEGA_MENU_AUDIO },
  { id: "camaras", label: "Cámaras", mega: MEGA_MENU_CAMARAS },
  { id: "pines", label: "Pines", mega: MEGA_MENU_PINES },
  { id: "hogar", label: "Hogar", mega: MEGA_MENU_HOGAR },
  { id: "deportes", label: "Deportes", mega: MEGA_MENU_DEPORTES },
  { id: "llantas-y-motos", label: "Llantas y Motos", mega: MEGA_MENU_LLANTAS_MOTOS },
  { id: "juguetes", label: "Juguetes", mega: MEGA_MENU_JUGUETES },
  { id: "navidad", label: "Navidad", mega: MEGA_MENU_NAVIDAD },
  { id: "otros", label: "Otros", mega: MEGA_MENU_OTROS },
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
