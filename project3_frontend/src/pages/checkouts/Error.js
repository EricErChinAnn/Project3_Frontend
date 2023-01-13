import React from "react";
import OrderListing from "../orders/OrderListing"

export default function Error() {

    return (
        <React.Fragment>
            <div className="container  p-3">
                <div className="container  p-3" style={{ backgroundColor: "red", color: "white" }}>
                    <p>Error occur during payment, please try again later.</p>
                </div>
            </div>
            <OrderListing/>
        </React.Fragment>

    )
}