import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/firebase.config';


    export const AuthContext = createContext();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const {user, setuser} = useState(null);
    // const {loading,  setLoading} = useState(true);

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAuth = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user Observing");
            // setLoading(false);
            setuser(currentUser);
        })
        return () => unsubscribe;
    },[])
    

    const authInfo = {
        createUser,
        logIn,
        user,
        googleAuth
        
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;