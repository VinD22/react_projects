import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function ComponentThree() {

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { delay: 2000, duration: 2000 }
    })

    return (
        <animated.div style={props}>
            <div style={style}>
                <h1>Component  Three</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel quam voluptates, soluta blanditiis ducimus architecto sapiente molestiae quisquam doloribus necessitatibus voluptatum recusandae optio natus tenetur officia quaerat autem rerum.</p>
            </div>

        </animated.div>
    )
}

const style = {
    background: 'skyblue',
    color: 'white',
    padding: '1.5rem'
}
