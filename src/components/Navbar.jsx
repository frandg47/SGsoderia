import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "/proyectos") {
      return location.pathname.startsWith("/proyectos");
    }
    return location.pathname === path;
  };

  

  return (
    <header className="main-header">
      <span className="main-logo" onClick={() => navigate("/home")}>
        <img src="/LOGO 2.png" alt="logo" width={100} height={50} />
      </span>

      <nav className={`main-navbar ${menuOpen ? "menu-active" : ""}`}>
        <Link
          to="/"
          className={isActive("/home") ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link
          to="/productos"
          className={isActive("/productos") ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Productos
        </Link>
        <Link
        to={"/clientes"}
          className="link-button"
          onClick={() => setMenuOpen(false)}
        >
          Clientes
        </Link>
        <Link
          to={"/ventas"}
          className="link-button"
          onClick={() => setMenuOpen(false)}
        >
          Ventas
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={() => setMenuOpen(false)}
        >
          Salir
        </button>
      </nav>

      <div
        className={`main-menu-toggle ${menuOpen ? "toggle-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
