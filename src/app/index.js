import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoFilter } from '../ToDoFilter/ToDoFilter';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';
import { ToDoList } from '../ToDoList/ToDolist';
import { TodoItem } from '../ToDoItem/ToDoItem';
import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import './App.css';

/* const defaultToDo = [
  { text: "Jugar Onward", completed: false },
  { text: "Comer", completed: true },
  { text: "Ir al centro", completed: false },
];
localStorage.setItem("POPSICLETODO_V1", JSON.stringify(defaultToDo)); */

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
