// Import React library for creating components
import React from 'react';
// Import Link component from react-router-dom for client-side navigation
import { Link } from 'react-router-dom';

// Navbar component - Provides top navigation for the application
const Navbar = () => {
 return (
   // Main navigation container with navbar class for styling
   <nav className="navbar">
     <div className="navbar-brand">
       {/* Link to home page */}
       <Link to="/">React Spellbook</Link>
     </div>

     {/* 
       Right side of navbar containing navigation links
       navbar-links class for styling the links section
     */}
     <div className="navbar-links">
       {/* Link to playground section */}
       <Link to="/playground">Playground</Link>
       {/* Link to components section */}
       <Link to="/components">Components</Link>
     </div>
   </nav>
 );
};

// Export Navbar component to be used in other parts of the application
export default Navbar;