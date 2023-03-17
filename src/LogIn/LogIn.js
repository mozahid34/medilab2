import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [authError, setAuthError] = useState('');
    const {logIn,user,googleAuth} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
      setAuthError('');
      console.log(data);
      logIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          toast.success('LoggedIn Successfully!')
          navigate(from, {replace:true});
        })
        .catch(error => {
          setAuthError(error.message);
          console.log(error.message);
          toast.error(error.message)
        });
        

    }
    const hundleGoogle = ()=> {
      googleAuth()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast.success('LogIn With Google Successfull!');
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
        {
          user?.email && <p>Logged In  Successfully</p>
        }
      </div>
      <p>Don't Have an Account? <Link className='text-blue-600 font-bold' to='/signUP'>SignUp</Link> </p>
      <div className="divider">OR</div>
      
    </form>
    <input onClick={hundleGoogle} className="input btn btn-outline input-bordered w-full max-w-xs my-4" type="submit" value='Continue With Google' />
        </div>
    );
};

export default LogIn;