import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTask] = useState(['learn react', 'learn DL', 'PS', 'Quant'])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {

    }
    const removeTask = () => {

    }
    const moveUp = (index) => {

    }
    const moveDown = (index) => {

    }
    return (
        <div className='todo-list'>
            <h1>My todos</h1>

            <div >
                <input type="text"
                    placeholder='Enter task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Add task</button>
            </div>

            <div className="task-list">
                <ul>
                    {tasks.map((task, index) => (
                        // A unique 'key' prop is required for list items
                        <li key={index}>
                            <span> {task}</span>

                            <button onClick={removeTask}><i class="fa fa-trash" aria-hidden="true"></i> </button>
                            <button onClick={moveUp}> <i class="fa fa-level-up" aria-hidden="true"></i></button>
                            <button onClick={moveDown}> <i class="fa fa-level-down" aria-hidden="true"></i></button>

                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default TodoList
