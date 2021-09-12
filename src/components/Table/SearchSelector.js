import React from "react";
import {StyledOption, StyledTitle} from "./SearchSelector.styled";

const SearchSelector = () => {
    return (
        <div>
            <StyledTitle>
                <StyledOption>Filter by state</StyledOption>
                <StyledOption >WI</StyledOption>
                <StyledOption >TN</StyledOption>
                <StyledOption >FL</StyledOption>
                <StyledOption >NE</StyledOption>
            </StyledTitle>
        </div>
    );
}

export default SearchSelector;