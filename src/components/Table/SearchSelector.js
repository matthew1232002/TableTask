import React from "react";
import {StyledOption, StyledTitle} from "./SearchSelector.styled";

const SearchSelector = ({onSelectState}) => {

    return (

        <StyledTitle onChange={(event) => {
            if (event.target.value === 'Filter by state') {
                onSelectState(null)
            } else {
                onSelectState(event.target.value)
            }

        }
        }>
            <StyledOption>Filter by state</StyledOption>
            <StyledOption>WI</StyledOption>
            <StyledOption>TN</StyledOption>
            <StyledOption>FL</StyledOption>
            <StyledOption>NE</StyledOption>
        </StyledTitle>

    );
}

export default SearchSelector;