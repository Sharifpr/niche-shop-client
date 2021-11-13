import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-wave-42472.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, []);

    const handleCancel = (_id) => {
        fetch(`https://gentle-wave-42472.herokuapp.com/delete/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const remainingOrders = myOrders.filter((order) => order._id !== _id);
                    setMyOrders(remainingOrders);
                    alert("You want to delete this product?");
                } else {
                    alert("Something is wrong");
                }
            });
    };
    return (
        <div className="container">
            <table className="table container table-hover table-stripe">
                <thead className="mx-auto">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders?.map((i) => {

                        return (
                            <tr key={i?._id}>
                                <td>{i?.product.slice(0, 20)}</td>
                                <td>{i?.email}</td>
                                <td>{i?.user}</td>
                                <td>{i?.address}</td>
                                <td>
                                    <button
                                        onClick={() => handleCancel(i?._id)}
                                        className="btn btn-success"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;