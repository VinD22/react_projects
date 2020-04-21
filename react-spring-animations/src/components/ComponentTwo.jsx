import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function ComponentTwo({ toggle }) {

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { delay: 2000, duration: 2000 }
    })

    return (
        <animated.div style={props}>
            <div style={style}>
                <h1>Component Two</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel quam voluptates, soluta blanditiis ducimus architecto sapiente molestiae quisquam doloribus necessitatibus voluptatum recusandae optio natus tenetur officia quaerat autem rerum.</p>
                <button style={btn} onClick={toggle}>Toggle Component 3</button>
            </div>
        </animated.div>
    )
}

const style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}