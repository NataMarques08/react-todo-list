import { useState } from 'react';
import Button from '../button/Button';
import CreateTask from '../createtask/CreateTask';
import './AddTask.css';


function AddTask({ onAddTask }) {

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);


    const handleAddTask = () =>{
        if(inputValue.trim() === '') return;

        setTasks(prevTasks => [...prevTasks, inputValue]);
        onAddTask(inputValue);
        setInputValue('');
    }


    return (
        <div className="add-task">
            <CreateTask inputValue={inputValue} onInputChange={setInputValue}/>
            <Button width="100%" onClick={handleAddTask}>Add new task</Button>
            {console.log(tasks)}
        </div>
    )
}
export default AddTask;