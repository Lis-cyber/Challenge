import { useState } from "react";
import { Link } from "react-router-dom";

// Este componente es para realizar las búsquedas, le llega la función onSearch por props, que está definida en Features.js
function SearchBar({ onSearch }) {
  // Se crea una variable input, donde se guarda el valor ingresado por el usuario, tiene un string vacio como valor inicial,
  // dado por useState. El setInput, es el valor que cambia el estado a input.
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <div>
        {/* Este link redirige a la página principal, al hacer click en Home */}
        <Link to="/">
          <h5 className="text1">Go</h5>
          <h3 className="text">Home</h3>
        </Link>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault(); // Previene que la pagina se recargue cada vez que se ejecute una acción
          // invoca la función onSearch con el valor que ingresa el usuario (input)
          onSearch(input);
          setInput(""); // Esto se utiliza para limpiar el campo una vez enviada la búsqueda
        }}
      >
        <input className="button-submit" type="submit" value="Search" />
        <input
          type="search"
          placeholder="Search product..."
          // Lo que hace onChange es ir cambiando el valor input al mismo tiempo que el usuario ingresa el valor, a través de useState.
          onChange={(e) => setInput(e.target.value)}
          value={input} // el valor es el input que ingresa el usuario
        />
      </form>
    </div>
  );
}

export default SearchBar;