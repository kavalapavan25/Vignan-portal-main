import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-vignan-blue text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Vignan Institute of Technology and Science. All Rights Reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4 mt-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
