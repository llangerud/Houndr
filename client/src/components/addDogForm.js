import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {ADD_DOG} from '../utils/mutations'

const addDogForm = () => {
    // set initial form state
    const [dogFormData, setDogFormData] = useState({ name: '', breed: '',about: '', age: '', fixed: ''});
    
    // const navigate = useNavigate();
    const [addDog] = useMutation(ADD_DOG);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setDogFormData({ ...dogFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
     
      try {
        const {data, error} = await addDog({
          
          variables: {...dogFormData}})
  
        if (error) {
          throw new Error(error.message);
        }
        console.log(data)

               
      } catch (err) {
        console.error(err);
      }
  
      setDogFormData({
        username: '',
        email: '',
        password: '',
        zip: ''
      });
  
      //takes you to your dashboard
      // navigate("/dashboard");
  
  
  

    };

return (


<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-secondary lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-primary">
        Login
    </h1>
    <form className="form mt-6" onSubmit={handleFormSubmit}>
<div className="mb-2">
<label>Email
<input
type='name'
placeholder='your dog`s name'
name='name'
onChange={handleInputChange}
value={dogFormData.name}
required
className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
/>
</label>
</div>
<div className="mb-2">
{/* 
this needs to be the drop down with the breeds from the fetch request
<label>Breed
<input
type='password'
placeholder='Your password'
name='password'
onChange={handleInputChange}
value={userFormData.password}
required
className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
/> */}
{/* </label> */}
</div>
<button
className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
disabled={!(dogFormData.name && dogFormData.email && dogFormData.password && dogFormData.zip)}
type='submit'
>
Submit
</button>
</form>
</div>
</div>

);
};

export default addDogForm;