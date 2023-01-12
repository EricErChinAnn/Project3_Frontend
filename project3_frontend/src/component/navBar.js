import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

//Context & Provider
import CustomerContext from "../context/customers"

//PAGES
import AboutUs from '../pages/AboutUs';
import SubmittedForm from "../pages/SubmitForm";
import LandingPage from '../pages/LandingPage';
import ProductsListing from "../pages/products/ProductsListing";
import Login from "../pages/customers/Login";
import Register from "../pages/customers/Register";

import OffCanvasCart from "./offCanvasCart";
import { toast } from "react-toastify";
import { loadStripe } from '@stripe/stripe-js';

export default function Navbar() {

  const customerContext = useContext(CustomerContext)

  const customerLogout = async () => {
    await customerContext.logout();
  }

  useEffect(() => {

    customerContext.checkLocalStorage();

  }, [customerContext.checkLogin, localStorage])

  const clickCheckOut = async () => {

    if (customerContext.cartValue?.length > 0) {

      let response = await customerContext.checkOut()

      const stripe = await loadStripe(response.publishableKey);
      stripe.redirectToCheckout({"sessionId":response.sessionId});

    } else {

      toast.error(
        `Cart is empty`, {
        position: "top-center",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

    }

  }


  return (
    <React.Fragment>

      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid" >
            <Link className='link navbar-brand' to="/"><h1>LandingPage</h1></Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='link nav-link' to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className='link nav-link' to="/products">Products</Link>
              </li>

              {!customerContext.checkLogin ?

                //If not logged in
                <li className="nav-item">
                  <Link className='link nav-link' to="/customers/register">Register</Link>
                  <Link className='link nav-link' to="/customers/login">Login</Link>
                </li>

                :

                //If logged in
                <React.Fragment>
                  <li className="nav-item">
                    <Link className='link nav-link' data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="My Cart" onClick={(e) => { e.preventDefault(); }}>
                      <i className="bi bi-basket3-fill position-relative"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="My Cart"
                        style={{ fontSize: "25px" }}>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>

                          {(customerContext.checkLogin || localStorage.getItem("accessToken")) && customerContext.cartValue && customerContext.cartValue.length !== 0 ? customerContext.cartValue.length : null}

                        </span>
                      </i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='link nav-link' onClick={customerLogout}>Logout</Link>
                  </li>
                </React.Fragment>
              }

            </ul>
          </div>
        </nav>

        <Routes>

          <Route path='/customers/login' element={<Login />} />
          <Route path='/customers/register' element={<Register />} />

          <Route path='/products' element={<ProductsListing />} />



          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route exact path="/form-submitted" element={<SubmittedForm />} />

        </Routes>

      </Router>

      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header" style={{ backgroundColor: "black" }}>
          <h5 className="offcanvas-title" id="offcanvasCartLabel"><i className="bi bi-basket3-fill"></i> My Cart</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>


        {customerContext.checkLogin ? <OffCanvasCart /> : <React.Fragment><div>Start Shopping</div></React.Fragment>}


        <div className="offcanvas-footer p-3 d-flex justify-content-center" style={{ backgroundColor: "black" }}>
          <button className="offcanvas-title" id="offcanvasCartLabel" onClick={clickCheckOut} >Checkout</button>
        </div>
      </div>

      <div class="center">
        <span>Going to payment...</span>
      </div>
    </React.Fragment>
  )

}