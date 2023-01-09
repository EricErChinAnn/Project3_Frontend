import React, { useContext, useState } from 'react';
import CustomerContext from "../../context/customers"


export default function Register(props) {

    const customerContext = useContext(CustomerContext)

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

        const result = await customerContext.register(formValue);

        console.log(result)

        if (!result) {

            document.querySelector(".loginErrorMessage").style.display = "inline-block"

        } else {

            document.querySelector(".loginErrorMessage").style.display = "none"
            console.log('Welcome back');

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


            <label>Password:</label>
            <div className="input flex-nowrap">
                <input type="password" className="form-control"
                    name='password'
                    value={formValue.password}
                    onChange={updateFormValue}
                />
            </div>


            <label>Confirm Password:</label>
            <div className="input flex-nowrap">
                <input type="password" className="form-control"
                    name='password'
                    value={formValue.password}
                    onChange={updateFormValue}
                />
            </div>


            <label>Email:</label>
            <div className="input flex-nowrap">
                <input type="email" className="form-control"
                    name='email'
                    value={formValue.email}
                    onChange={updateFormValue}
                />
            </div>


            <label>Date of Birth:</label>
            <div className="input flex-nowrap">
                <input type="date" className="form-control"
                    name='dob' max={new Date().toISOString().split('T')[0]}
                    value={formValue.dob}
                    onChange={updateFormValue}
                />
            </div>


            <label>Contact:</label>
            <div className="input flex-nowrap">
                <input type="number" className="form-control"
                    name='contact'
                    value={formValue.contact}
                    onChange={updateFormValue}
                />
            </div>

            <label>Country:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='country'
                    value={formValue.country}
                    onChange={updateFormValue}
                />
            </div>

            <label>Postal Code:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='postal_code'
                    value={formValue.postal_code}
                    onChange={updateFormValue}
                />
            </div>


            <label>Address Line 1:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='address_line_1'
                    value={formValue.address_line_1}
                    onChange={updateFormValue}
                />
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
                <input type="submit" className="btn btn-primary" value="Register" />
            </div>


        </React.Fragment>

    );
}
