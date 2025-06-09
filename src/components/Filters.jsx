import "../styles/filters.css";
import { useState } from "react";

const Filters = ({  setFilter }) => {
  const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value);
        setFilter((prevFilters) => ({
            ...prevFilters,
            minPrice: e.target.value,
        }));
    }

    const handleChangeCategory = (e) => {
        setFilter((prevFilters) => ({
            ...prevFilters,
            category: e.target.value,
        }));
    }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio min:</label>
        <input
          id="price"
          type="range"
          min="0"
          max="5000"
          step="100"
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría:</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="Gaseosa">Gaseosas</option>
          <option value="Agua">Aguas</option>
          <option value="Soda">Sodas</option>
          <option value="Galleta">Galletas</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
