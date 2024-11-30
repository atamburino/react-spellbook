import React, { Component } from "react";
import './Searchbar.css'

class Searchbar extends Component {
 // Constructor initializes the component
 // Props are passed to constructor and super to properly set up the component
 constructor(props) {
   super(props);
   // Initialize component's state
   // State holds data that can change over time and trigger re-renders
   this.state = {
     searchTerm: "",     // Stores the current search input value
     isSearching: false, // Tracks whether a search is in progress
   };
 }

 // Arrow function to handle input changes
 // Using arrow syntax to automatically bind 'this' to the component instance
 // Event parameter contains information about the input change
 handleInputChange = (event) => {
   // Update state with new input value
   // setState is React's way of updating state and triggering re-renders
   this.setState({
     searchTerm: event.target.value, // Get the new value from the input field
   });
 };

 // Arrow function to handle form submission
 // Prevents default form behavior and manages search state
 handleSubmit = (event) => {
   event.preventDefault();  // Prevent form from submitting normally and refreshing page
   
   // Set searching state to true to show loading state
   this.setState({ isSearching: true });
   
   // Check if onSearch prop exists (was passed to this component)
   // This allows parent components to handle the actual search logic
   if (this.props.onSearch) {
     this.props.onSearch(this.state.searchTerm); // Call the search function with current search term
   }
   
   // Reset searching state back to false
   this.setState({ isSearching: false });
 };

 render() {
   // Destructure values from state for cleaner code
   // This allows us to use searchTerm and isSearching directly
   const { searchTerm, isSearching } = this.state;

   return (
     // Form element with class for styling and onSubmit handler
     <form className="searchbar" onSubmit={this.handleSubmit}>
       {/* Input field for search term */}
       <input
         type="text"                        // Standard text input
         value={searchTerm}                 // Controlled input - value comes from state
         onChange={this.handleInputChange}  // Handler for input changes
         placeholder="Search..."            // Placeholder text when input is empty
         className="searchbar-input"        // Class for styling
       />
       {/* Submit button for the form */}
       <button
         type="submit"                      // Makes button submit the form
         className="searchbar-button"       // Class for styling
         disabled={isSearching}             // Disable button while searching
       >
         {/* Conditional rendering for button text */}
         {isSearching ? "Searching..." : "Search"}
       </button>
     </form>
   );
 }
}

// Export the component so it can be imported and used in other files
export default Searchbar;