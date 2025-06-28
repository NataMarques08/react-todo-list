import AddTask from '../addtask/AddTask';
import Tasks from '../tasks/Tasks';
import './Display.css';

function Display(){
    return (
        <div className="display"> 
            <h1>Todo Input</h1>
            <AddTask/>
            <Tasks/>
        </div>
    )
}
export default Display;