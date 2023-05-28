import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoFilter.css"
import searchIcon from "../assets/search-icon.svg";

function ToDoFilter() {
    const {
        searchValue,
        setSearchValue,
    } = useContext(ToDoContext)
    return (
        <div className="search-container">
            <input 
            placeholder="Practice piano, etc."
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value);}}
            />
            <img className="search-icon" src={searchIcon} alt="search icon"/>
        </div>
    )
}

export { ToDoFilter };