import React, { useState } from 'react';
import LoginForm from './LoginForm'

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="login-modal" className="btn btn-primary" onClick={toggleModal}>LOGIN</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="login-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        {/* <div className="modal-box"> */}
          
          <div className="modal-action">
         {/*this modal is using the loginform */}
          <LoginForm/>
            <label htmlFor="login-modal" className="btn btn-primary" onClick={toggleModal}>X</label>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LoginModal;