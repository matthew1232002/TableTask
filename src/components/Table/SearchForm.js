import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  background-color: beige;
`;

const SearchForm = (props) => {


    const changeHandler = (event) => {
        const value = event.target.value;
        props.onSearchHandler(value);
    }


    return (
        <div>
            <StyledInput type='text' placeholder='search by name: Sue' onChange={changeHandler}/>
        </div>
    )
}

export default SearchForm;