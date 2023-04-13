import React, {useRef }from   'react';
import  { useQuery, useMutation} from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { DELETE_DOG, UPDATE_PROFILE } from '../utils/mutations'


const ViewMyProfile = () => {
    const { loading, data } = useQuery(GET_ME);
    const [deleteDog] = useMutation(DELETE_DOG)
    const userData = data?.me || {};
    const [updateProfile] = useMutation(UPDATE_PROFILE);


  const usernameRef = useRef();
  const emailRef = useRef();
  const zipRef = useRef();
  
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    
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

    const handleDogDelete = async (index) => {

       let indexNumber = parseInt(index)
       console.log(typeof indexNumber)
      
        try {
          const {data} = await deleteDog({
            variables: { index },
          });

          console.log(data);
        } catch (err) {
            console.error(err);
        }
        
    };

    if (loading) {
        return <h2>LOADING...</h2>
    }

    
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
                                <button onClick={() => handleDogDelete(index)}>remove</button>
                            </ol>
                        </div>
            </div>
                );
            })}
            
        </div>
        );
}

    export default ViewMyProfile;