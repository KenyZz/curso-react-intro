import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoFilter } from '../ToDoFilter/ToDoFilter';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';
import { ToDoList } from '../ToDoList/ToDolist';
import { TodoItem } from '../ToDoItem/ToDoItem';
import { ToDoLoading } from '../ToDoLoading/ToDoLoading';
import { ToDoError } from '../ToDoError/ToDoError';
import { ToDoEmpty } from '../ToDoEmpty/ToDoEmpty';
import React, { useContext } from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { ToDoBox } from "../ToDoBox/ToDoBox"
import { Modal } from '../Modal/AllModal';

function AppUI() {
    const {
        openModal,
        setOpenModal,
    } = useContext(ToDoContext);
    
    return (
        <React.Fragment>
            <header className="App-header">
                <ToDoCounter />
                <ToDoFilter />

                <ToDoContext.Consumer>
                    {({
                        loading,
                        error,
                        searchedTodos,
                        toDoComplete,
                        toDoDelete,
                        openModal,
                        setOpenModal,
                    }) => (
                        <ToDoList>
                            {loading && <ToDoLoading />}
                            {error && <ToDoError />}
                            {!loading && searchedTodos.length === 0 && <ToDoEmpty />}

                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => toDoComplete(todo.text)}
                                    onDelete={() => toDoDelete(todo.text)}
                                />
                            ))}
                        </ToDoList>
                    )}
                </ToDoContext.Consumer>

                <CreateToDoButton 
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                    <Modal>
                        <ToDoBox />
                    </Modal>
                )}
            </header>
        </React.Fragment>
    );
}

export { AppUI };