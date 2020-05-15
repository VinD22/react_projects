import React from 'react'

export const Movie = ({ movie }) => {
    return (
        <div>
            <h1>{movie.name}</h1>
            <h6>{movie.price}</h6>
        </div>
    )
}
