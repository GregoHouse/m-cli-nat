import { createContext, useState } from "react";

/**
 *@typedef{{isAuth:boolean, setIsAuth: React.Dispatch<React.SetStateAction<boolean>>}} IAuthContext
 
 */

/**
 * @type {React.Context<IAuthContext>}
 *
 */


export const AuthContext = createContext();

export function AuthProvider({children}){
    const [isAuth, setIsAuth] = useState(false);
    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}