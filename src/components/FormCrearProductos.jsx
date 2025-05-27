// src/components/FormCrearProducto.jsx
import { useState } from 'react';
import usePost from '../hooks/usePost';

const FormCrearProducto = () => {
  const postData = usePost();
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData('http://localhost:3000/products', form);
    alert('Producto creado');
    setForm({ name: '', price: '', category: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required /> <br />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Precio" required /> <br />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" required /> <br />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Imagen (ej: cocacola.jpg)" required /> <br />
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default FormCrearProducto;
