import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_DOGS } from "../utils/queries";

export default function UserProfile() {
  const { loading, data } = useQuery(ALL_DOGS);
  const otherDogs = data?.profiles || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-row justify-center">
      <div className="col-12 col-md-10 my-3">
        <h1>Who do you want to go on a doggy date with?</h1>
      </div>
      <div>
        <p>Meet {otherDogs.name}! </p>
        <img>{otherDogs.image}</img>
        <p>
          {otherDogs.name} is a {otherDogs.breed}. {otherDogs.description}
        </p>
        //need to add query for location
        <button>Click here to setup a time to play!</button>
      </div>
    </div>
  );
}
