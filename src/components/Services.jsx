import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="service-card">
          <img
            src="/soda3.jpg"
            alt="Producción artesanal"
            className="service-img"
          />
          <h3>Llenado y Distribución</h3>
          <p>
            Ofrecemos servicio de recarga y distribución de soda en botellones
            retornables, con controles de calidad y seguridad.
          </p>
        </div>
        <div className="service-card">
          <img
            src="/soda 2.jpg"
            alt="Servicio de delivery"
            className="service-img"
          />
          <h3>Delivery Rápido</h3>
          <p>
            Hacemos envíos directo a tu casa en tiempo récord y con todo el gas
            que te gusta.
          </p>
        </div>
        <div className="service-card">
          <img
            src="/soda1.jpg"
            alt="Sabores exclusivos"
            className="service-img"
          />
          <h3>Dispenser frío-calor</h3>
          <p>
            Disfrutá de agua fría y caliente en la comodidad de tu hogar,
            comercio u oficina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
