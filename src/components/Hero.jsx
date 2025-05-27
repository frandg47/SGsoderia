import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/soda1.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="hero-content text-center">
        <h1>Refrescá tu día con <br /><span className="highlight">AquaTech</span></h1>
        <p>Las sodas artesanales más frescas y burbujeantes</p>
        <Link to="/productos" className="btn-hero">
          Ver productos
        </Link>
      </div>
    </section>
  );
};

export default Hero;
