import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/doctor.avif'
import ButtonComponet from '../Component/ButtonComponet';
// import img from '../../assets/images/appointment.png'
import './MakeAppoint.css'

const MakeAppoint = () => {
    return (
        <div>
            
            <div  className="hero min-h-content mt-32 lg:-mb-10 img py-6 bg-base-100">
  <div className="hero-content mx-auto flex-col lg:flex-row">
    <figure className='-mt-32 w-2xl hidden lg:block'>
    <img src={img} className=" max-w-lg  rounded-lg" alt='treatment' />
    </figure>
    <div className=' text-left text-white'>
        <h1 className='text-2xl text-primary'>Appointment</h1>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Link to='/appoint'> <ButtonComponet>Get Started</ButtonComponet></Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default MakeAppoint;