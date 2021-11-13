import React, { useEffect, useState } from 'react';
import SingleReview from '../SignleReview/SignleReview';
import './review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://gentle-wave-42472.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);



    return (
        <div className="container">
            <h3 className="text-center">Customers <span className="text-warning">FeedBack</span></h3>
            <div className="review-container">
                {reviews.map((review) => (
                    <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>
                ))}
            </div>
        </div>
    );
};

export default Review;