import React from 'react';
import Link from 'next/link';
import './Navbar.css'; // Importing the CSS file
import CustomButton from '../CustomButton';
//import CustomButton from './CustomButton'; // Import the CustomButton component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Heritage</Link>
      </div>
      <div className="navLinks">
        <Link href="/aboutus">About Us</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
        <div className="navButton">
          <CustomButton color="#000000" radius="30px" >
            Login
          </CustomButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;