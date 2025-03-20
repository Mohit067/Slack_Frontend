import { createContext, useEffect, useState } from "react"

const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ''
    });

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if(user && token){
            setAuth({
                user: JSON.parse(user),
                token
            });
        }
    }, []);

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}