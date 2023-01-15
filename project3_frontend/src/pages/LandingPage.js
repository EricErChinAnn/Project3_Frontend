import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";

export default function LandingPage() {
    let navigateTo = useNavigate()
    return (
        <React.Fragment>

            <div className="landingPageTopPicDiv position-relative">
                <img className="landingPageTopPic" src="landingpageToppic.jpg" />
                <span class="position-absolute top-50 start-50 welcomeTextContainer m-0 p-0">
                    <div className="fontPSP m-0 p-0"><p className="m-0 p-0" style={{ fontSize: "19px" }}>Tic Tax Toe</p></div>
                    <div style={{ fontSize: "24px" }} className="m-0 p-0">Tabletop Games For All Ages.</div>
                    <div className="aLine"></div>
                    <div style={{ fontSize: "10px" }}>Community . Immersion . Adventure</div>
                    <button className="btn btn-primary bgColor bgColorBtn mt-3"
                        onClick={() => { navigateTo("/products") }}>Shop Now</button>
                </span>
            </div>


            <div className="p-4 divTeam">
                <div className="contactusInfo border p-3 rounded border-opacity-50">
                    <h1 className="fontPSP text-center">Greeting From The Team</h1>
                    <div className="d-flex teamDiv">
                        <div className="teamImgDiv p-3">
                            <img className="teamImg" src="teamImg.jpg" />
                        </div>
                        <div className="teamTextDiv">
                            <h1>Welcome to TicTaxToe</h1>
                            <p>We are so glad that you are here at our humble website.<br />
                                Thank you for dropping by! We hope you find what you are looking for.<br />
                                If you don't, please feel free to contact us and leave us a query.<br />
                                We will get back to you as soon as we can
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AboutUs/>

        </React.Fragment>
    )
}