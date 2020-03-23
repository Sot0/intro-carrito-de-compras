import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // Crear listado de productos
  const [ productos, agregarProducto] = useState([
    { id: 1, nombre: 'Camisa ReactJs', precio: 50 },
    { id: 2, nombre: 'Camisa VueJs', precio: 30 },
    { id: 3, nombre: 'Camisa Angular', precio: 40 },
    { id: 4, nombre: 'Camisa Gatsby', precio: 20 }
  ]);

  // State para un carrito de compras
  const [ carrito, agregarAlCarrito ] = useState([]);

  // Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header/>

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key = {producto.id}
          producto = {producto}  
          productos = {productos}
          carrito = {carrito}
          agregarAlCarrito = {agregarAlCarrito}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarAlCarrito = {agregarAlCarrito}
      />

      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
