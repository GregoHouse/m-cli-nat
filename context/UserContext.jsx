import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const [userdata, setUserData] = useState({
        id: "",
        name: "",
        email: "",
        jwt: "",
    });

    return(
        <UserContext.Provider value={{userdata, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}