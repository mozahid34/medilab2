import React from 'react';
// import ButtonComponet from '../../Component/ButtonComponet';

const Slot = ({Option, setTreatment}) => {
    const {name, slots} = Option;
    
    return (
        <div>
            <div>
            <div className="card h-48 shadow-2xl">
  <div className="card-body mx-auto">
    <h1 className="card-title text-center">{name}</h1>
    <p>{slots[0]}</p>
    
    <p> {slots.length} {slots.length > 1 ?"Slots" : "Slot"} Available</p>
    <div className="card-actions mx-auto">
     
     <label htmlFor="my-modal-3" className="btn btn-sm btn-primary" onClick={() => setTreatment(Option) } >Book Appointment</label>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Slot;