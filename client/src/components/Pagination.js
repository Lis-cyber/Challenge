import React from 'react';
import { PaginationStyled } from '../Styles/Pagination_style';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyled>
      <nav>
        <ul>
          {pageNumbers.map(number => (
              <button className="page-list" onClick={() => paginate(number)}>
              <li key={number}>
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


// Verificar para eliminar el warning href="!#"

