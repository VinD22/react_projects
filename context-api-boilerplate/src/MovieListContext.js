import React, { useState, createContext } from 'react'

export const MovieListContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price: '$20',
            id: 1
        },
        {
            name: 'Extraction',
            price: '$200',
            id: 2
        },
        {
            name: 'The last dance',
            price: '$240',
            id: 3
        }
    ])

    return (
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieListContext.Provider>
    );
}