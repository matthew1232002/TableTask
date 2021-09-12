import React from "react";

const SearchForm = (props) => {



    const changeHandler = (event) => {
        const value = event.target.value;
        props.onSearchHandler(value);
    }


    return (
        <div>
            <input type='text' placeholder='search by name: Sue'  onChange={changeHandler}/>
        </div>
    )
}

export default SearchForm;