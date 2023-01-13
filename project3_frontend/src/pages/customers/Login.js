import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import CustomerContext from "../../context/customers"

export default function Login(props) {

    const customerContext = useContext(CustomerContext)


    // const [errors, setErrors] = useState([]);
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });


    const updateFormValue = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };


    const customerLogin = async () => {

        const result = await customerContext.login(formValue);

        // console.log(result)

        if (!result) {

            document.querySelector(".loginErrorMessage").style.display = "inline-block"

        } else {

            document.querySelector(".loginErrorMessage").style.display = "none"
            // console.log('Welcome back');

        }

        let startTime = Date.now()
        let endTime = startTime + 7200000

       async function refreshTokenRunner(){
            startTime = Date.now()
            if(startTime > endTime || !localStorage.getItem("refreshToken")){

                // console.log("Session have ended")

                toast.error(
                    `Session have ended, login again to continue.`, {
                    position: "top-center",
                    autoClose: 1800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })

                clearInterval(refreshTokenRunnerStart)

            } else {
                // console.log(localStorage.getItem("refreshToken"))
                let apple = await customerContext.refresh()

                // console.log(apple)
            }
        }

        let refreshTokenRunnerStart = setInterval(refreshTokenRunner,
            600000
            // 3000
            )

        // refreshTokenRunnerStart()

    }



    return (

        <React.Fragment>
            <h1>Login</h1>

            {/* <form> */}
            
            <label>Email:</label>
            <div className="input flex-nowrap">
                <input type="text" className="form-control"
                    name='email'
                    value={formValue.email}
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

            <div>
                <p className="loginErrorMessage" style={{ color: 'red', display: "none" }}>Authentication details you provided are incorrect.</p>
            </div>

            <div>
                <input type="submit" className="btn btn-primary" value="Login" onClick={customerLogin} />
            </div>

            {/* </form> */}


        </React.Fragment>

    );
}
