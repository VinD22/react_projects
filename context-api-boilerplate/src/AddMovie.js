import React, { useState, useContext } from 'react'
import { MovieListContext } from "./MovieListContext";

export const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieListContext);


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addMovie = e => {
        e.preventDefault()
        if (name !== '' && price !== '') {
            const newMovie = { name: name, price: price, id: 10 }
            setMovies(prevMovies => [...prevMovies, newMovie])
            setName('');
            setPrice('')
        }

    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}
