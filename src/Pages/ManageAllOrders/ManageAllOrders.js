import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const [status, setStatus] = useState("");

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

    const handleUpdateStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://gentle-wave-42472.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, []);


    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://gentle-wave-42472.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => setStatus(result));;

        console.log(id);
    };


    return (
        <div className="container">
            <table className="table container table-hover table-stripe shadow">
                <thead className="mx-auto">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Update</th>
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
                                    <div class="input-group">
                                        <select
                                            onChange={handleUpdateStatus}
                                            class="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon"
                                        >
                                            <option selected value={i?.status}>
                                                {i.status}
                                            </option>
                                            <option value="Approved">Approved</option>
                                            <option value="Shipped">Shipped</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleUpdate(i?._id)}
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleCancel(i?._id)}
                                        className="btn btn-primary"
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