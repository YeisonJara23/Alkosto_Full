import React from "react";
import "./FooterDark.scss";

export default function FooterDark() {
  return (
    <footer className="footer-dark">
      {/* 1) Fila superior: Sobre nosotros / Email / Venta telefónica */}
      <div className="container footer-dark__head">
        <div className="footer-dark__head-col">
          <h5>Sobre Nosotros</h5>
          <p>
            Colombiana de Comercio S.A.
            <br />
            NIT: 890.900.943-1
            <br />
            Dirección de notificación judicial: Calle 11 No. 31 A — 42 - Bogotá.
          </p>
        </div>

        <div className="footer-dark__head-col">
          <h5>Email</h5>
          <p>
            <a href="mailto:sugerencias@alkosto.com">sugerencias@alkosto.com</a>
          </p>
        </div>

        <div className="footer-dark__head-col">
          <h5>Venta telefónica</h5>
          <p>
            <strong>Servicio al cliente:</strong> (601) 407 3033
            <br />
            <strong>Venta:</strong> (601) 384 9734 - (601) 746 8001 - 018000 180222
          </p>
        </div>
      </div>

      <div className="footer-dark__divider" />

      {/* 2) Grilla de enlaces (5 columnas) */}
      <div className="container footer-dark__links">
        <div className="footer-dark__block">
          <h4>Nuestra Compañía</h4>
          <ul>
            <li><a href="/quienes-somos">Quiénes somos</a></li>
            <li><a href="/tiendas">Nuestras tiendas</a></li>
            <li><a href="/marcas">Nuestras marcas</a></li>
            <li><a href="/contactenos">Contáctenos</a></li>
            <li><a href="/trabaja-con-nosotros">Trabaja con nosotros</a></li>
            <li><a href="/tarjeta-alkosto">Tarjeta de crédito Alkosto</a></li>
            <li><a href="/certificados-tributarios">Certificados tributarios</a></li>
            <li><a href="/rifas">Rifas</a></li>
            <li><a href="/fondo-empleados">Fondo de empleados y cooperativas</a></li>
            <li><a href="/codigo-etica">Código de ética</a></li>
            <li><a href="/sst-terceros">Manual de normas SST para Terceros</a></li>
          </ul>
        </div>

        <div className="footer-dark__block">
          <h4>Compras en línea</h4>
          <ul>
            <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
            <li><a href="/pago-seguro">Pago seguro</a></li>
            <li><a href="/envios">Métodos de envío</a></li>
            <li><a href="/medios-de-pago">Medios de pago</a></li>
            <li><a href="/compra-b2b">Proceso de Compra B2B</a></li>
            <li><a href="/seguros">Seguros</a></li>
          </ul>
        </div>

        <div className="footer-dark__block">
          <h4>Servicios</h4>
          <ul>
            <li><a href="/instalaciones">Instalaciones</a></li>
            <li><a href="/servicio-instalacion">Agendar servicio de instalación</a></li>
            <li><a href="/garantia-extendida">Garantía extendida</a></li>
            <li><a href="/servicios-tecnico">Garantías y centros de servicios técnico</a></li>
            <li><a href="/instalacion-llantas">Instalación de Llantas</a></li>
            <li><a href="/consulta-factura">Consulta tu factura</a></li>
          </ul>
        </div>

        <div className="footer-dark__block">
          <h4>Políticas</h4>
          <ul>
            <li><a href="/politicas/canal-digital">Términos y condiciones del canal digital</a></li>
            <li><a href="/politicas/compra-en-linea">Contrato de compraventa en línea</a></li>
            <li><a href="/politicas/privacidad">Política de privacidad</a></li>
            <li><a href="/politicas/datos-personales">Solicitud tratamiento de datos personales</a></li>
            <li><a href="/politicas/cookies">Política de cookies</a></li>
            <li><a href="/politicas/cambios-devoluciones">Política de cambios y devoluciones</a></li>
            <li><a href="/politicas/linea-etica">Línea ética</a></li>
          </ul>
        </div>

        <div className="footer-dark__block">
          <h4>Legales</h4>
          <ul>
            <li><a href="/legales/tv-digital">Todo lo que debes saber sobre televisión digital terrestre</a></li>
            <li><a href="/legales/sic">Superintendencia de Industria y Comercio - SIC</a></li>
            <li><a href="/legales/medios-de-pago">Términos y Condiciones Ofertas de Medios de pago</a></li>
          </ul>
        </div>
      </div>

      {/* 3) Copyright inferior */}
      <div className="footer-dark__copy">
        <div className="container">
          © 2024 Alkosto. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
