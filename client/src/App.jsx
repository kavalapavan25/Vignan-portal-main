import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import CEO from './pages/CEO';
import Principal from './pages/Principal';
import Chairman from './pages/Chairman';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/ceo" element={<CEO />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
