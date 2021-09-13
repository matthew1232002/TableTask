import React, { useEffect, useState } from 'react';
import {
  StyledTable, StyledTd, StyledTh, StyledPaginationWrapper, StyledPaginationBtn,
} from './Table.styled';
import Pagination from '../Pagination/Pagination';

const Table = (props) => {
  const {
    filteredData, onSortHandler, field, sortType, selectedRow,
  } = props;
  const usersPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = filteredData.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    if (currentPage > Math.ceil(filteredData.length / usersPerPage)) {
      setCurrentPage(1);
      if (filteredData.length === 0) {
        setCurrentPage(1);
      }
    }
  });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev !== 6) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (prev !== 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh
              onClick={() => onSortHandler('id')}
              sortType={field === 'id' ? sortType : ''}
            >
              id
            </StyledTh>
            <StyledTh
              onClick={() => onSortHandler('firstName')}
              sortType={field === 'firstName' ? sortType : ''}
            >
              Fist name
            </StyledTh>
            <StyledTh
              onClick={() => onSortHandler('lastName')}
              sortType={field === 'lastName' ? sortType : ''}
            >
              Last name
            </StyledTh>
            <StyledTh
              onClick={() => onSortHandler('email')}
              sortType={field === 'email' ? sortType : ''}
            >
              Email
            </StyledTh>
            <StyledTh
              onClick={() => onSortHandler('phone')}
              sortType={field === 'phone' ? sortType : ''}
            >
              Phone
            </StyledTh>
            <StyledTh
              onClick={() => onSortHandler('adress.state')}
              sortType={field === 'adress.state' ? sortType : ''}
            >
              State
            </StyledTh>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((item) => (
            <tr key={item.id + item.phone} onClick={selectedRow.bind(null, item)}>
              <StyledTd>{item.id}</StyledTd>
              <StyledTd>{item.firstName}</StyledTd>
              <StyledTd>{item.lastName}</StyledTd>
              <StyledTd>{item.email}</StyledTd>
              <StyledTd>{item.phone}</StyledTd>
              <StyledTd>{item.adress.state}</StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledPaginationWrapper>
        <StyledPaginationBtn onClick={prevPage}>Prev</StyledPaginationBtn>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={filteredData.length}
          paginate={paginate}
        />
        <StyledPaginationBtn onClick={nextPage}>Next</StyledPaginationBtn>
      </StyledPaginationWrapper>
    </>
  );
};

export default Table;

// onClick={onSortHandler.bind(null, 'lastName')}
