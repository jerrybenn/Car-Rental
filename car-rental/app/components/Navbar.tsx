import React from 'react';
import Link from 'next/link';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Heritage Car Rentals</Link>
      </div>
      <div className="navLinks">
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
