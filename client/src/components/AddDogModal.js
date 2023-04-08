import React, { useState } from 'react';
import AddDogForm from './DogForm'

const AddDogModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="add-dog-modal" className="btn btn-primary" onClick={toggleModal}>add your dog</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-dog-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        {/* <div className="modal-box"> */}
          
          <div className="modal-action">
         {/*this modal is using the dogform */}
          <AddDogForm></AddDogForm>
            <label htmlFor="add-dog-modal" className="btn btn-primary" onClick={toggleModal}>X</label>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default AddDogModal;