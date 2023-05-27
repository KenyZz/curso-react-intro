import React from "react";
import "./ToDoLoading.css"

function ToDoLoading() {
    return (
        <div className="loading-box">
            <div className="loading-animation"></div>
            <p className="text-loading">Enviando mensaje a la NASA... Bromi, cargando...</p>
            <span className="loader"></span>
        </div>
    )
}

export { ToDoLoading };