import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const EditProductModal = ({ show, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
        image: product.image || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre del cliente"
            />
          </Form.Group>

          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Categoria del producto"
            />
          </Form.Group>

          <Form.Group controlId="price" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Precio del producto"
            />
          </Form.Group>
          
          <Form.Group controlId="image" className="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="URL de la imagen del producto"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;
