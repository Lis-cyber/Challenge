import React, { useState } from 'react'
import { Link } from "react-router-dom";

function SearchBar({onSearch}) {
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <div>
        <Link to = "/"><h3 className="text">Home</h3></Link>
      </div>
      <form className="form" onSubmit = {(e) => {
        e.preventDefault();
        onSearch(input);
        setInput("")
      }}>
        <input
          className = "button-submit"
          type = "submit"
          value = "Submit"
        />
        <input 
          className = "cssDeLaBarritaDeBusqueda"
          type = "search"
          placeholder = "Search product..." 
          onChange = {e => setInput(e.target.value)}
          value = {input}
        />
      </form>
    </div> 
  )
}

export default SearchBar;
