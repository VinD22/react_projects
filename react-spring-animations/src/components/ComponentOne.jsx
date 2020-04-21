import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function ComponentOne() {

    const propsTwo = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0, marginTop: -500 }
    })

    const props = useSpring({
        to: { number: 10 },
        from: { number: 0 },
        config: { duration: 2000 }
    })

    return (
        <animated.div style={propsTwo}>
            <div style={style}>
                <h1>Component One</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam vel quam voluptates, soluta blanditiis ducimus architecto sapiente molestiae quisquam doloribus necessitatibus voluptatum
                    recusandae optio natus tenetur officia quaerat autem rerum.</p>
                <h1 style={counter}>
                    {/* {30.020.toFixed()} */}
                    <animated.span>{props.number}</animated.span>
                </h1>
            </div>
        </animated.div>
    )
}

const style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}