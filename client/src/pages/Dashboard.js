import React from 'react';

const Dashboard = () => {


    
//  {/* input form with option to select breed prepopulated from fetch request to API  */}
//     <button></button>
// {/* //search bar and input form to select parameters */}

// {/* //display below that runs a search for zip codes nearby and displays those photos */}
//button that says "Add my dog!"


    return (


 <div>
    
    <div>My dashboard</div>
    
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">I'm looking for a</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Breed</option>
    <option>From the breeds avail in the fetch</option>
    <option>Pommerianian</option>
    </select>
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">In</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Zip Code</option>
    <option>From the breeds avail in the fetch</option>
    <option>Pommerianian</option>
    </select>
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div>


 

</div>


  
        );
    }

    export default Dashboard;