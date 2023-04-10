import React, { useState } from "react";
import { useEffect, useSt
 } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_DOGS } from "../utils/queries";
import UserDetails from '../components/UserDetails';

const userProfile = () => {
  const [profiles, setProfiles] = useState(null)

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('/api/profiles')
      const json = await response.json()
      
      if (response.ok) {
        setProfiles(json)
      }
    }

      fetchProfiles()
  }, [])



// export default function UserProfile() {
//   const { loading, data } = useQuery(ALL_DOGS);
//   const otherDogs = data?.profiles || [];

//   if (loading) {
//     return <div>Loading...</div>;
//   }
  return (
    <div className="flex-row justify-center">
      <div className="col-12 col-md-10 my-3">
        {/* <h1>Who do you want to go on a doggy date with?</h1>
      </div>
      <div>
        <p>Meet {otherDogs.name}! </p>
        <img>{otherDogs.image}</img>
        <p>
          {otherDogs.name} is a {otherDogs.breed}. {otherDogs.description}
        </p>
        //need to add query for location
        <button>Click here to setup a time to play!</button> */}
        {profiles && profiles.map((profile) => (
          <UserDetails key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default userProfile;
