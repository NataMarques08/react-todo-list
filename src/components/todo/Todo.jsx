import './Todo.css';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Todo({ task }){
    return (
        <div className="todo-main-container">
            <h3>{ task }</h3>
            <div className="todo-actions">
                <input type="checkbox"/>
                <FaPencilAlt />
                <FaTrash />
            </div>
         
        </div>
    )
}
export default Todo;