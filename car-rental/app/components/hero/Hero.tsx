import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component
import gojo from '../images/gojo.jpeg'; // Make sure the image is in the public folder
import car from '../images/car.jpg';
import './hero.css'; // Importing the CSS file

const Hero = () => {
  return (
    <main className="hero-container">
      <div className='hero-fonts'>
        <div className="hero-text">
          <h1>Premium</h1>
          <h1>Car Rental</h1>
          <h1>in New York</h1>
        </div>
        <div className='hero-subtext'>
          <p> Don't deny yourself the pleasure of</p>
          <p>driving the best premium cars from</p>
          <p>around the world here and now</p>
        </div>
      </div>
      <div className="hero-image">
        {/* Use the Next.js Image component */}
        <Image src={car} alt="this is car" layout="intrinsic"/>
      </div>
    </main>
  );
}

export default Hero;
