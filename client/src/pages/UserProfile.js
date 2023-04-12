import React from "react";

  const UserProfile = (props) => {
    console.log(props);
    console.log(props.name)
    const {name} = props;
    console.log(name)
    console.log(name.myDogs)

    return (

    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src="./images/dogone.jpg" alt="Dog" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{name.myDogs.name}</h2>
        <ul>{props.user}</ul>
        <ul>About: </ul>
        <ul>Age: </ul>
        <ul>Fixed: </ul>
        <ul>Zip: </ul>
        <div className="card-actions">
        <button className="btn btn-primary">Click here to setup a playdate!</button>
        </div>
    </div>
    </div>
  )};

export default UserProfile;
