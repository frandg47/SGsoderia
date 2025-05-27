import React from "react";
import Navbar from "../components/Navbar";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container titulo-admin mb-5">
        <h1 className="text-center">AdminPage</h1>
        <Card className="mt-5 mb-3">
          <Card.Header as="h5">Productos</Card.Header>
          <Card.Body>
            <Card.Title>Tabla de control de productos</Card.Title>
            <Card.Text>
              Aquí podrás gestionar los productos disponibles en la tienda,
              incluyendo agregar, editar o eliminar productos.
            </Card.Text>

            <Button
              variant="primary"
              className="btn-admin"
              onClick={() => navigate("/admin/productos")}
            >
              Ir a productos
            </Button>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Header as="h5">Clientes</Card.Header>
          <Card.Body>
            <Card.Title>Tabla de control de clientes</Card.Title>
            <Card.Text>
              Aquí podrás gestionar los clientes registrados en la tienda,
              incluyendo agregar, editar o eliminar clientes.
            </Card.Text>
            <Button
              variant="primary"
              className="btn-admin"
              onClick={() => navigate("/admin/clientes")}
            >
              Ir a clientes
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Ventas</Card.Header>
          <Card.Body>
            <Card.Title>Tabla de control de ventas</Card.Title>
            <Card.Text>
              Aquí podrás gestionar las ventas realizadas en la tienda,
              incluyendo agregar, editar o eliminar ventas.
            </Card.Text>
            <Button
              variant="primary"
              className="btn-admin"
              onClick={() => navigate("/admin/ventas")}
            >
              Ir a ventas
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminPage;
