import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    let navigateTo = useNavigate()
    return (
        <React.Fragment>

            <div className="landingPageTopPicDiv position-relative">
                <img className="landingPageTopPic" src="landingpageToppic.jpg" />
                <span class="position-absolute top-50 start-50 welcomeTextContainer m-0 p-0">
                    <div className="fontPSP m-0 p-0"><p className="m-0 p-0" style={{fontSize:"19px"}}>Tic Tax Toe</p></div>
                    <div style={{fontSize:"24px"}} className="m-0 p-0">Tabletop Games For All Ages.</div>
                    <div className="aLine"></div>
                    <div style={{fontSize:"10px"}}>Community . Immersion . Adventure</div>
                    <button className="btn btn-primary bgColor bgColorBtn mt-3" 
                    onClick={()=>{navigateTo("/products")}}>Shop Now</button>
                </span>
            </div>



            <div>
                <h2>Hello World!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis et debitis pariatur perferendis adipisci doloribus aspernatur ea quo illum a.</p>
            </div>


        </React.Fragment>
    )
}