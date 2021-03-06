import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../avatar.png";
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import { Link } from "react-router-dom";

// CSS Styles 

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    }
]

const Navbar = () => {

    const classes = useStyles();

    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }

    const sideList = slider => (
        <Box className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider("right", false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Image" />
            <Divider />
            <List>
                {menuItems.map((item, key) => (
                    <ListItem button component={Link} to={item.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={item.listText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    )


    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: 'tomato' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'fff' }}>
                            Portfolio
                    </Typography>
                        <MobileRightMenuSlider
                            open={state.right}
                            anchor="right"
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;