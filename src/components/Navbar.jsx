import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  const isActive = (path) => {
    if (path === "/proyectos") {
      return location.pathname.startsWith("/proyectos");
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/");
  };

  return (
    <header className="main-header">
      <span className="main-logo text-light" onClick={() => navigate("/home")}>
        <img src="/AquaTech-removebg.png" alt="logo" />
      </span>

      <nav className={`main-navbar ${menuOpen ? "menu-active" : ""}`}>
        <Link
          to="/home"
          className={isActive("/home") ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        {/* <Link
          to="/productos"
          className={isActive("/productos") ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Productos
        </Link> */}
        {user?.role === "admin" && (
          <Link
            to={"/admin"}
            className={isActive("/admin") || isActive("/admin/ventas") || isActive("/admin/clientes") || isActive("/admin/productos") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>
        )}


        <div className="menu-user-controls d-md-none">
          <span className="user-info d-flex align-items-center">
            <FaUserCircle className="fs-4 mx-2" />
            <span className="user-name">{user?.name || "Usuario"}</span>
          </span>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Salir
          </button>
        </div>
      </nav>

      <div className="user-controls text-light">
        <span className="user-info px-2 d-flex align-items-center">
          <FaUserCircle className="fs-3 mx-2" />
          <span className="user-name mx-1">{user?.name || "Usuario"}</span>
        </span>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Salir
        </button>
      </div>

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
