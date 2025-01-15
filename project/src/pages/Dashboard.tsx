import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Header from '../components/Header';

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Welcome back, {user?.name}!
          </h1>
          <TaskInput />
          <TaskList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;