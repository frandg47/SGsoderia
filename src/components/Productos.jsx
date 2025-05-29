import ProductCarousel from "../components/ProductCarousel";
import { useGet } from "../hooks/useGet";
import "../styles/productos.css"; 
import { useState } from "react";
import Filters from "../components/Filters"; 

const Productos = () => {
  const { data: products, loading } = useGet("http://localhost:3000/products");
  const [filters, setFilter] = useState({
    minPrice: 0,
    category: "all"
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === "all" || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <section id="productos">
      <div className="container-products">
        <h2 className="text-center my-5">Productos</h2>
        <Filters setFilter={setFilter} />
        {loading ? <p>Cargando productos...</p> 
        : 
        <ProductCarousel products={filteredProducts} loading={loading} />}
      </div>
    </section>
  );
};

export default Productos;
