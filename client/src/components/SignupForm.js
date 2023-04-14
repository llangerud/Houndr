import React, { useState } from 'react';

import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations'
import Auth from '../utils/auth';
// import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', zip: '' });

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

   
    try {
      const {data, error} = await addUser({
        
        variables: {...userFormData}})

      if (error) {
        throw new Error(error.message);
      }
     
      const {token} = data.addUser;
      Auth.login(token);
      
    } catch (err) {
      console.error(err);
      
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      zip: ''
    });



  };


  return (
    <>
       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className= "w-full p-6 m-auto bg-base-200 rounded-md ">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Create an account
                </h1>
      <form className="form mt-6" onSubmit={handleFormSubmit}>
          
          <div className="mb-2">
          <label>Username
          <input
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
            className="input input-bordered w-full max-w-xs"
          />
          </label>
         </div>
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
            className="input input-bordered w-full max-w-xs"
          />
         </label>
         </div>
         <div className="mb-2">
         <label>Zip Code
       <input
            type='text'
            maxLength="5" autoComplete="postal-code" pattern="^([0-9]{5})$"
            placeholder='Your zip code'
            name='zip'
            onChange={handleInputChange}
            value={userFormData.zip}
            required
            className="input input-bordered w-full max-w-xs mb-4"
          />
         </label>
         </div>
       
        <button
          className="btn bg-info w-full"
          disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.zip)}
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

export default SignupForm;
