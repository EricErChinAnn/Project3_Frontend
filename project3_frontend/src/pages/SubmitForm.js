import React from "react"
import { useLocation } from "react-router-dom"

export default function SubmittedForm(){

    const location = useLocation();

    const data = location.state.formData

    return (
        <React.Fragment>
            <h1>Thank you for contacting us</h1>
            <h4>{data.name} from {data.email}</h4>
        </React.Fragment>
    )
}