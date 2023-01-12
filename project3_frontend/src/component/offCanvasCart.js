import React, { useEffect, useContext, useState } from "react";

//Context & Provider
import CustomerContext from "../context/customers"

export default function OffCanvasCart() {

    const [changeQuantity, setChangeQuantity] = useState(0)

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

    }, [customerContext.checkLogin, localStorage, customerContext.cartValue, changeQuantity])

    // console.log(customerContext.cartValue)

    const updateCartQuantity = async (productId, quantity) => {

        customerContext.updateCartQuantity(productId)

    }

    return (
        <React.Fragment>
            {customerContext.cartValue.map((e, i) => {

                return (

                    <div className="card shadow-lg text-bg-dark d-flex flex-row my-3 position-relative" key={i}>

                        {e.product.images.map((each, index) => {
                            if (index == 0) {
                                return (<img src={each.image_url} key={index} className="card-img-top ms-3" style={{ width: "100px", height: "auto", objectFit: "scale-down" }} alt="..." />)
                            }
                        })}

                        <div className="card-body">
                            <h5 className="card-title">{e.product.name}</h5>
                            <p className="card-text m-0 p-0">S$ {(e.product.cost / 100).toFixed(2)}</p>


                            <div id={"display" + i}>
                                <div className="d-flex flex-column" id={"display" + i}>
                                    <div className="d-flex flex-row">
                                        <p className="card-text m-0 p-0">Quantity: {e.quantity}</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => {
                                        setChangeQuantity(e.quantity);
                                        document.querySelector(`#display${i}`).style.display = "none"
                                        document.querySelector(`#edit${i}`).style.display = "inline"
                                    }}>Update Quantity</button>
                                </div>
                            </div>

                            <div style={{ display: "none" }} id={"edit" + i}>
                                <div className="d-flex flex-column" >
                                    <div className="d-flex flex-row">
                                        <p>Quantity: </p>
                                        <input type="number" className="ms-2" style={{ width: "55px" }}
                                            value={changeQuantity} onChange={(e) => { setChangeQuantity(e.target.value) }} />
                                    </div>
                                    <button className="btn btn-primary mt-2"
                                        onClick={() => {
                                            customerContext.updateCartQuantity(e.product_id, changeQuantity)
                                            document.querySelector(`#display${i}`).style.display = "inline"
                                            document.querySelector(`#edit${i}`).style.display = "none"
                                        }}
                                    >Confirm Quantity</button>
                                </div>
                            </div>
                            <p className="card-text m-0 mt-3 p-0">Total: S$ {((e.product.cost / 100) * e.quantity).toFixed(2)}</p>
                        </div>
                        <a class="position-absolute px-2 end-0 removeCartItem" style={{ color: "white" }}>
                            <i class="bi bi-x-lg" ></i>
                        </a>
                    </div>
                )

            })}
            <div className="border bottom-0 mb-3"></div>
            <div className="d-flex justify-content-end align-items-end bottom-0">
                <h2>
                    Total Cost: S$ {parseFloat(customerContext.grandTotal).toFixed(2)}
                </h2>
            </div>

        </React.Fragment>
    )

}