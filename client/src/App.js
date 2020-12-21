import React, { useState } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import SearchBar from './components/SearchBar';
import axios from "axios"
import Filter from "./components/Filter"
import Pagination from "./components/Pagination"


function App() {
  
  const [products, setProducts] = useState([]);
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  // Buscar para que es el setLoading
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);


  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirsProduct, indexOfLastProduct)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  // Aca se hace la conexión con el back
  // /api/search
  const onSearch = (product) => {
    axios.get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(products.slice().sort((a, b) => (
      sort === "lowest" ? 
      ((a.price > b.price)? 1 : -1):
        sort === "highest"?
      ((a.price < b.price)? 1 : -1):
      (a.title)
      ))
    )
  }

  // Falta que guarde la busqueda en cache
  const filterProducts = (state) => {
    const productCondition = state.target.value;
      if (productCondition === "new") {
        setProducts(
          products.filter((product) => product.condition === productCondition)
        );
      } else {
        setProducts(
          products.filter((product) => product.condition === productCondition)
        );
      }
    };

    return (
      
      <div>
        <Filter 
          count = {products.length}
          sort = {sort}
          condition = {condition}
          sortProducts = {sortProducts}
          filterProducts = {filterProducts}
          />
        <SearchBar onSearch = {onSearch}/>  
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        <Catalogue products = {currentProducts} loading={loading}/>
        
    </div>
  );
}

export default App;



// const filterProducts = (event) => {
//   if (event.target.value === "") {
//     setCondition(event.target.value);
//     setProducts(products);
//   } else {
//     setCondition(event.target.value);
//     setProducts(
//       products.filter(
//         (product => product.condition === event.target.value))
//     );
//   }
//   // sessionStorage.setItem("products", JSON.stringify(products))
// }; 

  // const [products, 
  //       setProducts = sessionStorage.getItem("products") ? 
  //                     sessionStorage.getItem("products", JSON.parse(products)) : [] ] = useState([]);

  // const [products, 
  //   setProducts] = useState(sessionStorage.getItem("products") ?    // (condition) ? true : false
  //                           sessionStorage.getItem("products", JSON.parse(products)) : [])
  
    
  // useEffect(() => {
  //   sessionStorage.setItem("products", products);
  // }, [products]);
                            

  // Variables para filtrar por condicion y por precio.

  // const onSearch = (product) => {
  //   cacheProducts = sessionStorage.getItem(product)

  //   if(cacheProducts){
  //     setCacheProducts(JSON.parse(cacheProducts));
  //   } else {
  //   }
  // }
