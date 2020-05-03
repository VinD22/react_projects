import React, { useState, createContext } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = () => {

    const [tasks, setTasks] = useState([
        { task: 'Read a book', id: 1 },
        { task: 'Exercise', id: 2 },
        { task: 'Code', id: 3 }
    ])

    return (
        <div>Task List Context</div>
    )
}

export default TaskListContextProvider; 
