import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../utils/mutations'
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });

  const [login] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({
        variables: {email: userFormData.email,
        password: userFormData.password}
      
      });

      if (!response) {
        throw new Error('something went wrong!');
      }

      const { token} = await response.data.login;
      Auth.login(token);

      
      } catch (err) {
      console.error(err);
    
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
   
   <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-secondary lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Login
                </h1>
                <form className="form mt-6" onSubmit={handleFormSubmit}>
        <div className="mb-2">
        <label>Email
          <input
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
            className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
          />
        </label>
        </div>
        <div className="mb-2">
        <label>Password
       <input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
            className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
          />
         </label>
         </div>
         <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          >
          Submit
        </button>
        </form>
        </div>
        </div>
    </>
  );
};

export default LoginForm;
