import React, { useState } from 'react'
import { Link } from "react-router-dom";

function SearchBar({onSearch}) {
  
  const [input, setInput] = useState("");


  
  return (
    <div className="searchBar">
      <div>
        <Link to = "/"><h3 className="text">Home</h3></Link>
      </div>

      <form onSubmit = {(e) => {
        e.preventDefault();
        onSearch(input);
        setInput("")
      }}>
        <div className="inputs">
          <input 
            className = "cssDeLaBarritaDeBusqueda"
            type = "search"
            placeholder = "Search product..." 
            onChange = {e => setInput(e.target.value)}
            value = {input}
          />
          <input
            className = "button-submit"
            type = "submit"
            value = "Submit"
          />
        </div>
      </form>

    </div>

    
    
  )
}

export default SearchBar;
