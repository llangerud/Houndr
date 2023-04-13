import React, {useState, useRef }from   'react';
import  { useQuery, useMutation} from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { DELETE_DOG, UPDATE_PROFILE } from '../utils/mutations'
import Auth from '../utils/auth';

const ViewMyProfile = () => {
    const { loading, data } = useQuery(GET_ME);
    const [deleteDog, { error }] = useMutation(DELETE_DOG)
    const userData = data?.me || {};
    const [updateProfile, { updateError }] = useMutation(UPDATE_PROFILE);
    
//     const [profileData, setProfileData] = useState({
//     username: userData.username,
//     email: userData.email,
//     zip: userData.zip,
//   });


  const usernameRef = useRef();
  const emailRef = useRef();
  const zipRef = useRef();
  
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    console.log(typeof usernameRef.current.value, emailRef.current.value, zipRef.current.value);

    try {
   const data = await updateProfile({
          variables: { username:usernameRef.current.value, 
            email:emailRef.current.value, zip:zipRef.current.value},
        });
        
  console.log(data);
} catch (err) {
    console.error(err);

    };

  }  

 




    // const handleDeleteDog = async (dogId) => {
      
    //     try {
    //       const {data} = await deleteDog({
    //         variables: { dogId },
    //       });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    if (loading) {
        return <h2>LOADING...</h2>
    }

    // console.log(data)

    
    return (
        <div>
            <h1>My Profile</h1>
            <div>
                
                <form>
                <div className="form-control w-full max-w-xs">

  <input type="text" defaultValue={userData.username} className="input input-bordered w-full max-w-xs" ref={usernameRef}/>
  <input type="text" defaultValue={userData.email} className="input input-bordered w-full max-w-xs" ref={emailRef}  />
  <input type="text" defaultValue={userData.zip} className="input input-bordered w-full max-w-xs" ref={zipRef}  />
  
</div>
<button type="button" onClick={handleSubmit}> Submit Changes</button>
                </form>
            </div>
            <h2>My Dogs</h2>
            {userData.myDogs.map((dog, index) => {
                return (
                    <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                        <figure><img src={dog.image} alt="Dogs" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{dog.name}</h2>
                            <ol>
                                <li>About: {dog.about}</li>
                                <li>Breed: {dog.breed}</li>
                                <li>Age: {dog.age}</li>
                                <li>Fixed: {dog.fixed}</li>
                            </ol>
                        </div>
            </div>
                );
            })}
            
        </div>
        );
}

    export default ViewMyProfile;