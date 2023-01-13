import React from "react";
import OrderListing from "../orders/OrderListing"

export default function Success() {

    return (
        <React.Fragment>
            <div className="container  p-3">
                <div className="container  p-3" style={{ backgroundColor: "lightgreen" }}>
                    <p>Thanks for shopping with us, we await your next visit.</p>
                </div>
            </div>
            <OrderListing/>
        </React.Fragment>

    )
}