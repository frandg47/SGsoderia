import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductosPage from "./pages/ProductosPage";
import VentasPage from "./pages/VentasPage";
import ClientesPage from "./pages/ClientesPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Cart />
      <Routes>
        <Route path="/" element={<LoginPage />} />
         <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/ventas"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <VentasPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/clientes"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ClientesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/productos"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ProductosPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
