import React from 'react';
import { Card } from 'react-bootstrap';
import './services.css'

const Services = () => {
    return (
        <div className="row cart-style container mx-auto my-5">
            <Card className="col-md-3 text-center border-0">
                <Card.Body><i className="fas fa-car fs-1 text-primary"></i></Card.Body>
                <Card.Body>
                    <Card.Title>Free Shipping</Card.Title>
                    <Card.Text>
                        For all oder over $50000
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-md-3 text-center border-0">
                <Card.Body><i className="far fa-money-bill-alt fs-1 text-primary"></i></Card.Body>
                <Card.Body>
                    <Card.Title>Money Back Guarantee</Card.Title>
                    <Card.Text>
                        If good have Problems
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-md-3 text-center border-0">
                <Card.Body><i className="fas fa-headset fs-1 text-primary"></i></Card.Body>
                <Card.Body>
                    <Card.Title>Online Support 24/7</Card.Title>
                    <Card.Text>
                        Dedicated support
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-md-3 text-center border-0">
                <Card.Body><i className="fas fa-money-check-alt fs-1 text-primary"></i></Card.Body>
                <Card.Body>
                    <Card.Title>Payment Secure</Card.Title>
                    <Card.Text>
                        100% secure payment
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;