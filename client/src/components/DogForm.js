import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_DOG} from '../utils/mutations'
import Auth from '../utils/auth';



const AddDogForm = () => { // set initial form state

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
        const {name, value} = event.target;


        setDogFormData({
            ...dogFormData,
            [name]: value
        });


    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        const breed = dogFormData.breed;
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const imageData = await response.json();
    
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (! token) {
            return false;
        }

        const data = await addDog({

            variables: {
              ...dogFormData, 
              image: imageData.message
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
        

    }


    return (


        <div className="relative flex flex-col justify-center min-h-screen mt-2 mb-2">
            <div className="w-full p-6 m-auto bg-base-200 rounded-md">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Your dog's info
                </h1>
                <form className="form mt-6 mb-6"
                    onSubmit={handleFormSubmit}>
                  

                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Name</span></label>
                        
                        <input type='text' name='name'
                            onChange={handleInputChange}
                            value={
                                dogFormData.name
                            }
                            required
                            className="input input-bordered w-full max-w-xs"/>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <span className="label-text"></span>
                        
                        <label className="label">
                        <span className="label-text">Breed or best guess</span></label>
                        <select className="select select-bordered" name="breed"
                            value={
                                dogFormData.breed
                            }
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
                    <label className="label">
                    <span className="label-text">A few words about them</span></label>
                        <input type='text' name='about'
                            onChange={handleInputChange}
                            value={
                                dogFormData.about
                            }
                            required
                            className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Age</span></label>
                        <select type='text' name='age'
                            onChange={handleInputChange}
                            value={
                                dogFormData.age
                            }
                            required
                            className="select select-bordered">
                            <option value="puppy">Puppy</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Are they spayed/neutered?</span></label>
                        <select type="text" name="fixed"
                            onChange={handleInputChange}
                            value={
                                dogFormData.fixed
                            }
                            required
                            className="select select-bordered w-full max-w-xs mb-4">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>


                    <button className="btn bg-info w-full"
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
