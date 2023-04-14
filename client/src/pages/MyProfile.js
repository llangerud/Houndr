import React, { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { DELETE_DOG, UPDATE_PROFILE } from "../utils/mutations";

const ViewMyProfile = () => {
  const { loading, data } = useQuery(GET_ME);
  const [deleteDog] = useMutation(DELETE_DOG);
  const userData = data?.me || {};
  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const usernameRef = useRef();
  const emailRef = useRef();
  const zipRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await updateProfile({
        variables: {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          zip: zipRef.current.value,
        },
      });

      
      alert("Your account has been updated");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDogDelete = async (index) => {
    let indexNumber = parseInt(index);
    

    try {
      const { data } = await deleteDog({
        variables: { index },
      });

      alert("Condolences");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-8">
      <div>
        <form>
          <h2 className="card-title text-accent">Edit profile</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">username</span>
            </label>
            <input
              type="text"
              defaultValue={userData.username}
              className="input input-bordered w-full max-w-xs"
              ref={usernameRef}
            />

            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="text"
              defaultValue={userData.email}
              className="input input-bordered w-full max-w-xs"
              ref={emailRef}
            />

            <label className="label">
              <span className="label-text">zip code</span>
            </label>
            <input
              type="text"
              defaultValue={userData.zip}
              className="input input-bordered w-full max-w-xs"
              ref={zipRef}
            />
          </div>
          <button className="btn btn-accent mt-4" onClick={handleSubmit}>
            {" "}
            Submit Changes
          </button>
        </form>
      </div>
      <div>
        <h2 className="card-title text-primary">My Dogs</h2>
        {userData.myDogs.map((dog, index) => {
          return (
            <div className="card w-96 bg-base-200 shadow-xl mt-4" key={index}>
              <figure>
                <img src={dog.image} alt="Dogs" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <ol>
                  <li>About: {dog.about}</li>
                  <li>Breed: {dog.breed}</li>
                  <li>Age: {dog.age}</li>
                  <li>Fixed: {dog.fixed}</li>
                  <button className="btn btn-accent mt-4" onClick={() => handleDogDelete(index)}>remove</button>
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewMyProfile;
