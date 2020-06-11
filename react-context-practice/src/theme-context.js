import React from 'react';


export const ThemeContext = React.createContext('light');

export const ThemeProvider = (props) => (
    <ThemeContext.Provider value="dark">
        {props.children}
    </ThemeContext.Provider>
)
