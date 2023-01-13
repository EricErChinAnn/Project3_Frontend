import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

    let navigateTo = useNavigate()

    const customerLogin = async () => {

        const result = await customerContext.login(formValue);

        // console.log(result)

        if (!result) {

            document.querySelector(".loginErrorMessage").style.display = "inline-block"

        } else {

            document.querySelector(".loginErrorMessage").style.display = "none"
            // console.log('Welcome back');
            navigateTo('/')

        }

        let startTime = Date.now()
        let endTime = startTime + 7200000

        async function refreshTokenRunner() {
            startTime = Date.now()
            if (startTime > endTime || !localStorage.getItem("refreshToken")) {

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
                await customerContext.refresh()

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
            <div className='d-flex justify-content-center'>
                <div style={{ maxWidth: "500px" }}>
                    <div className='d-flex justify-content-center mt-3'>
                        <h1 className='d-flex fontPSP '>Login</h1>
                    </div>
                    {/* <form> */}
                    <div className='p-3'>
                        <div className='border p-3 rounded border-opacity-50' style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
                            <label className='mt-3'>Email:</label>
                            <div className="input flex-nowrap">
                                <input type="text" className="form-control"
                                    name='email'
                                    value={formValue.email}
                                    onChange={updateFormValue}
                                />
                            </div>

                            <label className='mt-3'>Password:</label>
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

                            <div className='d-flex justify-content-end p-3'>
                                <input type="submit" className="btn btn-primary px-4 bgColor bgColorBtn" value="Login" onClick={customerLogin} />
                            </div>
                        </div>
                        <div className="d-flex ">
                            <p className='p-2'>Don't have an account?
                                <a href="..." className="fontColor" onClick={(e) => {
                                    e.preventDefault()
                                    navigateTo('/customers/register')
                                }}> Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </React.Fragment >

    );
}
