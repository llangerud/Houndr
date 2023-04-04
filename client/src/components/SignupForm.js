import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations'
import Auth from '../utils/auth';

const SignupForm = async () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  
    const [addUser] = useMutation(ADD_USER);
  

  
  
      try {
        const {data, error} = await addUser({
          
          variables: {...userFormData}})
  
        if (error) {
          throw new Error(error.message);
        }
        // console.log(data)
        const {token} = data.addUser;
        Auth.login(token);
      
      } catch (err) {
        console.error(err);
      }
  
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
  
return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>

);
}
export default SignupForm;
