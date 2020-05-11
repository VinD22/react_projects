import React from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

export const AddUser = () => {
    return (
        <Form>
            <FormGroup>
                <Label>
                    Name
                </Label>
                <Input type="text" placeholder="name" autoComplete="off" />
            </FormGroup>
            <Button type="submit">
                Add User
            </Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

