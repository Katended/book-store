import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>

    </div>
  );
}

export default App;
