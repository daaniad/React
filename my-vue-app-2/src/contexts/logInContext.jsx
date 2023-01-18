import {createContext, useContext, useState} from "react";

const CheckLogInContext = createContext({
    userMode: "Logout",
    toggleUserMode: () => {}
});

export default CheckLogInContext

export function LogInContextProvider ({children}) {
    const [userMode, setUserMode] = useState("Logout")

    function toggleLogin() {
        setUserMode(function(oldUserMode) {
            if (oldUserMode === "Logout") {
                return "Login";
            } else {
                return "Logout"
            }
        }) ;
    }
    const value = {
        userMode,
        toggleLogin
    };
    
    return (
        <CheckLogInContext.Provider value={value}>{children}</CheckLogInContext.Provider>
    );
}

export function useCheckLoginContext(){
    return useContext(CheckLogInContext);
}
