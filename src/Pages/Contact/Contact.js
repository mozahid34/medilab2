import React from 'react';

const Contact = () => {
    return (
        <section className=' min-h-content bg-slate-400 mt-32 py-8 '>
            <h1 className='text-2xl text-primary'>Contact Us</h1>
            <p className='text-4xl text-white'>Stay Connected with Us</p>
            <form className="card-body w-96 mx-auto">
        <div className="form-control">
          
          <input type="text" placeholder="Email Address" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" placeholder="Subject" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <textarea className="input h-32 input-bordered" placeholder='Messege'></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

        </section>
    );
};

export default Contact;