import React from 'react';
import Toast from '../Toast/Toast';

const Bookingmodal = ({treatment, Bookingdate, setTreatment}) => {
    const {name, slots} = treatment;
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const pname = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
          name: pname,
          date,
          phone,
          email
        }
        console.log(booking);
         
      
      form.reset();
      setTreatment(null);

     
        
    }
   
   
    return (
        <div>
          
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6 mt-4 '>
          <input type="text" disabled name='date' value={Bookingdate} className="input input-bordered mx-auto w-full max-w-xs" />
          <select className="select select-info w-full mx-auto max-w-xs">
        
          {
              slots.map(slot => <option value={slot}> {slot}</option> )
          }
        
      </select>
          <input type="text" placeholder="Name" name='name' className="input input-bordered mx-auto w-full max-w-xs" />
          <input type="text" placeholder="Phone" name='phone' className="input input-bordered mx-auto w-full max-w-xs" />
          <input type="email" placeholder="Email" name='email' className="input input-bordered mx-auto w-full max-w-xs" />
          
          <input type="submit" className="btn btn-primary input input-bordered mx-auto w-full max-w-xs" value='Submit' />
          </form>
        </div>
</div>
        </div>
    );
};

export default Bookingmodal;