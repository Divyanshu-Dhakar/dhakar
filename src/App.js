import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/about/about";
import Interests from "./Components/interests/interests";
import Portfolio from "./Components/portfolio/portfolio";
import Experience from "./Components/Experience/experience";


import './App.css'
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Interests />
    <Portfolio />
<Experience />
    </div>

  );
}

export default App;