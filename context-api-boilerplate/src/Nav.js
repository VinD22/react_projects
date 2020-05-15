import React, { useContext } from 'react'
import { MovieListContext } from "./MovieListContext";

export const Nav = () => {

    const [movies, setMovies] = useContext(MovieListContext);

    return (
        <nav>
            <h3>React Context</h3>
            <h6>Number of movies: {movies.length} </h6>
        </nav>
    )
}
