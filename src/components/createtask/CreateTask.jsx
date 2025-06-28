import './CreateTask.css';
import { LuNotebookPen } from "react-icons/lu";

function CreateTask() {
    return (
        <div className="create-task">
            <div className="icon-task-container">
                <LuNotebookPen className="icon-task" />
            </div>
            <input type="text" placeholder="New Task"/>
        </div>
    );
}
export default CreateTask;