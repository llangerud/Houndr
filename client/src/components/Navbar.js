import React from 'react';
import LoginModal from './LoginModal';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";



//checks if you are logged in or not to display login/logout and dashboard
const AppNavbar = () => {

return (<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

      </ul>
    </div>

  <a href = "/" className="btn btn-ghost normal-case text-xl">Houndr</a>
      
  </div>
  {Auth.loggedIn() ? (
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
          
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/myprofile">My Profile</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
       
      </li>
     
    </ul>
  </div>
 ) : (
  <div></div>
  )}
  <div className="navbar-end"> 
 
  {Auth.loggedIn() ? (
   
   <button className="btn btn-bg-100" onClick={Auth.logout}>Logout</button>
    ) : (
    // this is the login button (the button itself is in the modal)
 <LoginModal></LoginModal>
    )}
  </div>
</div>

);
}
export default AppNavbar;
