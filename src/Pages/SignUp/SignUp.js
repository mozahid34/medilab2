import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
  
  const {createUser} = useContext(AuthContext)

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = (data, e) => {
      console.log(data);
      createUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.log(error))

       
        

    } 

    return (
        <div className=' rounded-md shadow-xl mx-auto w-full max-w-xs px-4 py-2 bg-slate-200 '>
        <h1 className='text-4xl'>SignUp</h1>
       <form className='form-control ' onSubmit={handleSubmit(handleSignUp)}>
<label className="label">
<span className="label-text">Name<span className=' font-bold text-red-600 '>*</span> </span> 
</label>
  <input type='text' className="input input-bordered w-full max-w-xs" {...register("Name", {required: true} )} />
  {errors.Name && <p className='text-red-600 text-left' role="alert">Name is Required</p>}
<label className="label">
<span className="label-text">Email<span className=' font-bold text-red-600 '>*</span></span> 
</label>
  <input type='email' className="input input-bordered w-full max-w-xs" {...register("email", {required:"Email is Required"} )} />
  {errors.email && <p className='text-red-600 text-left' role="alert">{errors.email?.message}</p>}

<label className="label">
<span className="label-text">Password<span className=' font-bold text-red-600 '>*</span></span> 
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
 
  <input className="input btn btn-primary input-bordered w-full max-w-xs my-4"        type="submit" value='SignUp' />
  <div className="divider">OR</div>
  <p>Already Have an Account? <Link className='text-blue-600 font-bold' to='/logIn'>LogIn</Link> </p>
  
 
</form>
    </div>
    );
};

export default SignUp;