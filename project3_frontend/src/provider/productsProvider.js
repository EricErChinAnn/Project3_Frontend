import React from "react";
import axios from "axios";

import ProductContext from "../context/products"

const API_URL = "https://6000-ericerchina-project3bac-s8ol8p2mxd0.ws-us82.gitpod.io/api"

export default function ProductsProvider(props) {


    const productContext = {

        getProducts: async (paramsPayload) => {
            try {

                let response = await axios.get(API_URL + '/products',
                { params: paramsPayload }
                );

                return await response.data.results

            } catch (error) {
                console.log(error)
            }
        },


        getTables: async () => {
            try {

                let response = await axios.get(API_URL + '/products/tables');

                return await response.data

            } catch (error) {

                console.log(error)

            }
        },

    }

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );

    
}