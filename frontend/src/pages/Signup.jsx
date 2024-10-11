import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate} from "react-router-dom";
const Signup = () => {
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const navigate = useNavigate();
  const handleRoleToggle = () => {
    setRole(role === 'User' ? 'admin' : 'user');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        phone: formData.phone,
        role: role
      });
      console.log('Sign up successful:', response.data);
      
      
      navigate('/dashboard', { state: { firstName: response.data.user.firstName, lastName: response.data.user.lastName, role: response.data.user.role } });// Navigate to the dashboard on success
      
    } catch (error) {
      console.error('Error during sign in:', error.response?.data?.message || error.message);
    }
    console.log(formData, role);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen  bg-indigo-300   m-auto">
      <div className="flex flex-row w-full h-[35rem] max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden ">

        {/* Image Section */}
        

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-12 md:p-8 overflow-auto font-bold">
          <div className="text-center mb-8">
            <button
              className="bg-indigo-700 text-white py-2 px-6 rounded-md hover:bg-indigo-900 transition"
              onClick={handleRoleToggle}
            >
              {role === 'User' ? 'Switch to Admin' : 'Switch to User'}
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center mb-8">Signup as {role}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-900  transition"
            >
              Signup
            </button>
          </form>
        </div>

        <div className="hidden md:flex md:w-1/2">
          <img
            src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1728544563/signup_picture_htzqnz.jpg"
            alt="Signup Visual"
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Signup;
