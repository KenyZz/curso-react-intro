import React, { useState } from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { ToDoProvider } from '../ToDoContext/ToDoContext';

function App() {

  return(
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
}

export default App;
