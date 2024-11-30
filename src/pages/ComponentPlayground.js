import React from 'react';
import Searchbar from '../components/Seachbar/Searchbar';

const ComponentPlayground = () => {
  return (
    <div className="playground">
      <h2>Component Playground</h2>
      <div className="playground-content">
        {/* experimental components */}
        <Searchbar />
      </div>
    </div>
  );
};

export default ComponentPlayground;