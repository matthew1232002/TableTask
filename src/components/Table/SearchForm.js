import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
  background-color: beige;
`;

const SearchForm = ({ onSearchHandler }) => {
  const changeHandler = (event) => {
    onSearchHandler(event.target.value);
  };

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="search by name: Sue"
        onChange={changeHandler}
        aria-label="search by name"
      />
    </div>
  );
};

export default SearchForm;
