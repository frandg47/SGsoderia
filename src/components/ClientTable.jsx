import { useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useGet } from "../hooks/useGet";
import { usePost } from "../hooks/usePost";
import Swal from "sweetalert2";
import EditClientModal from "./EditClientModal";
import CreateClientModal from "./CreateClientModal";
import axios from "axios";
import "../styles/admin.css";

const ClientTable = () => {
  const {
    data: clients,
    loading: getLoading,
    refetch,
  } = useGet("http://localhost:3000/users");
  const { postData } = usePost();

  const [showEditModal, setShowEditModal] = useState(false);
  const [clientToEdit, setClientToEdit] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleEdit = (client) => {
    setClientToEdit({ ...client });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setClientToEdit(null);
  };

  const handleSaveCreate = async (formData) => {
    try {
        console.log("formdata", formData)
      await postData("http://localhost:3000/users", formData);
      Swal.fire("Creado", "El cliente fue creado con éxito.", "success");
      handleCloseCreateModal();
      refetch();
    } catch (err) {
      console.error("Error al crear cliente:", err);
      Swal.fire("Error", "No se pudo crear el cliente.", "error");
    }
  };

  const handleSaveEdit = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/users/${clientToEdit.id}`,
        formData
      );
      Swal.fire("Editado", "El cliente fue actualizado.", "success");
      handleCloseEditModal();
      refetch();
    } catch (err) {
      console.error("Error al editar cliente:", err);
      Swal.fire("Error", "No se pudo editar el cliente.", "error");
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
        await axios.delete(`http://localhost:3000/users/${id}`);
        Swal.fire("Eliminado", "El cliente ha sido eliminado.", "success");
        refetch();
      }
    } catch (err) {
      console.error("Error al eliminar cliente:", err);
      Swal.fire("Error", "No se pudo eliminar el cliente.", "error");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center titulo-admin">Lista de Clientes</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success" onClick={handleOpenCreateModal}>
          Crear cliente
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
              <th>Email</th>
              <th>Role</th>
              <th>Password</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.role}</td>
                <td>{client.password}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-1"
                    onClick={() => handleEdit(client)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger me-1"
                    onClick={() => handleDelete(client.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <EditClientModal
        show={showEditModal}
        onClose={handleCloseEditModal}
        client={clientToEdit}
        onSave={handleSaveEdit}
      />

      <CreateClientModal
        show={showCreateModal}
        onClose={handleCloseCreateModal}
        onSave={handleSaveCreate}
      />
    </div>
  );
};

export default ClientTable;
