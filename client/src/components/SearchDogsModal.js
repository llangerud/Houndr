import React, { useState } from 'react';
import UserDetails from './UserDetails';

const SearchDogsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="seach-dogs-modal" className="btn btn-primary" onClick={toggleModal}>search for a dog in your area</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="search-dogs-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        {/* <div className="modal-box"> */}
          
          <div className="modal-action">
         {/*this modal is using the UserDetials */}
          <UserDetails></UserDetails>
            <label htmlFor="search-dogs-modal" className="btn btn-primary" onClick={toggleModal}>X</label>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SearchDogsModal;