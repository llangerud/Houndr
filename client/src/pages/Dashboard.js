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



// {/* //display below that runs a search for zip codes nearby and displays those photos */}
//button that says "Add my dog!"


    return (


 <div>
    
   
    <form onSubmit = {showSearchResults}>
    <div className="form-control w-full max-w-xs">
    <label className="label">
    <span className="label-text">I'm looking for a</span>
    <span className="label-text-alt">dog breed select</span>
  </label>
  <select className="select select-bordered" id="breedMenu" onChange={handleDogSelect}>
    <option disabled selected>Breed</option>
{/* Generate option for each dog */}
{breedOptions.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
            </option>
            ))}
    </select>
  </div>

{/* <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">In</span>
     </label>
  <select className="select select-bordered">
    <option disabled selected>Some other option</option>
    <option>tbd</option>
    <option>tbd</option>
    </select>
</div> */}
</form>

 

</div>


  
        );
    }

    export default Dashboard;