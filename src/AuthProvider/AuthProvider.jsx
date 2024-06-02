/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth).then(() => setUser(null))
    }


    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            } else {
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, []);

    const authInfo = { user, googleLogin, loading, logOut, createUser, signInUser };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;