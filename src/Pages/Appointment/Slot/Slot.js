import React from 'react';
// import ButtonComponet from '../../Component/ButtonComponet';

const Slot = ({Option, setTreatment}) => {
    const {name,  doctors, slots} = Option;
    
    return (
        <div>
            <div>
            <div className="card h-60 shadow-2xl">
  <div className="card-body">
    <h1 className="card-title text-center mx-auto">{name}</h1>
    <p className='text-xl'>{doctors[0]}</p>
    <p>{slots[0]}</p>
    
    <p> {slots.length > 1 ? slots.length : "No"} {slots.length > 1 ?"Slots" : "Slot"} Available</p>
    <div className="card-actions mx-auto">
     

    <label htmlFor="my-modal-3"  className={slots.length === 0 ? 'btn btn-sm btn-primary btn-disabled' : 'btn btn-sm btn-primary '} onClick={() => setTreatment(Option) } >Book Appointment</label>
    
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Slot;