import React, { useEffect, useState } from 'react';
import Bookingmodal from '../../Component/Modal/Bookingmodal';
import Slot from '../Slot/Slot';

const AvailableAppoint = ({format}) => {
    const [treatment, setTreatment] = useState(null);
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-primary font-bold'>
            Available Appointment on:{format}
            </h1>

            <div className='grid gap-6 grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <Slot
                        key={option._id}
                        Option={option}
                        setTreatment = {setTreatment}
                        
                    ></Slot>)
                }
                {
                  treatment &&  
                <Bookingmodal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    Bookingdate={format}
                ></Bookingmodal>
                }
            </div>
        </div>
    );
};

export default AvailableAppoint;