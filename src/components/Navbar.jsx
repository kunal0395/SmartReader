import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-[80px] top-0 shadow-lg bg-[#2d2d36]">
      <div className="font-bold font-serif text-2xl flex mx-[42px]">
        <img
          src="logo1.png"
          alt=""
          className="h-7 inline"
        />
        <h1 className="ml-[12px] text-white">Smart-Reader</h1>
      </div>
      <ul className="flex items-center h-1/2 text-white">
        <li className="mx-3 py-2 px-5 text-lg font-medium flex gap-[50px]">
          <Link to="/" className="uline">HOME</Link>
          <Link to="/about" className="uline">ABOUT</Link>
          <Link to="/privacy" className="uline">PRIVACY</Link>
          <Link to="/contact" className="uline">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
