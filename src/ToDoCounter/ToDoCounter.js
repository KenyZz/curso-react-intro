import React, { useContext } from "react";
import "./ToDoCounter.css"
import { ToDoContext } from "../ToDoContext/ToDoContext";

function ToDoCounter() {
    const { 
        completedToDos,
        totalToDos,
    } = useContext(ToDoContext)
    return (
        <h1 className="ToDoCounter">
            ¡¡You complete {completedToDos} of {totalToDos} to do's!!
        </h1>
    )
}

export { ToDoCounter };