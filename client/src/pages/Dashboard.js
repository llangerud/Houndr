import React from 'react';
import { useState, useEffect } from "react";


const Dashboard = () => {

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

const handleDogSelect = (e) => {
    console.log(e.target.value)
}


function showSearchResults(e) {
//this will run the query and show the results
    e.preventDefault();
    console.log('formsubmitted')
}


    return (

//two columns, second column drops below first on mobile, second column will display search results (if no search has taken place, display results that match zip only)
    <div class="grid grid-cols-1 sm:grid-cols-2 ">
    <form onSubmit = {showSearchResults} class="m-8">
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
    <option>puppy</option>
    <option>adult</option>
    <option>senior</option>
    </select>
</div>
<button className="btn btn-accent mt-4">find my new friends</button>
</form>

 

</div>


  
        );
    }

    export default Dashboard;