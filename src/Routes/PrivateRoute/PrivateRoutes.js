import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user) {
        return children;
    }
    return <Navigate to='/logIn' state={{form: location}} replace >
        {
            toast.error('LogIn First')
        }
    </Navigate>
};

export default PrivateRoutes;