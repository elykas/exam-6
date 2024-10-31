import React, { useEffect, useState } from 'react'
import { Task } from '../../types/types';
import axios from 'axios';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import "./TasksApp.css"
const BASE_URL = `${import.meta.env.VITE_API_URL}`;

const TasksApp:React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getTasks = async () => {
        try {
          
          setError(null);
          const response = await axios.get<Task[]>(BASE_URL);
          setTasks(response.data);
        } catch (error) {
          console.error(error);
          setError("Failed to load tasks. Please try again later.");
        } 

     
    };

    useEffect(() => {
        getTasks();
      }, []);
    


    const addTask = async (name: string, status: string, priority: string, description: string) => {
      
        try {
            const response = await axios.post<Task>(BASE_URL, {
                name,
                status,
                priority,
                description
            });
          
            getTasks();
        } catch (error) {
            console.error(error);
        }
    };

      const deleteTask = async (id: string): Promise<void> => {
        try {
          await axios.delete(`${BASE_URL}/${id}`);
          getTasks();
        } catch (error) {
          console.error(error);
        }
      };


      const toggleStatus = async (id: string): Promise<void> => {
        try {
          await axios.post<Task>(`${BASE_URL}/progress/${id}`);
          getTasks();
        } catch (error) {
          console.error(error);
        }
      };
    


  return (
    <div className='tasks-app'>
        <h1>Tasks Managment</h1>
        <TaskForm addTask={addTask} />
        {error ? (
        <div className="error-message">{error}</div>
      ) : <TaskList tasks ={tasks} deleteTask = {deleteTask} toggleStatus={toggleStatus}/>}
    </div>
  )
}

export default TasksApp