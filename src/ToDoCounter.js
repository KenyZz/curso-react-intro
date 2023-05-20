import "./ToDoCounter.css"

function ToDoCounter({ total,completed }) {
    return (
        <h1 className="ToDoCounter">
            ¡¡Completaste {completed} de {total} tareas!!
        </h1>
    )
}

export { ToDoCounter };