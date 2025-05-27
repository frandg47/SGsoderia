import { useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useGet } from "../hooks/useGet";
import { usePost } from "../hooks/usePost";
import Swal from "sweetalert2";
import EditProductModal from "./EditProductModal";
import CreateProductModal from "./CreateProductModal";
import axios from "axios";
import "../styles/admin.css";

const ProductTable = () => {
  const {
    data: products,
    loading: getLoading,
    refetch,
  } = useGet("http://localhost:3000/products");
  const { postData } = usePost();

  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleEdit = (product) => {
    setProductToEdit({ ...product });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setProductToEdit(null);
  };

  const handleSaveCreate = async (formData) => {
    try {
      console.log("formdata", formData);
      await postData("http://localhost:3000/products", formData);
      Swal.fire("Creado", "El producto fue creado con éxito.", "success");
      handleCloseCreateModal();
      refetch();
    } catch (err) {
      console.error("Error al crear producto:", err);
      Swal.fire("Error", "No se pudo crear el producto.", "error");
    }
  };

  const handleSaveEdit = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/products/${productToEdit.id}`,
        formData
      );
      Swal.fire("Editado", "El producto fue actualizado.", "success");
      handleCloseEditModal();
      refetch();
    } catch (err) {
      console.error("Error al editar producto:", err);
      Swal.fire("Error", "No se pudo editar el producto.", "error");
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirm.isConfirmed) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
        refetch();
      }
    } catch (err) {
      console.error("Error al eliminar producto:", err);
      Swal.fire("Error", "No se pudo eliminar el producto.", "error");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center titulo-admin">Lista de Productos</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" onClick={handleOpenCreateModal}>
          Crear producto
        </button>
      </div>
      {getLoading ? (
        <Spinner
          animation="border"
          role="status"
          className="d-block mx-auto mt-5"
        >
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-projects mt-4"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-1"
                    onClick={() => handleEdit(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger me-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <EditProductModal
        show={showEditModal}
        onClose={handleCloseEditModal}
        product={productToEdit}
        onSave={handleSaveEdit}
      />

      <CreateProductModal
        show={showCreateModal}
        onClose={handleCloseCreateModal}
        onSave={handleSaveCreate}
      />
    </div>
  );
};

export default ProductTable;
