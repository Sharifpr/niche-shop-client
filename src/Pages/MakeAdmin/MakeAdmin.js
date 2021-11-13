import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        // const user = { email };
        fetch('https://gentle-wave-42472.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                }

            });

        e.preventDefault()
    }
    return (
        <div className="container text-center" style={{ width: "420px" }}>
            <h4>Make Admin</h4>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "60%" }}
                    label="Email"
                    type="email"
                    onBlur={handleBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">SuccesFully Admin Created </Alert>}
        </div >
    );
};

export default MakeAdmin;