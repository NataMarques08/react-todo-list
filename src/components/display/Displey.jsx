import { useState } from 'react';
import AddTask from '../addtask/AddTask';
import Tasks from '../tasks/Tasks';
import './Display.css';

function Display(){

    const[tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };


    return (
        <div className="display"> 
            <h1>Todo Input</h1>
            <AddTask onAddTask={handleAddTask}/>
            <Tasks tasks={tasks}/>
        </div>
    )
}
export default Display;