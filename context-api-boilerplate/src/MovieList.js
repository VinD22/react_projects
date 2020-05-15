import React, { useContext } from 'react'
import { MovieListContext } from "./MovieListContext";
import { Movie } from "./Movie";


export const MovieList = () => {

    const [movies, setMovies] = useContext(MovieListContext);

    return (
        <div>
            {movies.map(movie => {
                return <Movie movie={movie} key={movie.id} />
            })}
        </div>
    )
}
