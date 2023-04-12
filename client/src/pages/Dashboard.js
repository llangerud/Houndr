import React from 'react';
import { useState, useEffect } from "react";
import {FIND_DOGS} from '../utils/queries'
import {useQuery} from '@apollo/client';
import SearchDogsModal from '../components/SearchDogsModal'


const Dashboard =  () => {

const [breedOptions, setBreedOptions] = useState([]);


const [dogFormData, setDogFormData] = useState({
    breed: 'affenpinscher',
    age: 'puppy',
  });

  const [selected, setSelected] = useState('')

  const [showContent, setShowContent] = useState(false);

  // const [id, setId] = useState([])
// const selectedBreed = dogFormData.breed


const {loading, data, refetch} = useQuery(FIND_DOGS, {
variables: {breed: selected }
});

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
   
    const {id, value} = e.target;
    // console.log(e.target.id)
    // console.log(e.target.value)
    setDogFormData({
        ...dogFormData,
        [id]: value
    });
    console.log(dogFormData.breed)
 

}




const showSearchResults = async (e) => {
//this will show the results with the updated user selections
    e.preventDefault();
     console.log(dogFormData.breed)
    if (showContent) {
      setSelected(dogFormData.breed)
      setShowContent(false)
    }
   
    // console.log(dogFormData)
    await refetch()
    setShowContent(true);
    setDogFormData({
      breed: 'affenpinscher',
      age: 'puppy',
      });
      setSelected(dogFormData.breed)

}


if (loading) {
  return <div>loading...</div>
}


const users =  data.users

    return (

//two columns, second column drops below first on mobile, second column will display search results

    <div className="grid grid-cols-1 sm:grid-cols-2 ">
    
    <form onSubmit = {showSearchResults} className="m-8">
    <div className="form-control w-full max-w-xs">
    <label className="label">
    <span className="label-text">I'm looking for a</span>
    <span className="label-text-alt"></span>
  </label>
  <select className="select select-bordered" id="breed" onChange={handleDogSelect}>
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
  <select className="select select-bordered" id="age"onChange={handleDogSelect}>
    <option value="puppy">puppy</option>
    <option value="adult">adult</option>
    <option value="senior">senior</option>
    </select>
</div>
<button className="btn btn-accent mt-4">find my new friends</button>
</form>

{showContent &&  (
  
        <div>  
          
          {users.map((user, index)  => (
             
        <div className="card lg:card-side bg-base-200 shadow-xl m-8" key={index}>
        <figure><img src={user.myDogs[index].image ? user.myDogs.image : './images/happy-pup-1.png'} alt="dog"/></figure>
        <div className="card-body">
        <h2 className="card-title">{user.myDogs[index].name}</h2>
        <p>{user.username}</p>
        <p>{user.zip}</p>
        
        <div className="card-actions justify-end">
      
        {/* <button onClick= {handleClicked} value= {user._id}className="btn btn-primary">Listen</button>
        id={id} */}
        
        <SearchDogsModal 
        key={users[index]}
        name={users[index]}
        
        // image={user.myDogs.image}about={user.myDogs.about}age={user.myDogs.age}fixed={user.myDogs.fixed}zip={user.zip}email={user.email}username={user.username} 
        
        ></SearchDogsModal>
        </div>
        </div>
</div >
))}
</div>


)}
  </div>

      );
    }

    export default Dashboard;
    
    
    