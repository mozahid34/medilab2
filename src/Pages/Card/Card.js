import React from 'react';

const Card = ({card}) => {
    const {title, description, logo, bgClass} = card;
    return (
        <div>
            <div className= {`card md:card-side shadow-xl text-white md:h-32 p-6 ${bgClass} `}>
  <figure><img src= {logo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-left'>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default Card;