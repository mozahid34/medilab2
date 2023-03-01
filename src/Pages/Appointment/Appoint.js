// import { format } from 'date-fns';
// import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import bannarImg from '../../assets/images/chair.png'



const Appoint = ({select, setSelected}) => {
    
   
    
    return (
        <div>
            <div className="hero min-h-content bg-img">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannarImg} alt='img' className=" rounded-lg shadow-2xl w-full lg:w-1/2" />
    <div className='text-left text-black bg-primary'>
        <DayPicker 
        mode='single'
        selected={select}
        onSelect={setSelected}
        
        ></DayPicker>

        
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Appoint;