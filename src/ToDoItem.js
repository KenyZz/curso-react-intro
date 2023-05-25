import "./ToDoItem.css"
import { CompleteIcon } from "./CompleteIcon.js"
import { DeleteIcon } from "./DeleteIcon.js"

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="todoItem">
            <CompleteIcon 
                completed={completed}
                onComplete={onComplete}
            />
            {/* <button
                className={`check ${completed && "check--active"}`}
            ></button> */}
        <p>{text}</p>
        <DeleteIcon 
            onDelete={onDelete}
        />
            {/* <button onClick={onDelete} className="close-item"></button> */}
    </li>
    );
}


export { TodoItem };