import React, { useState, createContext } from 'react'

export const MovieListContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([

    ])

    return (
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieListContext.Provider>
    );
}