import { ToDoCounter } from './ToDoCounter';
import { ToDoFilter } from './ToDoFilter';
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoList } from './ToDolist';
import { TodoItem } from './ToDoItem';
import React from 'react';
import './App.css';

const defaultToDo = [
  { text: "Jugar Onward", completed: false},
  { text: "Comer", completed: true },
  { text: "Ir al centro", completed: false },
  ];

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        
        <ToDoCounter completed={8} total={10}/>
        <ToDoFilter />

        <ToDoList>
          {defaultToDo.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
          ))}
        </ToDoList>

        <CreateToDoButton />

      </header>
    </React.Fragment>
  );
}

export default App;
