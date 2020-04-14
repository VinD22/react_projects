import React from 'react'
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="title" subtitle="subtitle" avatarSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    imgSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    description="description about the object"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="title" subtitle="subtitle" avatarSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    imgSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    description="description about the object"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="title" subtitle="subtitle" avatarSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    imgSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    description="description about the object"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="title" subtitle="subtitle" avatarSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    imgSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    description="description about the object"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard title="title" subtitle="subtitle" avatarSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    imgSrc="https://img.freepik.com/free-vector/illustration-red-apple-fruit-transparent_43879-113.jpg?size=338&ext=jpg"
                    description="description about the object"
                />
            </Grid>
        </Grid>
    )
}

export default Content; 