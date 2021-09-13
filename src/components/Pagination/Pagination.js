import React from 'react';
import { StyledNumber, StyledPagination } from './Pagination.styled';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <StyledPagination>
        {pageNumbers.map((number) => (
          <StyledNumber key={number} onClick={() => paginate(number)}>
            {number}
          </StyledNumber>
        ))}
      </StyledPagination>
    </div>
  );
};

export default Pagination;
