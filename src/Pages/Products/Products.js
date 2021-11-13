import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Product from '../Product/Product';


const Products = () => {



    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://gentle-wave-42472.herokuapp.com/product',)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Container>
                <Typography sx={{ fontWeight: 500, m: 5, fontSize: "30px" }} variant="h5" style={{ textAlign: "center", color: "#9b59b6" }} component="div">
                    OUR BEST PRODUCTS
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginBottom: "20px" }}>
                    {
                        items.map(product => <Product
                            product={product}
                            key={product._id}

                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;