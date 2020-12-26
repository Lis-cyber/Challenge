import React, { useState } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import axios from "axios"
import Filter from "./components/Filter"
import Pagination from "./components/Pagination"


function App() {
  
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  

  const [condition, setCondition] = useState("");
  const [sort] = useState("");

  // Buscar para que es el setLoading
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirsProduct, indexOfLastProduct)

  // --> Pagination
  const paginate = pageNumber => setCurrentPage(pageNumber)

    // Falta que guarde la busqueda en cache
    // Aca se hace la conexión con el back
    // /api/search
  let cache = {}
  const onSearch = (product) => {
    
    // console.log("product: ", product);
    
    ///return function(product) {
      if (cache.hasOwnProperty(product)) { 
        // console.log("Cache arriba ", cache)
        return cache[product];                
      }

      else {
        axios.get(`http://localhost:1337/api/search?q=${product}`)
        .then((p) => {
          setProducts(p.data);
          setProductsResult(p.data) 
          
          // console.log("cache abajo: ", cache);
          return cache[product] = onSearch(product);
        })
        .catch((err) => {
          console.log(err)
        })
      }

    //}

  }

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts(products.slice().sort((a, b) => (
      sort === "lowest" ? 
      ((a.price > b.price)? 1 : -1):
        sort === "highest"?
      ((a.price < b.price)? 1 : -1):
      (a.title)
      ))
    )
  }

  const filterProducts = (event) => {
    let productCondition = event.target.value;

    if (productCondition === "new") {
      setCondition(productCondition)
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0 )
      )
    } 
    
    else if (productCondition === "used") {
      setCondition(productCondition)
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0 )
      )
    } 
    
    else {
      setCondition(productCondition)
      setProducts(productsResult);
    }
  }

  // -------------------------- > Cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Products ", product)
    const itemsCart = cartItems.slice(); // Clona los items del carrito dentro del estado
    let alreadyInCart = false;
    console.log("soy itemsCart ", itemsCart)
    itemsCart.forEach( item => {
      if(item.id === product.id){
        item.count++
        alreadyInCart = true
      }
    })
      if(!alreadyInCart){
        itemsCart.push({...product, count: 1})
      }
      setCartItems(itemsCart);
  }

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
        <Cart cartItems = {cartItems}/>
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        <Catalogue products = {currentProducts} addToCart = {addToCart}/>
        
    </div>
  
  );
}

export default App;
