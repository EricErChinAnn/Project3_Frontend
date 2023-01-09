import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"

import Navbar from "./component/navBar";

import CustomerProvider from "./provider/customersProvider";


export default function App() {

  return (

    <CustomerProvider>
      <Navbar />
    </CustomerProvider>

  )
}