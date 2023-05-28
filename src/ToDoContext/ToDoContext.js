import React, { createContext, useState } from "react";
import { useLocalStorage } from "../app/useLocalStorage";
import { AppUI } from "../app/AppUI";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage("POPSICLE_V1", []);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const completedToDos = todos.filter((todo) => !!todo.completed).length;
    const totalToDos = todos.length;

    const searchedTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const addToDo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveToDos(newTodos);
    }

    const toDoComplete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveToDos(newTodos);
    };

    const toDoDelete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveToDos(newTodos);
    };

    return (
        <ToDoContext.Provider
            value={{
                loading,
                error,
                completedToDos,
                totalToDos,
                searchValue,
                setSearchValue,
                searchedTodos,
                toDoComplete,
                toDoDelete,
                openModal,
                setOpenModal,
                addToDo
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider };


/* const defaultToDo = [
  { text: "Jugar Onward", completed: false },
  { text: "Comer", completed: true },
  { text: "Ir al centro", completed: false },
];
localStorage.setItem("POPSICLETODO_V1", JSON.stringify(defaultToDo)); */
