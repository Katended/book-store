import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CateogoriesPage';

const dummyList = [{
  id: 1, title: 'The Convenat of Water', author: 'Abrahan Verghese',
}, {
  id: 2, title: 'Forth Wing', author: 'Rebecca',
}, {
  id: 3, title: 'This is going to hurt', author: 'Adam Kay',
}];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage bookList={dummyList} />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}
export default App;
