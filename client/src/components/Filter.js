import React from 'react'

function Filter(props) {
  return (
    <div>
    <div>{props.count} Products</div>
    <div>
        Order by price {" "}
        <select value={props.sort} onChange={props.sortProducts}>
            <option>All</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
        </select>
    </div>
    <div>
        Order by condition {" "}
        <select value={props.condition} onChange={props.filterProducts}>
            <option value="">All</option>
            <option value="new">New</option>
            <option value="used">Used</option>
        </select></div>
</div>
  )
}

export default Filter;
