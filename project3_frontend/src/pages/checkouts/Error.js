import React, { useState } from "react";

export default function Error(){

    return (
        <React.Fragment>
            <div className="container" style={{backgroundColor:"red"}}>
                <p>Error occur during payment, please try again later.</p>
            </div>
        </React.Fragment>

    )
}