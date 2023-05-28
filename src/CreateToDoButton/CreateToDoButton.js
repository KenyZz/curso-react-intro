import "./CreateToDoButton.css";

function CreateToDoButton({ setOpenModal }) {
    return (
        <button className="ButtonAdd" onClick={() => {
            setOpenModal(state => !state);
            }
        }>+</button>
    )
}

export { CreateToDoButton };