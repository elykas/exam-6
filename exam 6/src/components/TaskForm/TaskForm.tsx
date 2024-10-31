import React, { useState } from 'react'
import "./TaskForm.css"

interface TaskFormProps{
    addTask:(name: string, status: string, priority: string, description: string)=>Promise<void>;
}

const TaskForm:React.FC<TaskFormProps> = ({addTask}) => {


    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<string>("Pending"); 
    const [priority, setPriority] = useState<string>("Low"); 
    const [description, setDescription] = useState<string>(""); 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!name.trim()) 
            return;
        addTask(name, status, priority, description);
        setName("");
        setDescription("");
    };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type='submit'>Add</button>
        </form>
  )
}

export default TaskForm