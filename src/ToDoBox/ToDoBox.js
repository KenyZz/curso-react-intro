import React, { useContext, useState } from "react";
import "./ToDoBox.css"
import { ToDoContext } from "../ToDoContext/ToDoContext";

function ToDoBox(){
    const {
        addToDo,
        setOpenModal,
    } = useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>¡Make a new To'Do!:</label>
            <textarea 
                placeholder="Meeting with the company, Go to the store, etc."
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="button-container">
                <button type="button" onClick={onCancel} className="ToDoBox-button ToDoBox-button--cancel">Cancel</button>
                <button className="ToDoBox-button ToDoBox-button--done">Add</button>
            </div>
        </form>
    )
}

export { ToDoBox };