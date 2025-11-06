// src/data/megaMenu.celulares.js
// Data para el mega-menú de "Celulares". Puedes ajustar nombres/links.

export const MEGA_MENU_CELULARES = {
  id: "celulares",
  label: "Celulares",
  // columnas completas del panel
  columns: [
    {
      // Columna "Celulares" con sub-bloques
      type: "sectioned",
      title: "Celulares",
      blocks: [
        {
          title: "Marca",
          links: [
            { label: "iPhone", to: "/category/celulares?brand=apple" },
            { label: "Samsung", to: "/category/celulares?brand=samsung" },
            { label: "Xiaomi", to: "/category/celulares?brand=xiaomi" },
            { label: "Motorola", to: "/category/celulares?brand=motorola" },
            { label: "Vivo", to: "/category/celulares?brand=vivo" },
            { label: "Oppo", to: "/category/celulares?brand=oppo" },
            { label: "Realme", to: "/category/celulares?brand=realme" },
            { label: "ZTE", to: "/category/celulares?brand=zte" },
            { label: "TCL", to: "/category/celulares?brand=tcl" },
            { label: "Kalley", to: "/category/celulares?brand=kalley" },
            { label: "Huawei", to: "/category/celulares?brand=huawei" },
            { label: "Honor", to: "/category/celulares?brand=honor" },
            { label: "Tecno", to: "/category/celulares?brand=tecno" },
            { label: "Infinix", to: "/category/celulares?brand=infinix" },
            { label: "Poco", to: "/category/celulares?brand=poco" },
          ],
        },
        {
          title: "Capacidad de almacenamiento",
          links: [
            { label: "64 GB", to: "/category/celulares?storage=64" },
            { label: "128 GB", to: "/category/celulares?storage=128" },
            { label: "256 GB", to: "/category/celulares?storage=256" },
            { label: "512 GB", to: "/category/celulares?storage=512" },
          ],
        },
        {
          title: "Memoria RAM",
          links: [
            { label: "2 GB", to: "/category/celulares?ram=2" },
            { label: "3 GB", to: "/category/celulares?ram=3" },
            { label: "4 GB", to: "/category/celulares?ram=4" },
            { label: "6 GB", to: "/category/celulares?ram=6" },
            { label: "8 GB", to: "/category/celulares?ram=8" },
            { label: "12 GB", to: "/category/celulares?ram=12" },
          ],
        },
        {
          title: "Inteligencia Artificial",
          links: [{ label: "Celulares con IA", to: "/category/celulares?ai=true" }],
        },
        {
          title: "Mundo Apple",
          links: [
            { label: "Accesorios Apple", to: "/category/accesorios?apple=true" },
            { label: "Compara los modelos de iPhone", to: "/compare/iphone" },
            { label: "Compara los modelos de iPad", to: "/compare/ipad" },
            { label: "Compara los modelos de Apple Watch", to: "/compare/apple-watch" },
          ],
        },
      ],
    },

    // Columna 2: Tabletas
    {
      type: "list",
      title: "Tabletas",
      links: [
        { label: "iPad", to: "/category/tablets?brand=apple" },
        { label: "Android", to: "/category/tablets?os=android" },
        { label: "Accesorios", to: "/category/accesorios?type=tablets" },
      ],
    },

    // Columna 3: Smartwatch
    {
      type: "list",
      title: "Smartwatch",
      links: [
        { label: "Relojes", to: "/category/wearables?type=reloj" },
        { label: "Bandas de Actividad", to: "/category/wearables?type=banda" },
        { label: "Marca", to: "/category/wearables" },
        { label: "Apple Watch", to: "/category/wearables?brand=apple" },
        { label: "Huawei", to: "/category/wearables?brand=huawei" },
        { label: "Samsung", to: "/category/wearables?brand=samsung" },
        { label: "Xiaomi", to: "/category/wearables?brand=xiaomi" },
        { label: "Kalley", to: "/category/wearables?brand=kalley" },
        { label: "Multitech", to: "/category/wearables?brand=multitech" },
        { label: "Essens", to: "/category/wearables?brand=essens" },
      ],
    },

    // Columna 4: Accesorios Celulares y Tabletas
    {
      type: "list",
      title: "Accesorios Celulares y Tabletas",
      links: [
        { label: "Cables, Cargadores, Adaptadores", to: "/category/accesorios?grupo=cables" },
        { label: "Carcasas y estuches", to: "/category/accesorios?grupo=estuches" },
        { label: "Audífonos y manos libres", to: "/category/accesorios?grupo=audifonos" },
        { label: "Memorias Micro SD", to: "/category/accesorios?grupo=microsd" },
        { label: "Baterías externas Power Bank", to: "/category/accesorios?grupo=powerbank" },
        { label: "Bases y Soportes", to: "/category/accesorios?grupo=soportes" },
        { label: "Otros Accesorios", to: "/category/accesorios" },
      ],
    },

    // Columna 5: Conoce más
    {
      type: "list",
      title: "Conoce más",
      links: [
        { label: "Seguro Gratis Celulares", to: "/info/seguro-celulares" },
        { label: "Plan Retoma", to: "/info/plan-retoma" },
        { label: "Guía de compra", to: "/guias/celulares" },
        { label: "Celulares Baratos", to: "/promos/celulares-baratos" },
        { label: "Lanzamientos Celulares", to: "/lanzamientos/celulares" },
        { label: "SIM Cards", to: "/category/simcards" },
      ],
    },
  ],
};
