import { PaginationStyled } from "../Styles/Pagination_style";

// Este componente Pagination, se creó para mostrar todos los resultados de producto, pero en distintas páginas.
// le llegan por props, las variables productsPerPage (productos por página), totalProducts(productos totales) y paginate, que
// es la función que muestra la página actual de productos.
const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  // Se define un array vacío, que contendrá el número de páginas
  const pageNumbers = [];

  // Se hace un ciclo for para determinar cuantas paginas se necesitan para abarcar la totalidad de productos, esto se realiza
  // diviendo los productos totales por los productos por página.
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyled>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <button
              className="page-list"
              onClick={() => paginate(number)}
              key={number}
            >
              <li key={number}>
                {/* y acá se van mostrando todos los números de las páginas, a través de un map */}
                {number}
              </li>
            </button>
          ))}
        </ul>
      </nav>
    </PaginationStyled>
  );
};

export default Pagination;
