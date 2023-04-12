import React, { useState } from 'react';
import UserProfile from '../pages/UserProfile';

const SearchDogsModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {name} = props
  
  // console.log(name)
 
  const toggleModal = () => {
    setIsOpen(!isOpen);
    
  };

  

  // if (!name || !image || !about || !age || !fixed || !zip || !email || !username) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="seach-dogs-modal" className="btn btn-primary" onClick={toggleModal}>Meet up!</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="search-dogs-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        {/* <div className="modal-box"> */}
          
          <div className="modal-action">
         {/*this modal is using the UserDetials */}
          <UserProfile 
          {...props}
          // name={props.myDogs.name}image={props.myDogs.image}about={props.myDogs.about}age={props.myDogs.age}fixed={props.myDogs.fixed}zip={props.zip}email={props.email}username={props.username} 
          
          ></UserProfile>
            <label htmlFor="search-dogs-modal" className="btn btn-primary" onClick={toggleModal}>X</label>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SearchDogsModal;