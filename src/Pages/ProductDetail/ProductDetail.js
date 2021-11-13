import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Home/Home/Shared/Footer/Footer";
import './productDetail.css'

const ProductDetail = () => {

    const { _id } = useParams();

    const { user } = useAuth();
    const [isUpdate, setIsUpdated] = useState(null);
    console.log(isUpdate);

    const [products, setProducts] = useState({})



    useEffect(() => {
        const url = `https://gentle-wave-42472.herokuapp.com/product/${_id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));

    }, [_id]);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch(`https://gentle-wave-42472.herokuapp.com/shipment/${_id}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });
        console.log(data);
        reset();
    };

    const product = products[0];


    return (
        <div>
            <div className="container overflow-hidden ">
                <div className="row gx-5">
                    <div className="col-lg-6">
                        <div className="p-3">
                            <div className="card mb-3 shadow">
                                <img src={product?.img} height="380px" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product?.name}</h5>
                                    <p className="card-text">{product?.description}</p>
                                    <p className="card-text">
                                        Price: ${product?.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3 ">
                            <h3 className="text-center">Place Order</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="placeOrder-container ">
                                <input
                                    className="p-2 px-4 m-2"
                                    placeholder="Enter your name"
                                    defaultValue={user?.displayName}
                                    {...register("user", { required: true })}
                                /> <br />
                                <input
                                    className="p-2 px-4 m-2"
                                    placeholder="Enter your email"
                                    defaultValue={user?.email}
                                    {...register("email", { required: true })}
                                /> <br />
                                <input
                                    className="p-2 px-4 m-2"
                                    type="text"
                                    placeholder="Enter your address"
                                    {...register("address", { required: true })}
                                    required
                                /> <br />
                                <input
                                    className="p-2 px-4 m-2"
                                    type="text"
                                    placeholder="phone number"
                                    {...register("phone", { required: true })}
                                    required
                                /> <br />
                                <input
                                    className="p-2 px-4 m-2"
                                    placeholder="Enter product Name"
                                    defaultValue={product?.name}
                                    {...register("product", { required: true })}
                                    required
                                />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input
                                    className="btn btn-primary py-2 px-5 m-3"
                                    type="submit"
                                    value="PLACE ORDER"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default ProductDetail;