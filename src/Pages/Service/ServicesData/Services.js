import React from 'react';
import Cardiology from '../../../assets/images/cardio.png';
import Neurology from '../../../assets/images/neoro.png';
import EyeCare from '../../../assets/images/eye.png';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const serviceData = [
        {
            id:1,
            name: "Cardiology",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: Cardiology,

        },
        {
            id:2,
            name: "Neurology",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: Neurology,

        },
        {
            id:3,
            name: "Eye care",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo:EyeCare,

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