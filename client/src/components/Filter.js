import React from 'react'
import { FilterStyled } from '../Styles/Filter_styles';

function Filter(props) {
  return (
    <FilterStyled>
      <div className="all">
        <div className="results">
          <div className="input"><b>{props.input}</b></div>
          <div className="result">{props.count} Results </div>
        </div>
        <div className="order">
            <select value={props.sort} onChange={props.sortProducts}>
                <option value="price">Price</option>
                {/* <option value="all">All</option> */}
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
        </div>
        <div className="order">
            <select value={props.condition} onChange={props.filterProducts}>
                <option >Condition</option>
                {/* <option value="all">All</option> */}
                <option value="new">New</option>
                <option value="used">Used</option>
            </select>    
        </div>
      </div>

    </FilterStyled>
  )
}

export default Filter;
