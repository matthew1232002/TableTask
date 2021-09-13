import React, { useState } from 'react';
import { StyledOption, StyledTitle } from './SearchSelector.styled';

const SearchSelector = ({ onSelectState }) => {
  const [selectValue, setSelectValue] = useState('');
  const handleChange = (event) => {
    setSelectValue(event.target.value);
    onSelectState(event.target.value);
  };

  return (
    <form>
      <StyledTitle value={selectValue} onChange={handleChange}>
        <StyledOption value="">Filter by state</StyledOption>
        <StyledOption value="WI">WI</StyledOption>
        <StyledOption value="TN">TN</StyledOption>
        <StyledOption value="FL">FL</StyledOption>
        <StyledOption value="NE">NE</StyledOption>
      </StyledTitle>
    </form>
  );
};

export default SearchSelector;
