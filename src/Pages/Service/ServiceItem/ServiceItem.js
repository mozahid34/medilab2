import React from 'react';

const ServiceItem = ({data}) => {
    const {id, name, logo, description} = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {name} </h2>
    <p>{description}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default ServiceItem;