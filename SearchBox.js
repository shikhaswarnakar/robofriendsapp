import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="tc pa2">
            <input
            onChange={searchChange}
            className="pa2 ba b--green bg-lightest-blue" 
            type="text" 
            placeholder="Search robots here.." 
            />
        </div>
    )
}

export default SearchBox;