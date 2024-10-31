import React from 'react'
import { Task } from '../../types/types'
import TaskItem from '../TaskItem/TaskItem';
import "./TaskList.css"

interface TaskListProps{
    tasks:Task[]
    deleteTask:(id:string) => void;
    toggleStatus : (id:string) => void;
}

const TaskList:React.FC<TaskListProps> = ({tasks,toggleStatus: toggleStatus,deleteTask}) => {

    


  return (
    <div className='tasks-list'>
        <ul>
            {tasks.map((task) => (
                <TaskItem 
                    key = {task._id}
                    task = {task}
                    toggleStatus = {toggleStatus}
                    deleteTask = {deleteTask}
                />
            ))}
        </ul>
    </div>
  )
}

export default TaskList