import React from "react";

  const UserProfile = (props) => {
    const {name} = props;
  
    return (
      
      <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
    <img src={name.myDogs[0].image ? name.myDogs[0].image : './images/happy-pup-1.png'} alt="dog"/>
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{name.myDogs[0].name}</h2>
        <ul>{props.user}</ul>
        <ul>People say: {name.myDogs[0].about}</ul>
        <ul>Age: {name.myDogs[0].age}</ul>
        <ul>Fixed:{name.myDogs[0].fixed} </ul>
        <ul>Zip: {name.zip} </ul>
        <div className="card-actions">
        <button className="btn btn-primary" >  <a href={`mailto:${name.email}`}>contact my person</a></button>
        </div>
    </div>
    </div>
   
  )};

export default UserProfile;
