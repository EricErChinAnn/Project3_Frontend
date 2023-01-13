import React from "react";
import { ToastContainer } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css"
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";


import Navbar from "./component/navBar";

import CustomerProvider from "./provider/customersProvider";
import ProductsProvider from "./provider/productsProvider";


export default function App() {

  return (

    <React.Fragment>

      <CustomerProvider>
        <ProductsProvider>
          <Navbar />
        </ProductsProvider>
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

      <a className="backToTop rounded-pill px-2" href="..." onClick={(e)=>{
      e.preventDefault()
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
      }}><i className="bi bi-arrow-bar-up"></i></a>

      <footer>
        <div className="footer-content d-flex flex-row justify-content-evenly">
          <div className="logoFooterDiv p-3 ">
          <img className="logoNav" src="tictaxtoe.png"  alt="Logo"/>
          </div>
          <div>
            <h5>Contact Us</h5>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-facebook"></i></a></li>
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-twitter"></i></a></li>
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-google"></i></a></li>
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-google-play"></i></a></li>
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-youtube"></i></a></li>
              <li className="breadcrumb-item"><a className="onHoverFooter" style={{ color: "whitesmoke" }} href="..."><i className="bi bi-linkedin"></i></a></li>
            </ol>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between">
          <p className="m-0 p-0">Copyright &copy;2023 <a href="...">Tic Tax Toe PTE LTD</a>  </p>
        </div>
      </footer>

    </React.Fragment>

  )
}