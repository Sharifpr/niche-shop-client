import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../../../Product/Product';


const HomeExplore = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 5 }} variant="h5" style={{ textAlign: "center", fontSize: "30px", fontWeight: "500px" }} component="div">
                    Our <span style={{ color: "#f1c40f" }}>Best Selling</span> Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeExplore;