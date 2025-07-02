import './CreateTask.css';
import { LuNotebookPen } from "react-icons/lu";
import { useState } from 'react';

function CreateTask({ onInputChange, inputValue }) {
    return (
        <div className="create-task">
            <div className="icon-task-container">
                <LuNotebookPen className="icon-task" />
            </div>
            <input 
                type="text" 
                placeholder="New Task"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    );
}
export default CreateTask;