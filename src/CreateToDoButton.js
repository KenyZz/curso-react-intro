import "./CreateToDoButton.css";

function CreateToDoButton() {
    return (
        <button className="ButtonAdd" onClick={(event => {
            console.log("click");
            console.log(event);
        })}>+</button>
    )
}

export { CreateToDoButton };