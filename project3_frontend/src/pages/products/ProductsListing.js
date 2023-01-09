import React, { useEffect, useState } from "react";
import axios from "axios"
import "./ProductListing.css"


export default function ProductsListing() {

    const API_URL = "https://6000-ericerchina-project3bac-s8ol8p2mxd0.ws-us81.gitpod.io/api"

    const [products, setProducts] = useState([])

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

    useEffect(() => {

        const getProduct = async () => {
            const response = await axios.get(API_URL + "/products")
            console.log(response.data.results)
            await setProducts(response.data.results)
        }

        getProduct();

    }, [search])




    // updateForm = (e) => {
    //     setForm({
    //         [e.target.name]: e.target.value
    //     })
    // }


    let checkStockOnBtn = (value) => {
        if (value > 0) {
            return <a href="#" className="addToCartBtn btn btn-primary">Add to Cart</a>
        } else {
            return <a href="#" className="addToCartBtn btn btn-secondary" disabled>Out of Stock</a>
        }
    }



    return (

        <React.Fragment>




            <form method="GET">


                <label>Name</label>
                <div className="input flex-nowrap">
                    <input type="text" className="form-control" placeholder="Name of Boardgame" aria-label="Username" />
                </div>


                <div className="collapse" id="collapseExample">

                    <div className="input flex-nowrap">
                        <label>Budget</label>
                        <div className="d-flex flex-row" >
                            <input type="number" className="form-control mx-3" placeholder="Min cost in Cents" />
                            <h3>~</h3>
                            <input type="number" className="form-control mx-3" placeholder="Max cost in Cents" />
                        </div>
                    </div>

                    <div className="input flex-nowrap">
                        <label>Players</label>
                        <div className="d-flex flex-row" >
                            <input type="number" className="form-control mx-3" placeholder="Min Players" />
                            <h3>~</h3>
                            <input type="number" className="form-control mx-3" placeholder="Max Players" />
                        </div>
                    </div>

                    <div className="input flex-nowrap">
                        <label>Average Duration</label>
                        <input type="number" className="form-control" placeholder="Enter whole number in Minutes" />
                    </div>

                    <div className="input flex-nowrap">
                        <label>Min Age</label>
                        <input type="number" className="form-control" placeholder="Enter a whole number" />
                    </div>

                    <div className="input flex-nowrap">
                        <label>Difficulty</label>
                        <div className="d-flex flex-row justify-content-evenly">
                            <div>
                                <input type="radio" id="age1" name="age" value="1" />
                                <label htmlFor="age1">Beginner</label>
                            </div>

                            <div>
                                <input type="radio" id="age2" name="age" value="2" />
                                <label htmlFor="age2">Intermediate</label>
                            </div>

                            <div>
                                <input type="radio" id="age3" name="age" value="3" />
                                <label htmlFor="age3">Expert</label>
                            </div>

                        </div>
                    </div>



                    <div className="input flex-nowrap">
                        <label>Categories</label>
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>



                    <div className="input flex-nowrap">
                        <label>Designers</label>
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>



                    <div className="input flex-nowrap">
                        <label>Mechanics</label>
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>






                </div>

                <div className="d-flex justify-content-center">
                    <a type="submit" className="m-2 btn btn-primary" data-bs-toggle="collapse" href="#collapseExample">Advance Search</a>
                    <input type="submit" className="m-2 btn btn-primary" value="Search" />
                </div>

            </form>










            <h1>Products</h1>

            {products.map((e, i) => {
                return (

                    <div className="card text-bg-dark eachCard mx-2 my-2" key={i} >
                        <img src={e.images[0].image_url} className="card-img" alt="No Image Found" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <div className="d-flex flex-column mb-5">
                                <div className="d-flex flex-d justify-content-between">
                                    <div>
                                        <h3 className="card-title m-0 p-0">{e.name}</h3><p>{e.difficulty.difficulty}</p>
                                    </div>
                                    <div>
                                        <h3 className="card-title">S${(e.cost / 100).toFixed(2)}</h3>
                                    </div>
                                </div>




                                <div className="d-flex flex-row flex-wrap my-1">
                                    {e.categories.map((e, i) => {
                                        return (
                                            <p className="my-1 mx-1 px-3 rounded-pill flex-nowrap" key={i}
                                                style={{ color: "#f4eee3", backgroundColor: "#886443" }}>{e.category}
                                            </p>
                                        )
                                    })}
                                </div>


                                <div className="d-flex flex-row flex-wrap my-1">
                                    {e.mechanics.map((e, i) => {
                                        return (
                                            <p className="my-1 mx-1 px-3 rounded-pill flex-nowrap" key={i}
                                                style={{ color: "#f4eee3", backgroundColor: "#2d6100" }}>{e.mechanic}
                                            </p>
                                        )
                                    })}
                                </div>




                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        {checkStockOnBtn(e.stock)}
                    </div>



                    // <div className="card" style="width: 18rem;">
                    //     <img src="..." className="card-img-top" alt="..." />
                    //     <div className="card-body">
                    //         <h5 className="card-title">Card title</h5>
                    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    //         <a href="#" className="btn btn-primary">Go somewhere</a>
                    //     </div>
                    // </div>


                )
            })}

        </React.Fragment >

    )

}