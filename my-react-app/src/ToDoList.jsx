import React, { useState } from 'react';
function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
       if(newTask.trim() !== "") {
        setTasks(tasks => [...tasks, newTask]);
        setNewTask("");
       }
    }
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);

    }
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>TO-DO-LIST</h1>
            <div>
                <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
                <button className='add-button'onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>

            )}
            </ol>
        </div>
    );

}
export default ToDoList