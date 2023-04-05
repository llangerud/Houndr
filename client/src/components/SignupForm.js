import React, { useState } from 'react';

import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations'
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', zip: '' });
  // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

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
      console.log(data)
      const {token} = data.addUser;
      Auth.login(token);
    
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
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
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-secondary lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Create an account
                </h1>
      <form className="form mt-6" onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <div className="mb-2">
          <label>Username
          <input
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
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
            className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
          />
         </label>
         </div>
       
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
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
