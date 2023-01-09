import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./component/navBar";

import CustomerProvider from "./provider/customersProvider";


export default function App() {

  return (

    <React.Fragment>

      <CustomerProvider>
        <Navbar />
      </CustomerProvider>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>


    </React.Fragment>

  )
}