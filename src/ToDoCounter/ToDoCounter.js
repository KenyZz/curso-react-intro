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
            ¡¡Completaste {completedToDos} de {totalToDos} tareas!!
        </h1>
    )
}

export { ToDoCounter };