import { useContext } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

//Context & Provider
import CustomerContext from "../context/customers"
import CustomerProvider from "../provider/customersProvider";


//PAGES
import AboutUs from '../pages/AboutUs';
import SubmittedForm from "../pages/SubmitForm";
import LandingPage from '../pages/LandingPage';
import ProductsListing from "../pages/products/ProductsListing";
import Login from "../pages/customers/Login";
import Register from "../pages/customers/Register";

export default function Navbar() {

    const customerContext = useContext(CustomerContext)

    const customerLogout = async () => {
      await customerContext.logout();
  }







    return (

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
              <li className="nav-item">
                <Link className='link nav-link' to="/customers/login">Login</Link>
              </li>
              <li className="nav-item">
              <CustomerProvider>
                <button onClick={customerLogout}>Logout</button>
              </CustomerProvider>
              </li>
              <li className="nav-item">
              <Link className='link nav-link' to="/customers/register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <CustomerProvider> */}
          <Routes>
  
            <Route path='/customers/login' element={<Login />} />
            <Route path='/customers/register' element={<Register />} />
  
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route exact path="/form-submitted" element={<SubmittedForm />} />
            <Route path='/products' element={<ProductsListing />} />
  
          </Routes>
        {/* </CustomerProvider> */}
  
      </Router>

    )

}