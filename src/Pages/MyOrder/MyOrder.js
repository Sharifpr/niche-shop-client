import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-wave-42472.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);

    const handleCancel = (_id) => {
        fetch(`https://gentle-wave-42472.herokuapp.com/delete/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const remainingOrders = myOrders.filter((order) => order._id !== _id);
                    setMyOrders(remainingOrders);
                    alert("Want to delete?");
                } else {
                    alert("Something is wrong");
                }
            });
    };

    return (
        <div className="text-center container">
            <table className="table container table-hover table-stripe">
                <thead className="mx-auto">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>

                        <th scope="col">Address</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {myOrders?.map((order) => {
                        // const { _id, user, email } = order;

                        return (
                            <tr key={order?._id}>
                                <td>{order?.product}</td>
                                <td>{order?.user}</td>
                                <td>{order?.address}</td>
                                <td>
                                    <button
                                        onClick={() => handleCancel(order?._id)}
                                        className="btn btn-warning"
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

export default MyOrder;
