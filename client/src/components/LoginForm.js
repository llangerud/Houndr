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
            <div className= "w-full p-6 m-auto bg-base-200 rounded-md ">
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
            className="input input-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs mb-4"
          />
         </label>
         </div>
         <button
          className="btn bg-info w-full"
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
