import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import MyOrder from '../MyOrder/MyOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to="/home"><Button variant="text">Home</Button></Link> <br />
            <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/myOrder`}><Button variant="text">My Order</Button></Link> <br />
            <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/payment`}><Button variant="text">Payment</Button></Link> <br />
            <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/review`}><Button variant="text">Add Review</Button></Link> <br />
            {admin && <Box>
                <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/makeAdmin`}><Button variant="text">Make Admin</Button></Link> <br />
                <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/AddProduct`}><Button variant="text">Add Product</Button></Link> <br />
                <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/manageProducts`}><Button variant="text">Manage Products</Button></Link> <br />
                <Link style={{ textDecoration: 'none', color: "#fff", marginLeft: "20px" }} to={`${url}/manageAll`}><Button variant="text">Manage All Order</Button></Link> <br />

            </Box>}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/AddProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route path={`${path}/manageAll`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview />
                    </Route>

                </Switch>
            </Box>

        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
