import './Tasks.css';
import Button from '../button/Button.jsx';
import Todo from '../todo/Todo.jsx';

function Tasks(){
    return (
        <div className="tasks-main-container">
             <h1>To Do List</h1>
            <div className="tasks-header">
                <Button width="50%">All</Button>
                <Button width="50%">Done</Button>
                <Button width="50%">Todo</Button>
            </div>
            <div className="tasks-container">
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </div>
            <div className="tasks-buttons-footer">
                <Button width="100%" background="#db3345">Add Task</Button>
                <Button width="100%" background="#db3345">Clear All</Button>
            </div>

        </div>
    )
}
export default Tasks;