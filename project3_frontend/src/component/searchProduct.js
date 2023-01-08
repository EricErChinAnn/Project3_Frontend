import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductContext from "../context/products"

export default function ProductsSearch() {

    const API_URL = "https://6000-ericerchina-project3bac-s8ol8p2mxd0.ws-us81.gitpod.io/api"

    const [search, setSearch] = useState({
        'name': "",
        'min_cost': "",
        'max_cost': "",
        'player_min': "",
        'player_max': "",
        'avg_duration': "",
        'difficulty_id': "",
        'categories': "",
        'designers': "",
        'mechanics': "",
    })



    return (
        <React.Fragment>
            <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Filter Results</button>

            <div className="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Search/Filter Results</h5>
                    <button type="button" className="btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form method="GET">
                        
                        <input type="submit" className="mb-3 mt-3 btn btn-primary" value="Search" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )


}