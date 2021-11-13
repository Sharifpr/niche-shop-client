import React from "react";
import Rating from "react-rating";
import './SignleReview.css';

const SingleReview = (props) => {
    const { user, email, review, stars } = props.review;
    return (
        <div>
            <div className="card text-center p-3 review" style={{ color: "#3498db", lineHeight: "20px" }}>
                <h5>{user}</h5>
                <div className="card-body">
                    <h5 className="card-title">{email}</h5>
                    <p className="card-text">{review}</p>
                    <p className="card-text">
                        {stars} Star by{" "}
                        <small className="text-muted" >
                            {user}
                        </small>{" "}
                    </p>
                    <Rating
                        className="d-block"
                        readonly
                        initialRating={stars}
                        fullSymbol="fas fa-star text-warning"
                        emptySymbol="far fa-star"
                    ></Rating>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
