import React from 'react'
import Button from './Button';

const Nav = () => {
    return (
        <div style={{ backgroundColor: 'purple', padding: '10px', display: 'flex', alignItems: 'center' }}>

            <ul style={{ display: 'flex', listStyleType: 'none' }}>
                <li style={{ marginRight: '10px', color: 'white' }} className="li">Home   </li>
                <li style={{ marginRight: '10px', color: 'white' }} className="li">About   </li>
                <li style={{ marginRight: '10px', color: 'white' }} className="li">Contact Us   </li>
            </ul>
            <Button>Nav Button</Button>
        </div>
    )
}

export default Nav
