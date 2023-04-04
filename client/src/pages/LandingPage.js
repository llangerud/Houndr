import React from 'react';
 

export default function LandingPage() {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img alt = "smiling dog" src='./images/happy-pup-1.png' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Houndr</h1>
            <p className="py-6">Personalized playdates for you and your pup</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
     );
    }