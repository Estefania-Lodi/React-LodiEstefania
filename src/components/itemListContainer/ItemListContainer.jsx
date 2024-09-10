import React, { useState } from 'react';
import './itemListContainer.css';

const productos = [
  {
    id: 1,
    nombre: 'Kit pieles secas',
    precio: 5000.00,
    imagen: 'img/prod 1.png',
  },
  {
    id: 2,
    nombre: 'Kit pieles grasas',
    precio: 5500.00,
    imagen: 'img/prod 2.png',
  },
  {
    id: 3,
    nombre: 'Kit pieles mixtas',
    precio: 5800.00,
    imagen: 'img/prod 3.png',
  },
  // Agregar más productos
];

function ItemListContainer() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    console.log(`Agregando ${producto.nombre} al carrito`);
  };

  return (
    <div className="itemListContainer">
      <div className="productosContainer">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} className="productoImagen" />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      <div className="carritoContainer">
        <h2>Carrito de Compras</h2>
        {carrito.length > 0 ? (
          <div>
            {carrito.map((productoCarrito) => (
              <div key={productoCarrito.id} className="carritoProducto">
                {productoCarrito.nombre} - ${productoCarrito.precio}
              </div>
            ))}
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;