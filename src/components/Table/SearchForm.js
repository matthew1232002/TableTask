import React from 'react';

const SearchForm = ({ onSearchHandler }) => {
  const changeHandler = (event) => {
    onSearchHandler(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search by name: Sue"
        onChange={changeHandler}
        aria-label="search by name"
      />
    </div>
  );
};

export default SearchForm;

