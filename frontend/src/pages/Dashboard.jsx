import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { firstName, lastName, role } = location.state || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-hero bg-cover bg-center">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-16 max-w-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome, {firstName} {lastName}
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          You are successfully logged in as a <span className="font-semibold text-indigo-600">{role}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

