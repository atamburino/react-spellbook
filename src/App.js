import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ComponentPlayground from './pages/ComponentPlayground';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<ComponentPlayground />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;