import React from 'react';
import { Link } from 'react-router-dom';
import bannarImg  from '../../../assets/images/cover.jpg';
import ButtonComponet from '../../Component/ButtonComponet';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-content bg-img">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannarImg} className=" rounded-lg shadow-2xl w-full lg:w-1/2" />
    <div className='text-left'>
      <h1 className="text-5xl  font-bold">Your Smile is our commitment</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to="/appoint">
      <ButtonComponet>Make Appointment</ButtonComponet>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;