import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [authError, setAuthError] = useState('');
    const {logIn} = useContext(AuthContext)
    const onSubmit = data => {
      
      console.log(data);
      logIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          setAuthError(error.message);
          // console.log(error.message);
        });
        

    } 
    
    return (
        <div className=' rounded-md shadow-xl mx-auto w-full max-w-xs px-4 py-2 bg-slate-200 '>
            <h1 className='text-4xl'>LogIn</h1>
           <form className='form-control ' onSubmit={handleSubmit(onSubmit)}>
    <label className="label">
    <span className="label-text">Email</span> 
  </label>
      <input type='email' className="input input-bordered w-full max-w-xs" {...register("email", {required:"Email is Required"} )} />
      {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}

    <label className="label">
    <span className="label-text">Password</span> 
  </label>
      <input type='password' className="input input-bordered w-full max-w-xs" {...register("password", {required:true, maxLength: 30, minLength:8} )} />
      {errors.password && errors.password.type === "required" && (
        <span className='text-red-600 text-left'  role="alert">This is required</span>
      )}
      {errors.password && errors.password.type === "maxLength" && (
        <span className='text-red-600 text-left' role="alert">Maximum length: 30 exceeded</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span className='text-red-600 text-left' role="alert">Minimum length Should be 8</span>
      )}
     
      <input className="input btn btn-primary input-bordered w-full max-w-xs my-4" type="submit" value='LogIn' />
      <div>
        {
          authError && <p className='text-red-600 font-bold'> {authError} </p>
         
        }
      </div>
      <p>Don't Have an Account? <Link className='text-blue-600 font-bold' to='/signUP'>SignUp</Link> </p>
      <div className="divider">OR</div>
      <input className="input btn btn-outline input-bordered w-full max-w-xs my-4" type="submit" value='SignIn With Google' />
    </form>
        </div>
    );
};

export default LogIn;