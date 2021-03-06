import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 2
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Title
                </Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
};

export default Header; 