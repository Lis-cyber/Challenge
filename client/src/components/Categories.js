import React, { useState } from 'react'
import { FilterStyled } from '../Styles/Filter_styles';

function Categories({searchCat , categories}) {
    const [input, setInput] = useState("");

    return (
        <FilterStyled>
        <div className="all">
            <form className="orderCat" onSubmit = {(e) => {
                e.preventDefault();
                searchCat(input);
                setInput("")
            }}>
            <input
                className = "send"
                type = "submit"
                value = "Categories"
                />
            </form>
            <div className="results">
                {categories.map((cat) => {
                    return (
                        <option key={cat.id}>{cat.name}</option>
                    )
                        
                })}
            </div>
        </div>
        </FilterStyled>
    )
}
    
    
export default Categories
    
    
// <option value={cat.name}
// key = {cat.id}
// id = {cat.id}
// name = {cat.name}
// />