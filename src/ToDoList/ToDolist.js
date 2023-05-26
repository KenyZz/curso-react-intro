import "./ToDolist.css"

function ToDoList({children}) {
    return (
        <ul className="ToDolist">
            {children}
        </ul>
    );
}

export { ToDoList };