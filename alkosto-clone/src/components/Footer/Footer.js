import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      {/* zona superior con 4 columnas */}
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Alkosto */}
          <div className="footer__block">
            <h4 className="footer__title">Alkosto</h4>
            <ul className="footer__list">
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/tiendas">Nuestras Tiendas</a></li>
              <li><a href="/trabaja-con-nosotros">Trabaja con Nosotros</a></li>
              <li><a href="/contactenos">Contáctenos</a></li>
            </ul>

            <div className="footer__social">
              <a aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="/assets/icons/social/facebook.svg" alt="" />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="/assets/icons/social/instagram.svg" alt="" />
              </a>
              <a aria-label="YouTube" href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src="/assets/icons/social/youtube.svg" alt="" />
              </a>
              <a aria-label="TikTok" href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                <img src="/assets/icons/social/tiktok.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Servicio al Cliente */}
          <div className="footer__block">
            <h4 className="footer__title">Servicio al Cliente</h4>
            <ul className="footer__list">
              <li><a href="/garantias">Garantías</a></li>
              <li><a href="/devoluciones">Devoluciones</a></li>
              <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
              <li><a href="/terminos-y-condiciones">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Medios de Pago */}
          <div className="footer__block">
            <h4 className="footer__title">Medios de Pago</h4>
            <div className="footer__payments">
              <img src="/assets/icons/payments/mastercard.svg" alt="Mastercard" />
              <img src="/assets/icons/payments/visa.svg" alt="VISA" />
              <img src="/assets/icons/payments/diners.svg" alt="Diners Club" />
              <img src="/assets/icons/payments/amex.svg" alt="American Express" />
              <img src="/assets/icons/payments/pse.svg" alt="PSE" />
              <img src="/assets/icons/payments/nequi.svg" alt="Nequi" />
              <img src="/assets/icons/payments/daviplata.svg" alt="Daviplata" />
              <img src="/assets/icons/payments/addi.svg" alt="Addi" />
              <img src="/assets/icons/payments/bancolombia.svg" alt="Bancolombia" />
              <img src="/assets/icons/payments/efecty.svg" alt="Efecty" />
              <img src="/assets/icons/payments/surered.svg" alt="Su Red" />
              <img src="/assets/icons/payments/brilla.svg" alt="Brilla" />
            </div>
            <a className="footer__link" href="/medios-de-pago">
              Ver todos los medios de pago
            </a>
          </div>

          {/* Contáctanos */}
          <div className="footer__block">
            <h4 className="footer__title">Contáctanos</h4>
            <ul className="footer__contact">
              <li>
                <span className="i i-phone" aria-hidden="true" />
                <span>Venta: (601) 746 8001</span>
              </li>
              <li>
                <span className="i i-phone" aria-hidden="true" />
                <span>Servicio: (601) 407 3033</span>
              </li>
              <li>
                <span className="i i-mail" aria-hidden="true" />
                <a href="mailto:servicio@alkosto.com">servicio@alkosto.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* franja inferior con copyright */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 Alkosto. Todos los derechos reservados.</p>

          <div className="footer__badges">
            {/* opcionales: pequeños íconos de seguridad/sello */}
            <img src="/assets/icons/badges/lock.svg" alt="Sitio seguro" />
            <img src="/assets/icons/badges/shield.svg" alt="Protección de datos" />
            <img src="/assets/icons/badges/star.svg" alt="Calidad" />
          </div>
        </div>
      </div>
    </footer>
  );
}
