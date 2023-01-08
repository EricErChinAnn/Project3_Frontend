import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs(){

    const [ formValue, setFormValue ] = useState({
        name:"",
        email:""
    })

    const navigate = useNavigate();

    function submitForm() {
        navigate(
            '/form-submitted',
            {"state":{"formData":formValue}}
        )
    }   

    return (
        <React.Fragment>
            <h1>About Us</h1>
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formValue.name}
                    onChange={(e)=>{setFormValue({...formValue, [e.target.name]:e.target.value})}}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formValue.email}
                    onChange={(e)=>{setFormValue({...formValue, [e.target.name]:e.target.value})}}/>
                </div>
                <button onClick={submitForm}>Submit</button>
            </div>
        </React.Fragment>

    )
}