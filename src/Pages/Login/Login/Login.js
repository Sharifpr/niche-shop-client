import { Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Home/Shared/Footer/Footer';


const Login = () => {
    const [logindata, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWIthGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...logindata };
        newLogindata[field] = value;
        setLoginData(newLogindata)
    }

    const handleloginSubmit = e => {
        loginUser(logindata.email, logindata.password, location, history);
        e.preventDefault()
    }


    const handleGoogleSignIn = () => {
        signInWIthGoogle(location, history)
    }

    return (
        <>
            <Container>
                <Grid container spacing={2} style={{ alignItems: "center", justifyContent: "center", marginTop: "5px" }}>
                    <Grid xs={12} md={6}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center" }} variant="h5" component="div">
                            Please Login
                        </Typography>
                        <form onSubmit={handleloginSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                label="Enter your password"
                                variant="standard"
                            />

                            <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>
                            <NavLink style={{ textDecoration: "none" }} to="/register">
                                <Button variant="text">New User?Please Register!</Button>
                            </NavLink>
                            {isLoading && <CircularProgress style={{ alignItems: "center" }} />}
                            {
                                user?.email && <Alert severity="success">Created user Successfully!!!</Alert>

                            }
                            {
                                authError && <Alert severity="error">{authError}!</Alert>

                            }
                        </form>
                        <p>---------Or---------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Sign in With Google</Button>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={loginImg} width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;