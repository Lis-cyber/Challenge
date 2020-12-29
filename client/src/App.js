import React, { useState, useEffect } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import axios from "axios"
import Filter from "./components/Filter"
import Pagination from "./components/Pagination"

// Redux ---------------------------------------------->
// import { useDispatch, useSelector } from 'react-redux'
// import { Provider } from "react-redux"
// import store from "./redux/store"
// import { getProducts } from "./redux/actions"


function App() {
  // Redux ---------------------------------------------->
  // const selector = useSelector()
  
  
  
  
  // Products ------------------------------------------->
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  // Condition ------------------------------------------>
  const [condition, setCondition] = useState("");
  const [sort] = useState("");
  
  // Pagination ----------------------------------------->
  // Buscar para que es el setLoading
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirsProduct, indexOfLastProduct)
  
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  // Falta que guarde la busqueda en cache
    // Aca se hace la conexión con el back
    // /api/search
    const onSearch = (product) => {
    //   const dispatch = useDispatch();
    //   const search = useSelector(({ products }) => products.search);
    //   const status = useSelector(({ products }) => products.status);
    // useEffect(() => {
    //   dispatch(getProducts(product))
    // }, [product])
      axios.get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
        setProductsResult(p.data) 
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // Sort ---------------------------------------------->

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

  // Filter -------------------------------------------->
  const filterProducts = (event) => {
    let productCondition = event.target.value;

    if (productCondition === "new" || productCondition === "used") {
      setCondition(productCondition)
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0 )
      )
    } else {
      setCondition(productCondition)
      setProducts(productsResult);
    }
  }

  // Cart - AddItems -----------------------------------> 
  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice(); // Clona los items del carrito dentro del estado

  const addToCart = (product) => {
    let alreadyInCart = false;
    itemsCart.forEach( item => {
      if(item.id === product.id){
        item.count++
        alreadyInCart = true
      }
    })
      if(!alreadyInCart){
        itemsCart.push({...product, count: 1})
      }
      setCartItems(itemsCart); // --> Actualizar estado
  }
  // Cart - RemoveItems --------------------------------> 
  const removeFromCart = (product) => {
    setCartItems(itemsCart.filter((x) => x.id !== product.id))
  }


  return (
    // <Provider store={store}>
      <div>
        <Filter 
          count = {products.length}
          sort = {sort}
          condition = {condition}
          sortProducts = {sortProducts}
          filterProducts = {filterProducts}
          />
        <SearchBar onSearch = {onSearch}/>  
        <Cart cartItems = {cartItems} removeFromCart={removeFromCart}/>
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        <Catalogue products = {currentProducts} addToCart = {addToCart}/>
      </div>
    // </Provider>
  );
}

export default App;
