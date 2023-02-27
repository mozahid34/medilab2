import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const serviceData = [
        {
            id:1,
            name: "Fluoride Treatmen",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: fluoride ,

        },
        {
            id:2,
            name: "Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: cavity ,

        },
        {
            id:3,
            name: "Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo:Whitening,

        },
    ]
    return (
        <div >
            <h1 className='text-3xl py-6 text-primary'>Our Services</h1>
            <p className='text-5xl'>Services We Provide</p>
            <div className='grid gap-6 grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceData.map(data => <ServiceItem key={data.id} data={data}></ServiceItem>)

            }
            </div>
            
        </div>
    );
};

export default Services;