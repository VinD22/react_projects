import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import {
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap"

import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {

    const { users, removeUser } = useContext(GlobalContext);


    return (
        <ListGroup className="mt-4">
            {users.length !== 0 ? (
                <>
                    {users.map(user => {
                        return (
                            <ListGroupItem className="d-flex" key={user.id}>
                                <strong>{user.name}</strong>
                                <div className="ml-auto">
                                    <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                                    <Button color="danger" onClick={() => removeUser(user.id)}>Delete</Button>
                                </div>
                            </ListGroupItem>
                        )
                    })}

                </>) : (<h3>No Users Added</h3>)}



        </ListGroup>
    )
}

