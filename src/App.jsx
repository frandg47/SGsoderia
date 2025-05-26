import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductosPage from "./pages/ProductosPage"
import VentasPage from "./pages/VentasPage"
import ClientesPage from "./pages/ClientesPage"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
      </Routes>
    </>
  )
}

export default App
