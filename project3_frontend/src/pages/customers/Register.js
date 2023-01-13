import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CustomerContext from "../../context/customers"


export default function Register(props) {

    const customerContext = useContext(CustomerContext)

    const [btnCLick, setBtnCLick] = useState(false)

    const [formValue, setFormValue] = useState({

        'username': "",
        'email': "",
        "password": "",
        "password_confirm": "",
        "dob": "",
        "contact": "",
        "postal_code": "",
        "address_line_1": "",
        "address_line_2": "",
        "country": "",

    });

    const updateFormValue = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const customerRegister = async () => {

        let pingError = false

        if (!formValue.username) {
            document.querySelector(".username").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".username").style.display = "none"
        }

        if (!formValue.password) {
            document.querySelector(".password").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".password").style.display = "none"
        }

        if (!formValue.password_confirm || formValue.password !== formValue.password_confirm) {
            document.querySelector(".password_confirm").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".password_confirm").style.display = "none"
        }

        if (!formValue.dob) {
            document.querySelector(".dob").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".dob").style.display = "none"
        }

        if (!formValue.contact) {
            document.querySelector(".contact").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".contact").style.display = "none"
        }

        if (!formValue.email || !formValue.email.split("").includes("@",".")) {
            document.querySelector(".email").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".email").style.display = "none"
        }

        if (!formValue.postal_code) {
            document.querySelector(".postal_code").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".postal_code").style.display = "none"
        }

        if (!formValue.address_line_1) {
            document.querySelector(".address_line_1").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".address_line_1").style.display = "none"
        }

        if (!formValue.country) {
            document.querySelector(".country").style.display = "inline"
            pingError = true
        } else {
            document.querySelector(".country").style.display = "none"
        }

        document.querySelectorAll(".errorDisplay").forEach((e) => {
            e.style.display = "block"
        })

        if (pingError) {
            toast.error(
                `Please enter the required fields.`, {
                position: "top-center",
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }
            )
        } else {

            // console.log(formValue)
            const result = await customerContext.register(formValue);

        }

    }



    return (

        <React.Fragment>

            <h1>Register</h1>



            <label>Username:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='username'
                    value={formValue.username}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="username" style={{ color: 'red', display: "none" }}>Please provide a username.</p>
            </div>


            <label>Password:</label>
            <div className="input flex-nowrap">
                <input type="password" className="form-control"
                    name='password'
                    value={formValue.password}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="password" style={{ color: 'red', display: "none" }}>Please provide a password.</p>
            </div>


            <label>Confirm Password:</label>
            <div className="input flex-nowrap">
                <input type="password" className="form-control"
                    name='password_confirm'
                    value={formValue.password_confirm}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="password_confirm" style={{ color: 'red', display: "none" }}>Password does not match.</p>
            </div>


            <label>Email:</label>
            <div className="input flex-nowrap">
                <input type="email" className="form-control"
                    name='email'
                    value={formValue.email}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="email" style={{ color: 'red', display: "none" }}>Please provide a valid email.</p>
            </div>


            <label>Date of Birth:</label>
            <div className="input flex-nowrap">
                <input type="date" className="form-control"
                    name='dob' max={new Date().toISOString().split('T')[0]}
                    value={formValue.dob}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="dob" style={{ color: 'red', display: "none" }}>Please provide your date of birth.</p>
            </div>


            <label>Contact:</label>
            <div className="input flex-nowrap">
                <input type="number" className="form-control"
                    name='contact'
                    value={formValue.contact}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="contact" style={{ color: 'red', display: "none" }}>Please provide your contact.</p>
            </div>

            <label>Country:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='country'
                    value={formValue.country}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="country" style={{ color: 'red', display: "none" }}>Please provide your country.</p>
            </div>

            <label>Postal Code:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='postal_code'
                    value={formValue.postal_code}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="postal_code" style={{ color: 'red', display: "none" }}>Please provide your postal code.</p>
            </div>


            <label>Address Line 1:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='address_line_1'
                    value={formValue.address_line_1}
                    onChange={updateFormValue}
                />
            </div>
            <div className='errorDisplay' style={{ display: "none" }}>
                <p className="address_line_1" style={{ color: 'red', display: "none" }}>Please provide your address.</p>
            </div>


            <label>Address Line 2:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='address_line_2'
                    value={formValue.address_line_2}
                    onChange={updateFormValue}
                />
            </div>

            <div>
                <input type="submit" className="btn btn-primary" value="Register"
                    onClick={customerRegister} />
            </div>


        </React.Fragment>

    );
}
