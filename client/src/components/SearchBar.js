import React, { useState } from 'react'
//import styles from '../Styles/styles.css'

function SearchBar({onSearch}) {
  
  const [input, setInput] = useState("");
  
  return (
    <div className= "searchBar">
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
    </div>
  )
}

export default SearchBar;
