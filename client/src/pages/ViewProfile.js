import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_DOG } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const ViewProfile = () => {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || {};

    return (
        <div>
            <h1>User Profile</h1>
            <ol>
                <li>Name: {userData.myDogs.name}</li>
                <li>Breed: {userData.myDogs.breed}</li>
                <li>Doggy Description: {userData.myDogs.about}</li>
            </ol>
            </div>
        );
}

    export default ViewProfile;