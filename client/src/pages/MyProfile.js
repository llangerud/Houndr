import React from 'react';
import { useQuery, useMutation, useState } from '@apollo/client';
import { ADD_DOG } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

const ViewMyProfile = () => {
    const { loading, data } = useQuery(GET_ME);
    const [deleteDog, { error }] = useMutation(DELETE_DOG)
    const userData = data?.me || {};

    const handleDeleteDog = async (dogId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
        try {
          const {data} = await deleteDog({
            variables: { dogId },
          });
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
                <ol>
                    <li>Username: {userData.username}</li>
                    <li>Email: {userData.email}</li>
                    <li>Zipe Code: {userData.zip}</li>
                </ol>
            </div>
            <h2>My Dogs</h2>
            {userData.myDogs.map((dog) => {
                return (
                    <div className="card w-96 bg-base-100 shadow-xl">
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