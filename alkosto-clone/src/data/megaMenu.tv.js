// src/data/megaMenu.tv.js
export const MEGA_MENU_TV = [
  {
    title: "Televisores",
    icon: "/assets/icons/TV-ICON-AK.png", // (tienes también TV-ICON-AK.png)
    sections: [
      {
        name: "Tamaño de pantalla (Pulgadas)",
        items: [
          '10" a 32"',
          '40" a 49"',
          '50" a 59"',
          '60" a 75"',
          '76" y más',
        ],
      },
      {
        name: "Marca",
        items: [
          "LG",
          "Epson",
          "Samsung",
          "VTA",
          "Predator",
          "Kalley",
          "Acer",
        ],
      },
      {
        name: "Tipo de Pantalla",
        items: ["LED", "OLED", "QLED-QNED", "Mini LED"],
      },
      {
        name: "Resolución",
        items: ["HD", "Full HD", "4k", "UHD", "8k"],
      },
      {
        name: "Sistema Operativo",
        items: ["Android TV", "Google TV", "Tizen", "webOS", "Roku TV"],
      },
      {
        name: "Características Especiales",
        items: ["Lifestyle", "Zona Gamer y TV"],
      },
    ],
  },

  {
    title: "Proyectores",
    icon: "/assets/icons/PROYECTORES-ICON-AK.png",
    sections: [
      { name: "Marca", items: ["LG", "Epson", "Samsung", "VTA", "Predator", "Kalley", "Acer"] },
      {
        name: "Tipo de Uso",
        items: ["Hogar", "Empresarial"],
      },
      {
        name: "Resolución de Imagen",
        items: ["Full HD", "4K", "HD", "WXGA", "XGA"],
      },
      {
        name: "Tecnología de Visualización",
        items: ["LCD", "LED", "DLP"],
      },
    ],
  },

  {
    title: "Complementos de Tv",
    icon: "/assets/icons/TV-COMPLEMENTOS-ICON-AK.png",
    sections: [
      { name: "Barras de Sonido" },
      { name: "Reproductores de Contenido", items: ["Apple", "Roku"] },
      { name: "Instalaciones", items: ["Instalación TV"] },
    ],
  },

  {
    title: "Accesorios TV",
    icon: "/assets/icons/TV-ACCESORIOS-ICON-AK.png",
    sections: [
      { name: "Bases y Soportes TV" },
      { name: "Antenas" },
      { name: "Cables" },
      { name: "Regulador, UPS y Multitoma" },
      {
        name: "Reproductores",
        items: [
          "Apple",
          "Roku",
          "Reproductores de Contenido Digital",
        ],
      },
    ],
  },

  {
    title: "Netflix y Pines",
    icon: "/assets/icons/NETFLIX-ICON-AK.png",
    sections: [
      {
        name: "Netflix",
        items: ["$20.000", "$30.000", "$35.000", "$40.000", "$50.000"],
      },
      {
        name: "Paramount",
        items: ["1 Mes", "3 Meses"],
      },
    ],
  },
];
