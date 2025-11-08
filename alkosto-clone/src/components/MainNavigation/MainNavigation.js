import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu";
import { MEGA_MENU_CELULARES } from "../../data/megaMenu.celulares";
import "./MainNavigation.scss";

export default function MainNavigation() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { id: "celulares", label: "Celulares", mega: MEGA_MENU_CELULARES },
    { id: "computadores", label: "Computadores" },
    { id: "electrodomesticos", label: "Electrodomésticos" },
    { id: "tv", label: "TV" },
    { id: "accesorios", label: "Accesorios" },
    { id: "videojuegos", label: "Videojuegos" },
    { id: "audio", label: "Audio" },
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
              <MegaMenu data={item.mega} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
