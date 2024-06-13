// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/Book'; // Correct import path
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
      </Routes>
    </Router>
  );
};

export default App;
