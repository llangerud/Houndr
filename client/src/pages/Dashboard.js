import React from 'react';
import { useState, useEffect } from "react";
import {FIND_DOGS} from '../utils/queries'
import {useQuery} from '@apollo/client';


const Dashboard = () => {

const [breedOptions, setBreedOptions] = useState([]);

const [dogFormData, setDogFormData] = useState({
    breed: 'affenpinscher',
    age: 'puppy',
  });

// const [UserDetails, setUserDetails] = useState([]);


console.log(dogFormData.breed)
const selectedBreed =dogFormData.breed

const {loading, data} = useQuery(FIND_DOGS, {
variables: {breed:selectedBreed }
});

// console.log(error)

console.log(data)

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

const handleDogSelect = (e) => {
    // console.log(e.target.value)
    const {name, value} = e.target;
    setDogFormData({
        ...dogFormData,
        [name]: value
    });
}


const showSearchResults = async (e) => {
//this will run the query and show the results
    e.preventDefault();
  
    // console.log({...dogFormData})

}

if (loading) {
  return <div>loading...</div>
}

    return (

//two columns, second column drops below first on mobile, second column will display search results (if no search has taken place, display results that match zip only)
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
    <form onSubmit = {showSearchResults} className="m-8">
    <div className="form-control w-full max-w-xs">
    <label className="label">
    <span className="label-text">I'm looking for a</span>
    <span className="label-text-alt"></span>
  </label>
  <select className="select select-bordered" id="breedMenu" onChange={handleDogSelect}>
{/* Generate option for each dog */}
{breedOptions.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
            </option>
            ))}
    </select>
  </div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"></span>
     </label>
  <select className="select select-bordered">
    <option value="puppy">puppy</option>
    <option value="adult">adult</option>
    <option value="senior">senior</option>
    </select>
</div>
<button className="btn btn-accent mt-4">find my new friends</button>
</form>

 

</div>


  
        );
    }

    export default Dashboard;