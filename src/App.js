import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { CartProvider } from './components/CartContext';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/cremas" element={<ItemListContainer />} />
          <Route path="/maquillajes" element={<ItemListContainer />} />
          <Route path="/exfoliantes" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
=======
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cremas" element={<ItemListContainer categoriaSeleccionada="cremas" />} />
        <Route path="/maquillajes" element={<ItemListContainer categoriaSeleccionada="maquillajes" />} />
        <Route path="/exfoliantes" element={<ItemListContainer categoriaSeleccionada="exfoliantes" />} />
      </Routes>
    </Router>
>>>>>>> 0014833938095b2bcfa5ced9c3eff92521060ae8
  );
};

export default App;