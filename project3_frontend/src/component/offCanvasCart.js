import React, { useEffect, useContext, useState } from "react";

//Context & Provider
import CustomerContext from "../context/customers"



export default function OffCanvasCart() {

    const customerContext = useContext(CustomerContext)

    useEffect(() => {

        if (localStorage?.getItem("accessToken")) {
            customerContext.getCart().then((res) => {

                let cart = res.data.results
                customerContext.setCartValue(cart)

                let total = 0
                // console.log(total)
                customerContext.cartValue.map((each) => {

                    return (
                        total = total + (parseInt(each.product.cost) / 100) * parseInt(each.quantity)
                    )
                })

                customerContext.setGrandTotal(total)

            })
        }

    }, [customerContext.checkLogin, localStorage,customerContext.cartValue])

    // console.log(customerContext.cartValue)




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
                            <p className="card-text m-0 p-0">S$ {(e.product.cost / 100).toFixed(2)}</p>
                            <p className="card-text m-0 p-0">Quantity: {e.quantity}</p>
                            <p className="card-text m-0 mt-3 p-0">Total: S$ {((e.product.cost / 100) * e.quantity).toFixed(2)}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )

            })}

           <div className="d-flex justify-content-end align-items-end">
            <h2>
            Total Cost: S$ {parseFloat(customerContext.grandTotal).toFixed(2)}
            </h2>
            </div>

        </React.Fragment>
    )

}