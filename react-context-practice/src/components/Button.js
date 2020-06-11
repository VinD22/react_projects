import React, { useContext } from 'react'

import { ThemeContext } from '../theme-context'

function setButtonColor(theme) {
    if (theme === 'dark') {
        return {
            backgroundColor: '#2c3e50',
            color: '#ecf0f1'
        }
    }

    return {
        backgroundColor: '#ecf0f1',
        color: '#2c3e50'
    }
}

const Button = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <button style={{ ...setButtonColor(theme), padding: 10, border: 'none', borderRadius: '5px' }}>{props.children}</button>
        </div>
    )
}

export default Button