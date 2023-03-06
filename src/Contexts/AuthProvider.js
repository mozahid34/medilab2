import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/firebase.config';


    export const AuthContext = createContext();
    const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const {user, setuser} = useState();

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user Observing");
            setuser(currentUser);
        })
        return () => unsubscribe;
    },[])
    

    const authInfo = {
        createUser,
        logIn,
        user
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;