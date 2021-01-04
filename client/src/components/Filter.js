import { FilterStyled } from "../Styles/Filter_styles";

// A este componente Filter.js, se le pasan por props directamente, ya que haciendo destructuring sería muy larga la línea de código,
// lo que le llega es count, sort, condition, sortProducts, filterProducts e input, que son props del componente padre Features.js
function Filter(props) {
  return (
    <FilterStyled>
      <div className="all">
        <div className="order">
          {/* sortProducts, es una función creada en Features.js, que sirve para ordenar los productos por precio,
          de mayor a menor o viceversa.*/}
          <select value={props.sort} onChange={props.sortProducts}>
            <option value="price">Price</option>
            {/* <option value="all">All</option> */}
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="order">
          {/* filterProducts, es una función creada en Features.js, que sirve para filtrar los productos por condición,
          ya sea usados o nuevos.*/}
          <select value={props.condition} onChange={props.filterProducts}>
            <option>Condition</option>
            {/* <option value="all">All</option> */}
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <div className="results">
            <div className="input">
              {/* El input es lo que ingresa el usuario en la barra de búsqueda */}
              <b>{props.input}</b>
            </div>
            {/* El count, es la cantidad de resultados que entrega el input */}
            <div className="result">{props.count} Results </div>
          </div>
        </div>
      </div>
    </FilterStyled>
  );
}
export default Filter;