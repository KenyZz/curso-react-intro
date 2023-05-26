import { ToDoCounter } from './ToDoCounter';
import { ToDoFilter } from './ToDoFilter';
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoList } from './ToDolist';
import { TodoItem } from './ToDoItem';
import React, { useState } from 'react';
import './App.css';

/* const defaultToDo = [
  { text: "Jugar Onward", completed: false },
  { text: "Comer", completed: true },
  { text: "Ir al centro", completed: false },
];
localStorage.setItem("POPSICLETODO_V1", JSON.stringify(defaultToDo)); */

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) 
  {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else
  {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveToDos] = useLocalStorage("POPSICLETODO_V1", []);
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

  return (
    <React.Fragment>
      <header className="App-header">
        
        <ToDoCounter completed={completedToDos} total={totalToDos}/>
        <ToDoFilter 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <ToDoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => toDoComplete(todo.text)}
            onDelete={() => toDoDelete(todo.text)}/>
          ))}
        </ToDoList>

        <CreateToDoButton />

      </header>
    </React.Fragment>
  );
}

export default App;
