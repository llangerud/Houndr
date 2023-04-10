import React from 'react';
import {GET_ME}  from '../utils/queries'
import  {useQuery} from '@apollo/client';

const MyDogs = () => { 

    const {loading, error, data} = useQuery(GET_ME);

    if (error) {
        console.log(error);
    }



    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) return `Error! ${error.message}`;
    console.log(data); 

    const user = data.me

return (
<div>
<div>this is the test page</div>
<div>{user.email}</div>

</div>
);
}

export default MyDogs;