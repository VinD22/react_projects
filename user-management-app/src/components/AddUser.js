import React, { useState, useContext } from 'react'

import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from 'uuid'

import { Link, useHistory } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

export const AddUser = () => {

    const [name, setName] = useState('')

    const { addUser } = useContext(GlobalContext);

    const history = useHistory()

    const onSumbit = () => {

        const newUser = {
            id: uuid(),
            name: name
        }

        addUser(newUser)

        history.push("/")
    }

    return (
        <Form onSubmit={onSumbit}>
            <FormGroup>
                <Label>
                    Name
                </Label>
                <Input type="text" placeholder="name" autoComplete="off" onChange={(e) => setName(e.target.value)} value={name} />
            </FormGroup>
            <Button type="submit">
                Add User
            </Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

