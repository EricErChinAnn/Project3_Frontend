import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

import CustomerContext from "../../context/customers";

export default function ProductsListing() {

    const customerContext = useContext(CustomerContext)

    const [orders, setOrders] = useState()

    // const [search, setSearch] = useState({
    //     'name': "",
    //     'min_cost': "",
    //     'max_cost': "",
    //     'player_min': "",
    //     'player_max': "",
    //     'avg_duration': "",
    //     "min_age": "",
    //     'difficulty_id': "",
    //     'categories': [""],
    //     'designers': [""],
    //     'mechanics': [""],
    // })

    // const updateSearch = (event) => {
    //     setSearch({
    //         ...search,
    //         [event.target.name]: event.target.value
    //     });
    // };



    useEffect(() => {

        if (localStorage?.getItem("accessToken")) {

            const getOrders = async () => {

                const allOrders = await customerContext.getOrders()
                console.log(allOrders)

                if(allOrders?.length>0){
                    setOrders(allOrders)
                }
            }

            getOrders();

        } else {

            toast.error(
                `Access denied, login to view orders`, {
                position: "top-center",
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

        }

    }, [])

    const changeDisplayDate = (value) => {
        return value.split('T')[0]
    }

    const changeShippingCost = (value) => {

        if (value <= 500) {
            return `Standard (5D)`
        } else {
            return `Express (7D)`
        }

    }

    if (orders) {

        return (

            <React.Fragment>

                <h1>My Orders</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Customer Details</th>
                                <th>Country</th>
                                <th>Address</th>
                                <th>Postal Code</th>
                                <th>Order Date</th>
                                <th>Delivery Method</th>
                                <th>View Receipt</th>
                                <th>Statuses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((e, i) => {
                                if (e.status_id === 1) {
                                    return (
                                        <tr className="table-secondary" key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.customers?.map((each, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>{each.username}</div>
                                                        <div>{each.email}</div>
                                                        <div>{each.contact}</div>
                                                    </div>
                                                )
                                            })}</td>
                                            <td>{e.country}</td>
                                            <td>
                                                <div>
                                                    <div>{e.address_line_1}</div>
                                                    <div>{e.address_line_2}</div>
                                                </div>
                                            </td>
                                            <td>{e.postal_code}</td>
                                            <td>{changeDisplayDate(e.order_date)}</td>
                                            <td>{changeShippingCost(e.shipping_cost)}</td>
                                            <td>
                                                <a href={e.receipt_url} style={{ textDecoration: "none" }}><i class="bi bi-receipt">View</i></a>
                                            </td>
                                            <td>
                                                {e.statuses.status}
                                            </td>
                                        </tr>
                                    )
                                }

                            })}

                            {orders.map((e, i) => {
                                if (e.status_id === 2) {
                                    return (
                                        <tr className="table-primary" key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.customers.map((each, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>{each.username}</div>
                                                        <div>{each.email}</div>
                                                        <div>{each.contact}</div>
                                                    </div>
                                                )
                                            })}</td>
                                            <td>{e.country}</td>
                                            <td>
                                                <div>
                                                    <div>{e.address_line_1}</div>
                                                    <div>{e.address_line_2}</div>
                                                </div>
                                            </td>
                                            <td>{e.postal_code}</td>
                                            <td>{changeDisplayDate(e.order_date)}</td>
                                            <td>{changeShippingCost(e.shipping_cost)}</td>
                                            <td>
                                                <a href={e.receipt_url} style={{ textDecoration: "none" }}><i class="bi bi-receipt">View</i></a>
                                            </td>
                                            <td>
                                                {e.statuses.status}
                                            </td>
                                        </tr>
                                    )
                                }

                            })}

                            {orders.map((e, i) => {
                                if (e.status_id === 3) {
                                    return (
                                        <tr className="table-info" key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.customers.map((each, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>{each.username}</div>
                                                        <div>{each.email}</div>
                                                        <div>{each.contact}</div>
                                                    </div>
                                                )
                                            })}</td>
                                            <td>{e.country}</td>
                                            <td>
                                                <div>
                                                    <div>{e.address_line_1}</div>
                                                    <div>{e.address_line_2}</div>
                                                </div>
                                            </td>
                                            <td>{e.postal_code}</td>
                                            <td>{changeDisplayDate(e.order_date)}</td>
                                            <td>{changeShippingCost(e.shipping_cost)}</td>
                                            <td>
                                                <a href={e.receipt_url} style={{ textDecoration: "none" }}><i class="bi bi-receipt">View</i></a>
                                            </td>
                                            <td>
                                                {e.statuses.status}
                                            </td>
                                        </tr>
                                    )
                                }

                            })}

                            {orders.map((e, i) => {
                                if (e.status_id === 4) {
                                    return (
                                        <tr className="table-success" key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.customers.map((each, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>{each.username}</div>
                                                        <div>{each.email}</div>
                                                        <div>{each.contact}</div>
                                                    </div>
                                                )
                                            })}</td>
                                            <td>{e.country}</td>
                                            <td>
                                                <div>
                                                    <div>{e.address_line_1}</div>
                                                    <div>{e.address_line_2}</div>
                                                </div>
                                            </td>
                                            <td>{e.postal_code}</td>
                                            <td>{changeDisplayDate(e.order_date)}</td>
                                            <td>{changeShippingCost(e.shipping_cost)}</td>
                                            <td>
                                                <a href={e.receipt_url} style={{ textDecoration: "none" }}><i class="bi bi-receipt">View</i></a>
                                            </td>
                                            <td>
                                                {e.statuses.status}
                                            </td>
                                        </tr>
                                    )
                                }

                            })}

                        </tbody>
                    </table>
            </React.Fragment >

        )


    }



}