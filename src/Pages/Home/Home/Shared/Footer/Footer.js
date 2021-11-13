import React from 'react';
import { Button, FormControl, InputGroup, Stack } from 'react-bootstrap';
import GoogleMap from '../GoogleMap/GoogleMap';

import './footer.css';


const Footer = () => {
    return (

        <div className="main-footer footer-style py-4 mt-4">
            <div className="container  ">
                <div className="row ">
                    {/* coloumn-01 */}
                    <div className="col-md-3 col-sm-6">
                        <h4><strong>SHARIF SHOP</strong></h4>
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li>Our goal is to make shopping for a laptop simple, buying guides and interactive product finders to help narrow your search and avoid buyers’ remorse.</li>
                        </ul>
                        <Stack className="soical-icon" direction="horizontal" gap={3}>
                            <a href="https://web.facebook.com/profile.php?id=100009968520679"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://twitter.com/sharifahmed5320?fbclid=IwAR3kNbTisxdMnFYKRV1-eC5FduksT2QrQCkN42PMbPtB-r1Dfimz3q8SHTw"><i className="fab fa-twitter-square"></i></a>
                            <a href="https://www.linkedin.com/in/sharif-ahmed-200b951a3/"><i className="fab fa-linkedin"></i></a>
                        </Stack>

                    </div>
                    {/* coloumn-02 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Our Location</h4>
                        <GoogleMap></GoogleMap>
                    </div>
                    {/* coloumn-03 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact</h4>
                        <ul className="list-unstyled">
                            <li>Phone: + 10255 6241 2532</li>
                            <li>Email: example@gmail.com</li>
                            <li>Address: 157, State Road, Dhaka, Bangladesh.</li>

                        </ul>
                    </div>
                    {/* coloumn-04 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Join Us</h4>
                        <ul className="list-unstyled">
                            <li className="fs-3 my-3"><strong>NewsLetter</strong></li>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Send your CV"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    variant="primary">Submit</Button>
                            </InputGroup>
                        </ul>
                    </div>
                </div>
                {/* footer bottom */}
                <div className="footer-bottom ">
                    <p className="text-center"><strong> @ All Rights Reserved By: Sharif Ahmed 2021 </strong></p>
                </div>
            </div>
        </div >




    );
};

export default Footer;