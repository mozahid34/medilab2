import { format } from 'date-fns';
import React, { useState } from 'react';
import Appoint from '../Appoint';
import AvailableAppoint from '../AvailableApoint/AvailableAppoint';


const RootAppoint = () => {
    const [seleted, setSelected] = useState(new Date());
    const appointment = format(seleted, 'PPP');
    return (
        <div>
            <Appoint
            select={seleted}
            setSelected={setSelected}
            ></Appoint>

             <AvailableAppoint format={appointment}
            ></AvailableAppoint> 
            
        </div>
    );
};

export default RootAppoint;