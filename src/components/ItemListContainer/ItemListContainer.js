import React, { useState } from 'react';
import './itemListContainer.css';

const productos = [
  { id: 1, nombre: 'Kit pieles secas', precio: 5000.00, imagen: 'img/prod 1.png', categoria: 'cremas' },
  { id: 2, nombre: 'Kit pieles grasas', precio: 5500.00, imagen: 'img/prod 2.png', categoria: 'cremas' },
  { id: 3, nombre: 'Kit pieles mixtas', precio: 5800.00, imagen: 'img/prod 3.png', categoria: 'cremas' },
  { id: 4, nombre: 'Sombras', precio: 8000.00, imagen: 'img/maquillaje 1.jpg', categoria: 'maquillajes' },
  { id: 5, nombre: 'Brochas', precio: 7500.00, imagen: 'img/maquillaje 2.jpg', categoria: 'maquillajes' },
  { id: 6, nombre: 'Rimel', precio: 6800.00, imagen: 'img/maquillaje 3.jpg', categoria: 'maquillajes' },
  { id: 7, nombre: 'Exfoliante Facial', precio: 8900.00, imagen: 'img/exfoliante 1.jpg', categoria: 'exfoliantes' },
  { id: 8, nombre: 'Exfoliante Corporal', precio: 6700.00, imagen: 'img/exfoliante 2.jpg', categoria: 'exfoliantes' },
];

const ItemListContainer = ({ categoriaSeleccionada }) => {
  const [carrito, setCarrito] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const toggleOrdenarPorPrecio = () => {
    setOrdenAscendente((prevOrden) => !prevOrden);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  const productosOrdenados = [...productosFiltrados].sort((a, b) => 
    ordenAscendente ? a.precio - b.precio : b.precio - a.precio
  );

  return (
    <div className="itemListContainer">
      <div className="ordenarBotonContainer">
        <button onClick={toggleOrdenarPorPrecio}>
          Ordenar por Precio {ordenAscendente ? 'Ascendente' : 'Descendente'}
        </button>
      </div>

      <div className="productosContainer">
        {productosOrdenados.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} className="productoImagen" />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <button onClick={() => { /* Lógica para mostrar detalles */ }}>Detalles</button>
          </div>
        ))}
      </div>

      <div className="carritoContainer">
        <h2>Carrito de Compras</h2>
        {carrito.length > 0 ? (
          carrito.map((productoCarrito) => (
            <div key={productoCarrito.id} className="carritoProducto">
              {productoCarrito.nombre} - ${productoCarrito.precio}
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;