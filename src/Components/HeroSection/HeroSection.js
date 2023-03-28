import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div>
      <div className='hero-section'>
      <div className='hero-content'>
        <h2>Hii!!<span>👋</span> I am</h2>
        <h1>Divyanshu Dhakar</h1>
        <h3>
        Creating Digital Brands, Experiences, and Products
        </h3>
      </div>
      <div className='hero-photo'>
        <img src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
      </div>
      </div>
      
    </div>
  )
}

export default HeroSection
