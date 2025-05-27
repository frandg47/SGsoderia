import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import { useGet } from "../hooks/useGet";
import "../styles/productos.css"; 

const Productos = () => {
  const { data: products, loading } = useGet("http://localhost:3000/products");

  console.log("Products data:", products);

  return (
    <section id="productos">
      <div className="container-products">
        <h2 className="text-center my-5">Productos</h2>
        {loading ? <p>Cargando productos...</p> : <ProductCarousel products={products} loading={loading} />}
      </div>
    </section>
  );
};

export default Productos;
