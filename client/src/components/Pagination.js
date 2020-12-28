import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <a onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;


// Verificar para eliminar el warning href="!#"

