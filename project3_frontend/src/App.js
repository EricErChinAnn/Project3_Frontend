import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"

import AboutUs from './pages/AboutUs';
import SubmittedForm from "./pages/SubmitForm";

import LandingPage from './pages/LandingPage';
import ProductsListing from "./pages/products/ProductsListing";

export default function App() {
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
            </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route exact path="/form-submitted" element={<SubmittedForm />}/>
        <Route path='/products' element={<ProductsListing />} />
      </Routes>
    </Router>
  )
}