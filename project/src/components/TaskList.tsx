import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="space-y-4">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      
      {tasks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No tasks yet. Add one above!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;