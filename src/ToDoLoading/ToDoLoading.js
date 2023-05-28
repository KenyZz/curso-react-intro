import React from "react";
import "./ToDoLoading.css"

function ToDoLoading() {
    return (
        <div className="loading-box">
            <div className="loading-animation"></div>
            <p className="text-loading">Starting autodestruction in 10... Joke, loading...</p>
            <span className="loader"></span>
        </div>
    )
}

export { ToDoLoading };