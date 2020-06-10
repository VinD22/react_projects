import React from 'react'

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
    return (
        <div>
            <button style={{ ...setButtonColor(props.theme), padding: 10, border: 'none', borderRadius: '5px' }}>{props.children}</button>
        </div>
    )
}

export default Button