import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import CategoryPage from './pages/CategoryPage';
import StudyPage from './pages/StudyPage';
import RandomWordPage from './pages/RandomWordPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/word/:id" element={<WordPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/random" element={<RandomWordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;