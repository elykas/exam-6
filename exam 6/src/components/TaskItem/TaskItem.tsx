import React from "react";
import { Task, Status } from "../../types/types";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: string) => void;
  toggleStatus: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleStatus,
  deleteTask,
}) => {
    const getBackgroundColor = () => {
        switch (task.status) {
            case Status.completed:
                return 'green';
            case Status.inProgress:
                return 'yellow';
            default:
                return 'red';
        }
    };
  return (
    <li className="task-item" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="task-fields">
        <p>{task.name}</p>
        <p>{task.status}</p>
        <p>{task.priority}</p>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task._id)}>Delete</button>

      {task.status !== Status.completed && (
        <button
          onClick={() => toggleStatus(task._id)}
        >
          Progress
        </button>
      )}
    </li>
  );
};

export default TaskItem;
