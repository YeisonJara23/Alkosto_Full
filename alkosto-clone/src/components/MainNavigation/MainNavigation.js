import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Importamos el MegaMenu visual
import MegaMenu from "../MegaMenu/MegaMenu";

// ✅ Importamos los datos del Mega Menú desde /data
import { MEGA_MENU_CELULARES } from "../../data/megaMenu.celulares";

import "./MainNavigation.scss";

export default function MainNavigation() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { id: "celulares", label: "Celulares", mega: MEGA_MENU_CELULARES },
    { id: "computadores", label: "Computadores", mega: null },
    { id: "electrodomesticos", label: "Electrodomésticos", mega: null },
    { id: "tv", label: "TV", mega: null },
    { id: "accesorios", label: "Accesorios", mega: null },
    { id: "videojuegos", label: "Videojuegos", mega: null },
    { id: "audio", label: "Audio", mega: null },
    { id: "camaras", label: "Cámaras", mega: null },
    { id: "hogar", label: "Hogar", mega: null },
    { id: "deportes", label: "Deportes", mega: null },
    { id: "llantas", label: "Llantas y Motos", mega: null },
    { id: "juguetes", label: "Juguetes", mega: null },
    { id: "navidad", label: "Navidad", mega: null },
    { id: "otros", label: "Otros", mega: null },
  ];

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="main-nav__item"
            onMouseEnter={() => setOpenMenu(item.id)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link to={`/category/${item.id}`} className="main-nav__link">
              {item.label}
            </Link>

            {item.mega && openMenu === item.id && (
              <MegaMenu item={item.mega} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
