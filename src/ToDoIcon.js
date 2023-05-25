import { ReactComponent as CHECKSVG } from "./assets/circle-check-icon.svg";
import { ReactComponent as DELETESVG } from "./assets/circle-delete-icon.svg";

const iconTypes = {
    check: (color) => <CHECKSVG className="Icon-svg" fill={color} />,
    delete: (color) => <DELETESVG className="Icon-delete-svg" fill={color} />,
};

function ToDoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-svg check check--active close-item ${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { ToDoIcon };