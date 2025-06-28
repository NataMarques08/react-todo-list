import Button from '../button/Button';
import CreateTask from '../createtask/CreateTask';
import './AddTask.css';

function AddTask(){
    return (
        <div className="add-task">
            <CreateTask />
            <Button width="100%" onClick={''}>Add new task</Button>
        </div>
    )
}
export default AddTask;