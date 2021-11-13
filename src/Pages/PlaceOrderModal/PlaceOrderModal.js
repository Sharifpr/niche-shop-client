import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const PlaceOrderModal = ({ order, handleOrderClose, product, setOrderSuccess }) => {

    const { title, price } = product;
    const { user } = useAuth();

    const initalInfo = { userName: user.displayName, email: user.email, phone: '', count: '' }

    const [placeOrderInfo, setPlaceOrderInfo] = useState(initalInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...placeOrderInfo };
        newInfo[field] = value;
        setPlaceOrderInfo(newInfo)
    }

    const handlePlaceOrderSubmit = e => {


        // collect data 
        const product = {
            ...placeOrderInfo,
            price,
            productName: title
        }
        // server to the server
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleOrderClose()
                }
            });

        e.preventDefault()
    }

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={order}
                onClose={handleOrderClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={order}>
                    <Box sx={style}>
                        <Typography style={{ textAlign: "center", marginBottom: "5px" }}>Place Order</Typography>
                        <form style={{ textAlign: "center" }} onSubmit={handlePlaceOrderSubmit}>
                            <TextField
                                disabled
                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                defaultValue={title.slice(0, 20)}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                defaultValue={price}
                                size="small"
                            />
                            <TextField

                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                name="count"
                                onBlur={handleOnBlur}
                                defaultValue="count"
                                size="small"
                            />
                            <TextField

                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                name="userName"
                                onBlur={handleOnBlur}
                                defaultValue={user?.displayName}
                                size="small"
                            />
                            <TextField

                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                email="email"
                                onBlur={handleOnBlur}
                                defaultValue={user?.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: "85%", m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                defaultValue="Your Phone Number"
                                size="small"
                            />
                            <Button type="submit" variant="contained">Place Order</Button>

                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


export default PlaceOrderModal;