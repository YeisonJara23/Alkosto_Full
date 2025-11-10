// src/components/PaymentOffers/PaymentOffers.js
import React from "react";
import "./PaymentOffers.scss";

export default function PaymentOffers() {
  return (
    <section className="payment-offers" aria-label="Medios de pago y beneficios">
      <div className="payment-offers__container">
        <h3 className="payment-offers__title">
          ¡Paga fácil y seguro, con tu medio de pago favorito!
        </h3>

        <ul className="payment-offers__logos">
          {/* Usa tus rutas reales de /public/images/payments/  */}
          <li><img src="/images/payments/method-mastercard.webp" alt="Mastercard" /></li>
          <li><img src="/images/payments/method-visa.webp" alt="Visa" /></li>
          <li><img src="/images/payments/mp-dinners-club.webp" alt="Diners Club" /></li>
          <li><img src="/images/payments/american.webp" alt="American Express" /></li>
          <li><img src="/images/payments/mp-pse.webp" alt="PSE" /></li>
          <li><img src="/images/payments/method-nequi.webp" alt="Nequi" /></li>
          <li><img src="/images/payments/davivienda.webp" alt="Daviplata" /></li>
          <li><img src="/images/payments/mp-addi-v2.webp" alt="Addi" /></li>
          <li><img src="/images/payments/bancolombia.webp" alt="Bancolombia" /></li>
          <li><img src="/images/payments/mp-davivienda.webp" alt="Davivienda" /></li>
          <li><img src="/images/payments/method-efecty.webp" alt="Efecty" /></li>
          <li><img src="/images/payments/mp-sured.webp" alt="Su Red" /></li>
          <li><img src="/images/payments/brilla-2.svg" alt="Brilla" /></li>
        </ul>

        <div className="payment-offers__bullets">
          <div className="bullet">
            <span className="bullet__icon" aria-hidden="true">✔</span>
            <span>Disfruta de <strong>30 días</strong> para cambios y devoluciones</span>
          </div>
          <div className="bullet">
            <span className="bullet__icon" aria-hidden="true">✔</span>
            <span>Solo en <strong>Alkosto</strong> tu celular viene con <strong>Seguro gratis</strong></span>
          </div>
          <div className="bullet">
            <span className="bullet__icon" aria-hidden="true">✔</span>
            <span><strong>Envío GRATIS</strong> en todos los productos a más de 900 municipios</span>
          </div>
          <div className="bullet">
            <span className="bullet__icon" aria-hidden="true">✔</span>
            <span>Compra en <strong>Kombo</strong> y ahorra</span>
          </div>
          <div className="bullet">
            <span className="bullet__icon" aria-hidden="true">✔</span>
            <span>Podrás <strong>ganar la mitad</strong> de tu compra</span>
          </div>
        </div>
      </div>
    </section>
  );
}
