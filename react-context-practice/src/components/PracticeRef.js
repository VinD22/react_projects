import React, { useState, useEffect, useRef } from 'react'

const PracticeRef = () => {

    const [name, setName] = useState('');

    // Ref doesnt make your component Re Render
    // const renderCount = useRef(1)

    const inputRef = useRef();

    useEffect(() => {
        // renderCount.current = renderCount.current + 1
    })

    const focus = () => {
        console.log(inputRef.current) // Same as documentary input selector in Javascript 
        inputRef.current.focus(); // to focus on the input field programatically.
    }

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
            <div style={{ margin: '10px', padding: '5px' }}>My name is {name} </div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default PracticeRef
