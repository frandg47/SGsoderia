import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { BsPass } from "react-icons/bs";

const CreateClientModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({ name: "", category: "", price: "", image: "" });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Producto</Modal.Title>
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
              placeholder="Nombre del producto"
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
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateClientModal;
