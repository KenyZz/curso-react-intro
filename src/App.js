import { ToDoCounter } from './ToDoCounter';
import { ToDoFilter } from './ToDoFilter';
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoList } from './ToDolist';
import { TodoItem } from './ToDoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ToDoCounter />
        <ToDoFilter />

        <ToDoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ToDoList>

        <CreateToDoButton />

      </header>
    </div>
  );
}

export default App;
