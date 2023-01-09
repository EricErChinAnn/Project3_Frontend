import React, { useState } from "react";
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

                if(!response.data.error){

                    const accessToken = response.data.accessToken;
                    const refreshToken = response.data.refreshToken;
        
                    localStorage.setItem('accessToken', JSON.stringify(accessToken));
                    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));

                    return true

                } else {

                    console.log(response.data.error)

                }
                

            } catch (error) {
                
                console.log(error)

            }

        },

        logout: async () => {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('accessToken'))
            }

			try {

				await axios.post(API_URL + '/customers/logout', {
					refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
				},
                {headers:headers}
                );


                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

			} catch (error) {

				console.log(error);


			}
		},




    }


    return (
        <CustomerContext.Provider value={customerContext}>
            {props.children}
        </CustomerContext.Provider>
    );


}