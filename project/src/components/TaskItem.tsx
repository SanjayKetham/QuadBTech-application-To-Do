import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../store/slices/taskSlice';
import { Task } from '../types';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import clsx from 'clsx';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(toggleTask(task.id))}
            className="focus:outline-none"
          >
            {task.completed ? (
              <CheckCircle className="h-6 w-6 text-indigo-600" />
            ) : (
              <Circle className="h-6 w-6 text-gray-400" />
            )}
          </button>
          
          <div>
            <h3 className={clsx(
              "text-lg font-medium",
              task.completed && "line-through text-gray-400"
            )}>
              {task.title}
            </h3>
            
            <div className="flex items-center space-x-2 mt-1">
              <span className={clsx(
                "px-2 py-1 rounded-full text-xs font-medium",
                priorityColors[task.priority]
              )}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              
              <span className="text-sm text-gray-500">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => dispatch(removeTask(task.id))}
          className="p-2 text-gray-400 hover:text-red-500 focus:outline-none"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;