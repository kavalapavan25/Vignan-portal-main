import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-vignan-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="VGNT Logo" className="h-12 mr-4" />
          <h1 className="text-xl font-bold">Vignan Institute of Technology and Science</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/ceo">CEO</Link></li>
            <li><Link to="/principal">Principal</Link></li>
            <li><Link to="/chairman">Chairman</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
