import React, { useState, useEffect } from 'react';

import './apipractice.css';

export const ApiPractice = () => {

    const [users, setUsers] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {


        fetch(`https://reqres.in/api/users?page=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.data)
                setTotalPages(data.total_pages)

                console.log(data.total_pages)
            })



    }

    const changePage = (pageNum) => {
        fetch(`https://reqres.in/api/users?page=${pageNum}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.data)

            })
        setPageNumber(pageNum)

    }


    return (
        <div className="container" style={{ color: 'black', marginTop: '10px', padding: '10px' }}>
            <div className="jumbotron">
                <h1 className="display-4" style={{ color: 'grey' }}>Users List</h1>
            </div>

            <br />
            <div className="users">
                {users.map(user => {
                    return (

                        <div className="card" key={user.id}>
                            <img src={user.avatar} alt="user image" />
                            <div className="card-body">
                                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="btn-group" role="group" aria-label="Basic Example">
                <button type="button"
                    className="btn btn-secondary"
                    disabled={pageNumber === 1 ? true : false}
                    onClick={() => changePage(pageNumber - 1)}>Prev</button>
                <button type="button" className="btn btn-secondary">{pageNumber}</button>
                <button type="button" className="btn btn-secondary"
                    disabled={pageNumber >= totalPages ? true : false}
                    onClick={() => changePage(pageNumber + 1)}>Next</button>
            </div>
        </div>
    );
}

