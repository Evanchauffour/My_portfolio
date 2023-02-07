import React, {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode , setDarkMode] = useState();

    const toogleDarkMode = () =>{
        setDarkMode(!darkMode)
    }

    return(
        <div>
            <DarkModeContext.Provider value={{darkMode, toogleDarkMode}}>
                {props.child}
            </DarkModeContext.Provider>
        </div>
    )
}
export {DarkModeContext , DarkModeProvider}