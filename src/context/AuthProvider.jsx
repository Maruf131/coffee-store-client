import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const authInfo ={
        createUser,
        signInUser
    }
    return (
        <AuthContext value={authInfo}>
           {children}
        </AuthContext>
    );
};

export default AuthProvider;