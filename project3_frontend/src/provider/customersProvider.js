import React, { useState } from "react";
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

import CustomerContext from "../context/customers"

const API_URL = "https://6000-ericerchina-project3bac-s8ol8p2mxd0.ws-us81.gitpod.io/api"

export default function CustomerProvider(props) {

    // const [custValue, setcustValue] = useState({});
    // const navigateTo = useNavigate();

    const customerContext = {

        login: async (customerLogin) => {

            try {

                const response = await axios.post(API_URL + '/customers/login', customerLogin);

                // console.log(response)

                if (!response.data.error) {

                    const accessToken = response.data.accessToken;
                    const refreshToken = response.data.refreshToken;
                    const customerName = response.data.customerName;

                    // console.log("apple")
                    // console.log(response.data)

                    localStorage.setItem('accessToken', JSON.stringify(accessToken));
                    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
                    localStorage.setItem("customerName", JSON.stringify(customerName));

                    toast.success(
                        `Welcome Back, ${customerName}.`, {
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

                    return true

                } else {

                    toast.error(
                        `Please enter your authentication details`, {
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

                    console.log(response.data.error)

                }


            } catch (error) {

                toast.error(
                    "Authentication details you provided are incorrect.", {
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

                console.log(error)

            }

        },

        logout: async () => {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('accessToken'))
            }

            let customerName = localStorage.getItem('customerName')

            // console.log(customerName)

            try {

                await axios.post(API_URL + '/customers/logout', {
                    refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
                },
                    { headers: headers }
                );


                // console.log(customerName)


                toast.success(
                    `See you again, ${JSON.parse(customerName)}.`, {
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

                localStorage.clear();

            } catch (error) {

                toast.error(
                    `Error occurr, try again later.`, {
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

                console.log(error);

            }
        },

        register: async (customerData) => {

                try {


                    const response = await axios.post(API_URL + '/customers/register', customerData);


                    toast.success(
                        `Account created.`, {
                        position: "top-center",
                        autoClose: 1800,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })


                } catch (error) {


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

                    localStorage.clear()

                    console.log(error)

                }

        },

        refresh: async () => {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('accessToken'))
            }

            try {

               let response = await axios.post(API_URL + '/customers/refresh', {
                    refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
                },
                    { headers: headers }
                );

                let accessToken = response.data.accessToken

                console.log(localStorage)

                localStorage.setItem("accessToken",JSON.stringify(accessToken))

                console.log(localStorage)

            } catch (error) {




                console.log(error)

            }
        },

    }


    return (
        <CustomerContext.Provider value={customerContext}>
            {props.children}
        </CustomerContext.Provider>
    );


}