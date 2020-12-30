import React, { useState } from 'react'
import { SearchBarStyled } from '../Styles/SearchBar_style'

function SearchBar({onSearch}) {
  
  const [input, setInput] = useState("");
  
  return (
    
      <form onSubmit = {(e) => {
        e.preventDefault();
        onSearch(input);
        setInput("")
      }}>

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
      </form>
    
  )
}

export default SearchBar;
