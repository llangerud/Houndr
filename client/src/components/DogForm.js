import React, { useState, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_DOG} from '../utils/mutations'
import Auth from '../utils/auth';
// import { redirect } from 'react-router-dom';

const AddDogForm = () => {
    // set initial form state
    const [dogFormData, setDogFormData] = useState({ name: '', breed: '',about: '', age: '', fixed: '', image: ''});

    const [breedOptions, setBreedOptions] = useState([]);

  
useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(data => data.json())
    .then((dogs) => {
    // using Object.keys to get the dog names out of the message object returned from fetch request
    const keys = Object.keys(dogs.message);
    setBreedOptions(keys)
})
//second argument here to avoid rerunning fetch request if not necessary
}, []);
    
    const [addDog] = useMutation(ADD_DOG);
  
    const handleInputChange = (event) => {
      console.log(event.target.name, event.target.value);
      const { name, value } = event.target;
      setDogFormData({ ...dogFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(dogFormData.breed)
      fetch(`https://dog.ceo/api/breed/${dogFormData.breed}/images/random`)
      .then(data => data.json())
      .then((data) => { setDogFormData ({...dogFormData, image:data.message})});

      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

      console.log(dogFormData);
      const imageString = dogFormData.image
      if (imageString !== '') {
            
        const data = await addDog({
          
          variables: {
            dog: {
            ...dogFormData
            }
          },
          context: {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
          });
  
        if (data) {
            setDogFormData({
        name: '',
        breed: '',
        about: '',
        age: '',
        fixed: '',
        image: ''

      
      });   
    
        
        console.log(data)

               
    

 
   
  }
     

      }      
   
    
}
return (


<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-secondary lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-primary">
        Your dog's info
    </h1>
    <form className="form mt-6" onSubmit={handleFormSubmit}  key={Date.now()}>
<div className="mb-2">
<label>Name
<input
type='text'
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
<div className="form-control w-full max-w-xs">
    <label className="label">
    <span className="label-text">I'm looking for a</span>
    <span className="label-text-alt">dog breed select</span>
  </label>
  <select className="select select-bordered" name="breed" value={dogFormData.breed} onChange={handleInputChange}>
    <option disabled>Breed</option>
{/* Generate option for each dog */}
{breedOptions.map((breed, index) => (
          <option name={breed} key={index} value={breed}>
            {breed}
            </option>
            ))}
    </select>
  </div>
</div>
<div className="mb-2">
<label>about
<input
type='about'
placeholder='a quick sentence or two about your dog'
name='about'
onChange={handleInputChange}
value={dogFormData.about}
required
className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
/>
</label>
</div>
<div className="mb-2">
<label>age
<input
type='age'
placeholder='your dog`s age'
name='age'
onChange={handleInputChange}
value={dogFormData.age}
required
className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
/>
</label>
</div>
<div className="mb-2">
<label>Fixed
<input
type='fixed'
placeholder='your dog`s status'
name='fixed'
onChange={handleInputChange}
value={dogFormData.fixed}
required
className="block w-full px-4 py-2 mt-2 text-indigo-700  bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none"
/>
</label>
</div>
<button
className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
disabled={!(dogFormData.name && dogFormData.about && dogFormData.age && dogFormData.fixed)}
type='submit'
>
Submit
</button>
</form>
</div>
</div>

);
};

export default AddDogForm;