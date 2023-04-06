import React, { useState } from 'react';
import SignupForm from './SignupForm'

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="signup-modal" className="btn btn-primary" onClick={toggleModal}>GET STARTED</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="signup-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        {/* <div className="modal-box"> */}
          
          <div className="modal-action">
         {/*this modal is using the signupform */}
          <SignupForm/>
            <label htmlFor="signup-modal" className="btn btn-primary" onClick={toggleModal}>X</label>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SignupModal;