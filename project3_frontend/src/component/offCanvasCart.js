import React, { useEffect, useContext, useState } from "react";

//Context & Provider
import CustomerContext from "../context/customers"



export default function OffCanvasCart() {

    const customerContext = useContext(CustomerContext)

    useEffect(() => {

        if (localStorage) {
            customerContext.getCart().then((res) => {

                let cart = res.data.results
                customerContext.setCartValue(cart)

            })
        }

    }, [customerContext.checkLogin, localStorage])

    // console.log(customerContext.cartValue)

    // let customerContext.


    return (
        <React.Fragment>
            {customerContext.cartValue.map((e, i) => {

                return (
                    <div className="card shadow-lg text-bg-dark d-flex flex-row my-3" key={i}>

                        {e.product.images.map((each, index) => {
                            if (index == 0) {
                                return (<img src={each.image_url} key={index} className="card-img-top" style={{ width: "100px", height: "auto", objectFit: "scale-down" }} alt="..." />)
                            }
                        })}

                        <div className="card-body">
                            <h5 className="card-title">{e.product.name}</h5>
                            <p className="card-text m-0 p-0">S$ {e.product.cost / 100}</p>
                            <p className="card-text m-0 p-0">Quantity: {e.quantity}</p>
                            <p className="card-text m-0 mt-3 p-0">Total: S$ {(e.product.cost / 100) * e.quantity}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )

            })}

            {/* {customerContext.cartValue.length} */}

        </React.Fragment>
    )

}