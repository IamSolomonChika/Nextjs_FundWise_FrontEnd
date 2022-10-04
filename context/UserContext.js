import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initiateState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const UserContext = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(undefined)
    const [flutterWave, setFlutterWave] = useState(false)
    return (
        <StateContext.Provider 
        value={{
            activeMenu, 
            setActiveMenu,
            screenSize,
            setScreenSize,
            flutterWave,
            setFlutterWave,
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);