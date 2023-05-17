import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/images/notfound.png'

const NotFound = () => {
    return (
        <div className=''>
            <img className='mx-auto my-40 notimg'  src={notfound}
             alt=""
              />
              <Link to="/" className='btn btn-ghost'>Back To Home</Link>
        </div>
    );
};

export default NotFound;