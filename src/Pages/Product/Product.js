import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { img, name, description, price, _id } = props.product;


    return (
        <>
            <Grid item xs={4} sm={4} md={4} spacing={2}>
                <Card sx={{ borderRadius: 1, p: 1 }}>
                    <CardMedia
                        component="img"
                        style={{ width: "100%", height: "100%" }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: "#8e44ad" }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Price : ${price}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ marginTop: "-8px" }}>
                        <NavLink to={`/product/${_id}`}><Button variant="contained">BUY NOW</Button></NavLink>
                    </CardActions>
                </Card>
            </Grid>

        </>
    );
};

export default Product;