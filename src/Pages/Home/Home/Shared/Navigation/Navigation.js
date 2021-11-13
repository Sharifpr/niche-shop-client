import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {

    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: "none !important"
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: "none !important"
            }
        },
        siteName: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            }
        },
        mobileNavIcon: {
            textDecoration: "none !important",
            color: "#000 !important"
        }
    })

    const { navIcon, navItemContainer, siteName, mobileNavIcon } = useStyle();

    const [state, setState] = React.useState(false)



    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavIcon} to="/home">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavIcon} to="/exploreproducts">Explore</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavIcon} to="/dashboard">Dashboard</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={siteName} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SHARIF SHOP
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link style={{ textDecoration: 'none', color: "#fff" }} to="/home">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: "#fff" }} to="/exploreproducts">
                                <Button color="inherit">Explore </Button>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: "#fff" }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </Link>
                        </Box>
                        {
                            user?.email ?
                                <Box className={navItemContainer}>

                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: "#fff" }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>

                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;