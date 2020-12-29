import React, { useState } from 'react';
import Catalogue from './Catalogue';
import SearchBar from './SearchBar';
import Cart from './Cart';
import axios from "axios"
import Filter from "./Filter"
import Pagination from "./Pagination"

function Features() {

  // Products ------------------------------------------->
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  const [input, setInput] = useState("");
  
  // Condition ------------------------------------------>
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");
  
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
      setInput(product)
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
    setSort(sort);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
              // Ordena por id (por defecto al colocar Price)
            : a.id > b.id
            ? 1
            : -1
         )
    );
  };

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
        <SearchBar onSearch = {onSearch}/>
        {/* Este div "contiene Cart y filter" */}
        <div>
          <div>
            <Filter 
              count = {products.length}
              sort = {sort}
              condition = {condition}
              sortProducts = {sortProducts}
              filterProducts = {filterProducts}
              input = {input}
              />
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
            <Catalogue products = {currentProducts} addToCart = {addToCart}/>
            <Pagination key={"#"} productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
          </div>
          <div>
            <Cart cartItems = {cartItems} removeFromCart={removeFromCart}/>
          </div>
        </div>
      </div>
    // </Provider>
  );
}

export default Features;

  
  // // <Provider store={store}>
  //   // <BrowserRouter>
  //   {/* Un componente para mostrar la pagina principal */}
  //   {/* por ejemplo <Home /> */}
  //   {/* dentro de home, tener otro componente que tenga todo lo que tiene App */}
  //   // <Home />
  //   {/* Este componente home solo tendra diseño */}
  //   {/* Tendra un boton para acceder a la plataforma */}
  