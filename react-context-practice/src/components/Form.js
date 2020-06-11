import React from 'react'

import Button from './Button';

const Form = () => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter text" style={{ margin: '10px' }} />
                <Button>Form Submit Button</Button>
            </form>
        </div>
    )
}

export default Form 