// Sidebar component - Provides navigation for different component categories
// This can be used as a reusable navigation component across this personal spellbook

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Categories array - Defines the navigation structure
  // Each object contains:
  // name: Display text for the navigation item
  // path: URL route that the item links to
  // Add new categories by adding new objects to this array
  const categories = [
    { name: 'In Dev', path: '/components/Dev' },
    // { name: 'Layout', path: '/components/layout' },       // Basic layout components like containers, grids
    // { name: 'Forms', path: '/components/forms' },         // Form-related components like inputs, buttons
    // { name: 'Data Display', path: '/components/data-display' }, // Components for showing data like tables, cards
    // { name: 'Feedback', path: '/components/feedback' },    // User feedback components like alerts, modals
    // { name: 'Navigation', path: '/components/navigation' }, // Navigation components like menus, breadcrumbs
  ];

  return (
    // aside: Semantic HTML element for sidebar content, with CSS class for styling
    <aside className="sidebar">
      {/* // Container div that wraps all sidebar content for layout management */}
      <div className="sidebar-content">
        {/* // Main heading for the sidebar section */}
        <h3>Components</h3>
        {/* // Unordered list to contain all navigation items, styled with component-list class */}
        <ul className="component-list">
          {/* 
            Map through each category in our categories array
            For each category object, create a list item with a link
            category.path provides the URL route
            category.name provides the display text
          */}
          {categories.map((category) => (
            // List item with key prop for React's reconciliation process
            // key uses category.path since it's unique for each item
            <li key={category.path}>
              {/* // React Router Link component for client-side navigation
              // 'to' prop specifies the route to navigate to
              // The link text is the category name */}
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

// Export the Sidebar component as the default export
// This allows us to import it in other files using: import Sidebar from './Sidebar'
export default Sidebar;