import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";


const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Russel Crowe" />
            <Typography variant="h4">
                <Typed strings={["Vinayak"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h5">
                <Typed strings={["Web Developer", "Mobile App Developer", "UI Designer"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
