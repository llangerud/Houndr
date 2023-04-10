import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_DOG} from '../utils/mutations'
import Auth from '../utils/auth';
// import { redirect } from 'react-router-dom';



const AddDogForm = () => { // set initial form state
    
  const[dogImage, setImage] = useState({URL: ""});
  const [dogFormData, setDogFormData] = useState({
        name: '',
        breed: 'affenpinscher',
        about: '',
        age: 'puppy',
        fixed: 'yes',
        image: ''
    });

    const [breedOptions, setBreedOptions] = useState([]);
    
   

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/list/all`).then(data => data.json()).then((dogs) => { // using Object.keys to get the dog names out of the message object returned from fetch request
            const keys = Object.keys(dogs.message);
            setBreedOptions(keys)
            
        })
        // second argument here to avoid rerunning fetch request if not necessary
    }, []);

    const [addDog] = useMutation(ADD_DOG);

    const handleInputChange = (event) => {
        // console.log(event.target.name, event.target.value);
        const {name, value} = event.target;


        
            setDogFormData({
            ...dogFormData,
            [name]: value
        });

      
       
  //  const imageReceived = await fetch(`https://dog.ceo/api/breed/${dogFormData.breed}/images/random`)
  //       .then(data => data.json())
  //       .then((data) => { setImage ({URL:data.message})});

    
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(dogFormData.breed)

       console.log('formsubmit')
          // async function getDogImage (breed) {

          const breed = dogFormData.breed;
          const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const imageData = await response.json();
          console.log(imageData.message)
          if (imageData) {
          setImage({
            URL: imageData.message
            });
          }
        //   return response
        // }

        
        // getDogImage(breed)   
           
        // console.log(dogData);
        // console.log (dogData.message)
        // const imageString = dogData.message;
    
        console.log('thelineaftergetDogImage')

        // console.log(dogFormData);
        console.log(dogImage)

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (! token) {
            return false;
        }

       
    
        // const imageString = dogFormData.image
       console.log(dogImage.URL)
       console.log(dogFormData);

            const data = await addDog({

                variables: {
                 name: dogFormData.name,
                 breed: dogFormData.breed,
                 about: dogFormData.about,
                 image: dogImage.URL,
                 age: dogFormData.age,
                 fixed: dogFormData.fixed
                },
                context: {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            });

            if (data) {
              
                alert('Got it! Add another dog or click the x to close');
                setDogFormData({
                    name: '',
                    breed: 'affenpinscher',
                    about: '',
                    age: 'puppy',
                    fixed: 'yes',
                    image: ''


                });

                  }
                console.log(data)

    }

 
    
    return (


        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md ">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Your dog's info
                </h1>
                <form className="form mt-6 mb-6"
                    onSubmit={handleFormSubmit}>
                    {/* key={Date.now()} */}
                       
                        <div className="form-control w-full max-w-xs">
                        <label className="text-base-100" >Name</label>
                            <input type='text' name='name'
                                onChange={handleInputChange}
                                value={
                                    dogFormData.name
                                }
                                required
                                className="input w-full max-w-xs"/>
                    
                    </div>
                    
                        <div className="form-control w-full max-w-xs">
                                <span className="label-text"></span>
                                <span className="label-text-alt">dog breed select</span>
                                <label className="text-base-100" >Breed (just guess, this isn't the AKC)</label>
                            <select className="select select-bordered" name="breed"
                                value={dogFormData.breed}
                                onChange={handleInputChange}>
                                <option disabled>Breed</option>
                                {/* Generate option for each dog */}
                                {
                                breedOptions.map((breed, index) => (
                                    <option name={breed}
                                        key={index}
                                        value={breed}>
                                        {breed} </option>
                                ))
                                
                               
                            } </select> 
                            
                        </div>
                 
                 
                    <div className="form-control w-full max-w-xs">
                        <label className="text-base-100">a few words about them</label>
                            <input type='text'  name='about'
                                onChange={handleInputChange}
                                value={
                                    dogFormData.about
                                }
                                required
                                className="input w-full max-w-xs"/>
                     </div>   
                    
                     <div className="form-control w-full max-w-xs">
                        <label className="text-base-100">age</label>
                            <select type='text' name='age'
                                onChange={handleInputChange}
                                value={dogFormData.age}
                                required
                                className="select select-bordered">
                                <option value="puppy">Puppy</option>
                                <option value="adult">Adult</option>
                                <option value="senior">Senior</option>
                           </select>  
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="text-base-100">Are they spayed/neutered?</label>
                            <select type="text" name="fixed" 
                                onChange={handleInputChange}
                                value={dogFormData.fixed}
                                required
                                className="select w-full max-w-xs">
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                        </select>     
                    </div>
                
                    
                    <button className="w-full px-4 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-info rounded-md hover:bg-base-100 focus:outline-none focus:bg-base-100"
                        disabled={
                            !(dogFormData.name && dogFormData.about && dogFormData.age && dogFormData.fixed)
                        }
                        type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddDogForm;


