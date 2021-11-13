import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import registerImg from '../../../images/ragister.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../../Home/Home/Shared/Footer/Footer';


const Register = () => {

    const [logindata, setLoginData] = useState({})


    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...logindata };
        newLogindata[field] = value;
        console.log(newLogindata);
        setLoginData(newLogindata)
    }

    const handleloginSubmit = e => {
        if (logindata.password !== logindata.password2) {
            alert("your password didn't matched");
            return;
        }
        registerUser(logindata.email, logindata.password, logindata.name, history);
        e.preventDefault()
    }

    return (
        <>
            <Container>
                <Grid container spacing={2} style={{ alignItems: "center", marginTop: "5px" }}>
                    <Grid xs={12} md={6}>
                        <Typography sx={{ fontWeight: 500, textAlign: "center" }} variant="h5" component="div">
                            Please Register
                        </Typography>
                        {!isLoading && < form onSubmit={handleloginSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Type your password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                label="ReType your password"
                                variant="standard"
                            />

                            <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>
                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button variant="text">Alrady Registered?Please Login</Button>
                            </NavLink>

                        </form>}
                        {isLoading && <CircularProgress style={{ alignItems: "center" }} />}
                        {
                            user?.email && <Alert severity="success">Created user Successfully!!!</Alert>

                        }
                        {
                            authError && <Alert severity="error">{authError}!</Alert>

                        }
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={registerImg} width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container >
            <Footer></Footer>
        </>
    );
};

export default Register;