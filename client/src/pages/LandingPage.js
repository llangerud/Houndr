import React from 'react';
import SignupModal from '../components/SignupModal';
import AddDogModal from '../components/AddDogModal'
import Auth from '../utils/auth';

export default function LandingPage() {

    return (
      <div>
      {Auth.loggedIn() ? (

        //showing the user's dog, or if that doesn't exist, a default image and something like "where's your best friend? Add them now"
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img alt = "dog on laptop" src='./images/dogone.jpg' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Let's get some dates!</h1>
            <p className="py-6"></p>
            <AddDogModal></AddDogModal>
            {/* <Link to='/signup'><button className="btn btn-primary">Get Started</button></Link> */}
           
          </div>
        </div>
      </div>
      //standard landing page if you're not logged in
        ) : (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img alt = "smiling dog" src='./images/happy-pup-1.png' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Houndr</h1>
            <p className="py-6">Personalized playdates for you and your pup</p>
            <SignupModal></SignupModal>
            {/* <Link to='/signup'><button className="btn btn-primary">Get Started</button></Link> */}
           
          </div>
        </div>
      </div>
      )}
    </div>
      
     );
    }