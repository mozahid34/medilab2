import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/Caregiver-Image-2-removebg.png'

const Lower = () => {
    return (
        <div>
            <div className="hero min-h-content py-6 bg-base-100">
  <div className="hero-content mx-auto flex-col lg:flex-row">
    <figure className=' lg:w-1/2'>
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
    </figure>
    <div className=' text-left lg:w-[497px]'>
      <h1 className="text-5xl font-bold">Why We are Exceptional</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Link to="/appoint">
      <button className="btn btn-primary">Get Started</button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Lower;