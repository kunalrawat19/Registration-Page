import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate} from "react-router-dom";

const Signin = () => {
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleRoleToggle = () => {
    setRole(role === 'User' ? 'admin' : 'user');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // prevent default form submission
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        email: formData.email,
        password: formData.password,
        role: role
      });
      console.log('Sign in successful:', response.data);
      
      
      navigate('/dashboard', { state: { firstName: response.data.data.firstName, lastName: response.data.data.lastName, role: response.data.data.role } });// Navigate to the dashboard on success
      
    } catch (error) {
      console.error('Error during sign in:', error.response?.data?.message || error.message);
    }
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
          <h2 className="text-2xl font-bold text-center mb-8">Signin as {role}</h2>
          <form onSubmit={handleSubmit}>

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
              <a href="#" className='text-fuchsia-400 font-semibold'>Forgot your password?</a>
            </div>
            <div className='w-[90%] mx-auto'> 

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-900  transition mb-8"
            >
              Signin
            </button>

            <div className='flex justify-center'>
              <p className=' font-semibold '>Don't have an account?   
                <a href="signup" className='pl-1 text-fuchsia-400'>Signup</a>
              </p>
            </div>
            </div>
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
}

export default Signin
