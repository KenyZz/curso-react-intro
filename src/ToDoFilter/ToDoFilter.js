import React from "react";
import "./ToDoFilter.css"
import searchIcon from "../assets/search-icon.svg";

function ToDoFilter({ searchValue, setSearchValue}) {
    return (
        <div className="search-container">
            <input 
            placeholder="Practicar piano, etc."
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value);}}
            />
            <img className="search-icon" src={searchIcon} alt="search icon"/>
        </div>
    )
}

export { ToDoFilter };