import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import computer from '../../images/computer.jpg'
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ alignItems: "center", marginTop: "5px" }}>
                    <Grid item xs={12} md={6} style={{ lineHeight: "25px" }}>
                        <Typography style={{ fontSize: "50px", fontWeight: "500" }}>
                            SHARIF <span style={{ color: "#9b59b6" }}>SHOP</span>
                        </Typography>
                        <Typography variant="h5" style={{ fontSize: "30px", fontWeight: "400" }}>
                            Happy shopping Our Webiste
                        </Typography>
                        <Typography variant="p" style={{ color: "gray" }}>
                            Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.
                        </Typography> <br />
                        <Link to="/exploreproducts"><Button style={{ marginTop: "8px" }} variant="contained">Explore</Button></Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={computer} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Banner;