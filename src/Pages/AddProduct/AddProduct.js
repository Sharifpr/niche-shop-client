import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://gentle-wave-42472.herokuapp.com/addproduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset();
    };


    return (
        <div>
            <div className="container">
                <h2 className="text-center my-2" >Add A New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="p-2 my-1 w-100"
                    />
                    <br />
                    <input
                        {...register("price")}
                        placeholder="Price"
                        className="p-2 my-1 w-100"
                    />
                    <br />
                    <input
                        {...register("description")}
                        placeholder="Description"
                        className="p-2 my-1 w-100"
                    />
                    <br />
                    <input
                        {...register("img", { required: true })}
                        placeholder="Image Link"
                        className="p-2 my-1 w-100"
                    />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <p className="w-50 m-auto p-2">
                        <input
                            type="submit"
                            value="Add A Product"
                            className="btn btn-warning d-block m-auto px-3"
                        />
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;