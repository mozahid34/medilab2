import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
  const email = user?.email;
  console.log(email);
    const menuItem = <>
        <li>
       <Link to='/' >Home</Link>
       </li>
       <li>
       <Link to='/about' classname="text-2xl">About</Link>
       </li>
       <li>
       <Link to='/appoint' classname="text-2xl">Appointment</Link>
       </li>
       <li>
       <Link to='/services' classname="text-2xl">Services</Link>
       </li>
       <li>
       <Link to='/contact' classname="text-2xl">Contact Us</Link>
       </li>
      
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    
    <Link to='/' className="btn btn-ghost normal-case font-extrabold text-green-500 text-xl">Hello Doctor</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        menuItem
      }
    </ul>
  </div>
  <div className="navbar-end">
      <Link to='dashboard' className=' hidden lg:block lg:mx-4 '>Dashboard</Link>
      <Link to='/logIn' className='btn'> { user?.uid ? "Sign Out" : "Log In" } </Link>
  </div>
</div>
        </div>
    );
};

export default Header;