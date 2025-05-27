import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useGet } from "../hooks/useGet";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormCrearProducto from "./FormCrearProductos";
import useDelete from "../hooks/useDelete";

const TablaProductosAdm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, loading } = useGet("http://localhost:3000/products");
  const deleteData = useDelete();

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (!data) {
    return <p>Error al cargar los productos.</p>;
  }

 

  const handleDelete = async (id) => {
    try {
      await deleteData(`http://localhost:3000/products/${id}`);
      alert("Producto eliminado");
    } catch (error) {
      alert("Error al eliminar producto");
    }
  };

  return (
    <div className="text-center">
      <br /> <br /> <br />
      <h1>Crear un nuevo producto</h1>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <FormCrearProducto />
      </div>
      <h2 className="text-center">Tabla productos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>imagenes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td className="text-center">
                <img
                  src={`/src/assets/productsimages/${product.image}`}
                  alt=""
                  width="auto"
                  height="90px"
                />
              </td>
              <td>
                <Button className="mx-3" onClick={handleShow}>
                  {" "}
                  EDITAR
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
                  ELIMINAR
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="$100, $200, etc."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la categoría del producto"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TablaProductosAdm;
