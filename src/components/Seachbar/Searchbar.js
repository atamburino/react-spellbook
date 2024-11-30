import React, { Component } from "react";
import './Searchbar.css'

class Searchbar extends Component {
  // Initialize state in constructor
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      isSearching: false,
    };
  }

  render() {
    return (
      <div>
        <p>Test of life</p>
      </div>
    );
  }
}

export default Searchbar;