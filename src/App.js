import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  );
};

export default App;