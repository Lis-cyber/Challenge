import { useState } from "react";
import Catalogue from "./Catalogue";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import axios from "axios";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { FeaturesStyled } from "../Styles/Features_styles";
import { SearchBarStyled } from "../Styles/SearchBar_style";
import Slides from "./Slides";
import Categories from "./Categories";

function Features() {
  const [error, setError] = useState(false);
  // Products ------------------------------------------->
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  const [input, setInput] = useState("");

  // Condition ------------------------------------------>
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  // Categories ----------------------------------------->
  const [categories, setCategories] = useState([]);

  // Pagination ----------------------------------------->
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirsProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Conexion Back ----------------------------------------->
  // Route --> /api/search
  // La función onSearch, hace la conexión con el back, debido a que el input ingresado por el usuario, requiere la llamada
  // a la API de mercado libre, a través de un request tipo GET por axios.
  const onSearch = (product) => {
    setInput(product);
    axios
      .get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        // Si la promesa fue resuelta, guarda los datos en Products y en ProductsResult
        setProducts(p.data);
        // Se guarda lo mismo en dos variables distintas, debido a que para realizar un filtro de productos,
        // se necesitará modificar el array de productos, pot lo cual Products queda con todos los resultados sin modificarse.
        // y de esta forma se puede retornar a los valores iniciales o al momento de seleccionar otra condición.
        // Products -> queda intacto
        // ProductsResult -> es modificado cuando se cambia el filtro
        setProductsResult(p.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  // Route --> /api/categories
  const searchCat = () => {
    axios
      .get(`http://localhost:1337/api/categories`)
      .then((categories) => {
        setCategories(categories.data);
        //setCategoriesResult(categories.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Sort ------------------------------------------------>
  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      // Slice va extrayendo cada valor del arreglo y a traves del sort compara cada dos elementos y dependiendo de la condicion, lo posiciona delante (1) o detrás (-1), dentro del arreglo.
      // Esto lo realiza, recoorriendo todos los valores una y otra vez, hasta que estén en la posición correcta.
      products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : // por defecto trae los últimos items agregados por id (por defecto al colocar Price)
          a.id > b.id
          ? 1
          : -1
      )
    );
  };

  // Filter -------------------------------------------->
  // Esta función se utiliza para filtrar productos por condición, ya sea si un producto es nuevo o usado.
  const filterProducts = (event) => {
    // La variable productCondition guarda la selección de condición
    let productCondition = event.target.value;

    // Se realiza un condicional para preguntar si el usuario quiere filtrar por productos nuevos o por productos usados
    if (productCondition === "new" || productCondition === "used") {
      // A través de useState, se guarda la condición del producto
      setCondition(productCondition);
      // Acá se modifica el estado de Products, la función filter modificará el array, guardando valores y eliminando otros.
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0
        )
      );
    } else {
      // por defecto trae los elementos según la API
      setProducts(productsResult);
    }
  };

  // Cart - AddItems ----------------------------------->
  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice(); // Clona los items del carrito dentro del estado

  const addToCart = (product) => {
    // Se crea una constante para guardar la respuesta si es que el producto esta en el carrito
    // parte con valor inicial false, para indicar que el producto no está en el carrito
    let alreadyInCart = false;
    // Utiliza el array de itemsCart (donde estan todos los productos del carrito), con el
    // forEach va uno por uno, preguntando si es que el id del item es el mismo del id del producto
    // si es igual, le suma uno al producto, y si no (que es donde entra primero), lo agrega al array
    // de itemsCart
    itemsCart.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsCart.push({ ...product, count: 1 });
    }
    setCartItems(itemsCart); // --> Actualizar estado
  };
  // Cart - RemoveItems -------------------------------->
  const removeFromCart = (product) => {
    // pregunta por cada id, si es distinto al itemId la condicion será verdadera y se 
    // guardaran en el nuevo array. Cuando la condicion sea falsa, simplemente no agregará ese producto, 
    // y de esta forma ya quedará eliminado 
    setCartItems(itemsCart.filter((x) => x.id !== product.id));
  };

  return (
    // Se le da estilo al componente Features, con su styled-component FeaturesStyled
    <FeaturesStyled>
      {/* Se le da estilo a la barra de búsqueda con un styled-component llamado SearchBarStyled */}
      <SearchBarStyled>
        {/* Se le manda por props al componente SearchBar, la función onSearch */}
        <SearchBar onSearch={onSearch} />
      </SearchBarStyled>
      <div>
        <Slides />
        {/* Al componente filter, se le envían por props, las funciones declaradas en este componente,
        como sortProducts y filterProducts*/}
        <div className="Filter_Categories">
          <Categories searchCat={searchCat} categories={categories} />
          <Filter
            count={products.length}
            sort={sort}
            condition={condition}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
            input={input}
          />
        </div>
        {/* Se divide en distintos div, para mostrar los resultados al lado izquierdo de la pantalla y el carrito al lado derecho */}
        <div className="content">
          <div className="main">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              key={"#"}
            />
            <Catalogue
              products={currentProducts}
              addToCart={addToCart}
              error={error}
            />
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              key={paginate}
            />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
      <Footer />
    </FeaturesStyled>
  );
}

export default Features;