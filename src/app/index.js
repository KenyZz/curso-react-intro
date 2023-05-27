import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import './App.css';

/* const defaultToDo = [
  { text: "Jugar Onward", completed: false },
  { text: "Comer", completed: true },
  { text: "Ir al centro", completed: false },
];
localStorage.setItem("POPSICLETODO_V1", JSON.stringify(defaultToDo)); */

function App() {
  const {
    item: todos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("POPSICLE_V1", []);
  const [searchValue, setSearchValue] = useState("");
  
  const completedToDos = todos.filter(todo => !!todo.completed).length;
  const totalToDos = todos.length;

  const searchedTodos = todos.filter((todo) => {return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());});

  const toDoComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveToDos(newTodos);
  }

  const toDoDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveToDos(newTodos);
  }

  return(
    <AppUI 
      loading={loading}
      error={error}
      completedToDos = {completedToDos}
      totalToDos = {totalToDos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      toDoComplete = {toDoComplete}
      toDoDelete = {toDoDelete}
    />
  )
}

export default App;
