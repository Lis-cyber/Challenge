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

  // <---------------- CONEXIÓN BACK -------------------->
  // Route --> /api/search
  const onSearch = (product) => {
    setInput(product);
    axios
      .get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // <------------------- FUNCIONES ---------------------->

  // Sort ------------------------------------------------>
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
      setCondition(productCondition);
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0
        )
      );
    } else {
      setCondition(productCondition);
      setProducts(productsResult);
    }
  };

  // Cart - AddItems ----------------------------------->
  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice();

  const addToCart = (product) => {
    let alreadyInCart = false;
    itemsCart.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsCart.push({ ...product, count: 1 });
    }
    setCartItems(itemsCart);
  };
  // Cart - RemoveItems -------------------------------->
  const removeFromCart = (product) => {
    setCartItems(itemsCart.filter((x) => x.id !== product.id));
  };

  return (
    <FeaturesStyled>
      <SearchBarStyled>
        <SearchBar onSearch={onSearch} />
      </SearchBarStyled>
      <div>
        <Slides />
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
