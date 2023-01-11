import React, { useEffect, useContext, useState } from "react";

//Context & Provider
import CustomerContext from "../context/customers"



export default function OffCanvasCart() {

    const customerContext = useContext(CustomerContext)

    useEffect(() => {

        customerContext.getCart().then((res) => {

            let cart = res.data.results
            customerContext.setCartValue(cart)

        })

    }, [customerContext.checkLogin])

    console.log(customerContext.cartValue)

    return (
        <React.Fragment>

            




            {customerContext.cartValue.length}

        </React.Fragment>
    )

}