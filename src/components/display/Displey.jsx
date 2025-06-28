import AddTask from '../addtask/AddTask';
import Tasks from '../tasks/Tasks';
import './Display.css';

function Display(){
    return (
        <div className="display"> 
            <h1>To Do List</h1>
            <AddTask/>
            <Tasks/>
        </div>
    )
}
export default Display;