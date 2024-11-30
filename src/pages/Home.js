import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to my Spellbook</h1>
        <p className="subtitle">A magical collection of React experiments and components</p>
      </section>

      {/* Introduction section */}
      <section className="intro">
        <h2>About This Space</h2>
        <p>
          Hello! I'm Andrew Tamburino, and this is my React playground. Here, I craft and experiment
          with components, explore JavaScript possibilities, write tests, and continue to expand
          my development horizons.
        </p>
        <p>
          This spellbook serves as both my personal laboratory and a collection of reusable 
          components and solutions I've developed along my coding journey.
        </p>
      </section>
    </div>
  );
};

export default Home;