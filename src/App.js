// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Chapter5 from './components/Chapter5'; // Add imports for Chapter5 to Chapter14
import Chapter6 from './components/Chapter6';
import Chapter7 from './components/Chapter7';
import Chapter8 from './components/Chapter8';
import Chapter9 from './components/Chapter9';
import Chapter10 from './components/Chapter10';
import Chapter11 from './components/Chapter11';
import Chapter12 from './components/Chapter12';
import Chapter13 from './components/Chapter13';
import Chapter14 from './components/Chapter14';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/chapter5" element={<Chapter5 />} />
        <Route path="/chapter6" element={<Chapter6 />} />
        <Route path="/chapter7" element={<Chapter7 />} />
        <Route path="/chapter8" element={<Chapter8 />} />
        <Route path="/chapter9" element={<Chapter9 />} />
        <Route path="/chapter10" element={<Chapter10 />} />
        <Route path="/chapter11" element={<Chapter11 />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        <Route path="/chapter13" element={<Chapter13 />} />
        <Route path="/chapter14" element={<Chapter14 />} />
        {/* Add routes for Chapter6 to Chapter14 here */}
      </Routes>
    </Router>
  );
};

export default App;
