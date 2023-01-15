import React, { useEffect, useState, useContext } from "react";
import "./ProductListing.css"

import ProductContext from "../../context/products";
import { toast } from "react-toastify";
import CustomerContext from "../../context/customers";
import { useNavigate } from "react-router-dom";

export default function ProductsListing() {

    const productContext = useContext(ProductContext)
    const customerContext = useContext(CustomerContext)

    const [products, setProducts] = useState([])

    const [difficulty, setDifficulty] = useState()
    const [categories, setCategories] = useState()
    const [designers, setDesigners] = useState()
    const [mechanics, setMechanics] = useState()
    let navigateTo = useNavigate()


    const [search, setSearch] = useState({
        'name': "",
        'min_cost': "",
        'max_cost': "",
        'player_min': "",
        'player_max': "",
        'avg_duration': "",
        "min_age": "",
        'difficulty_id': "",
        'categories': [""],
        'designers': [""],
        'mechanics': [""],
    })

    const updateSearch = (event) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    };

    const updateSearchMultiCate = (event) => {

        // console.log(event.target.value)
        let clone = [...search.categories]


        if (clone.includes(event.target.value)) {


            let indexToRemove = parseInt(clone.indexOf(event.target.value));

            let cloneLeft = clone.slice(0, indexToRemove)
            let cloneRight = clone.slice(indexToRemove + 1)
            clone = [...cloneLeft, ...cloneRight]


        } else {

            clone = [...clone, event.target.value]

        }

        // console.log([...clone])

        setSearch({
            ...search,
            [event.target.name]: clone
        })


    }

    const updateSearchMultiDes = (event) => {

        // console.log(event.target.value)
        let clone = [...search.designers]


        if (clone.includes(event.target.value)) {


            let indexToRemove = parseInt(clone.indexOf(event.target.value));

            let cloneLeft = clone.slice(0, indexToRemove)
            let cloneRight = clone.slice(indexToRemove + 1)
            clone = [...cloneLeft, ...cloneRight]


        } else {

            clone = [...clone, event.target.value]

        }

        // console.log([...clone])

        setSearch({
            ...search,
            [event.target.name]: clone
        })


    }

    const updateSearchMultiMec = (event) => {

        // console.log(event.target.value)
        let clone = [...search.mechanics]


        if (clone.includes(event.target.value)) {


            let indexToRemove = parseInt(clone.indexOf(event.target.value));

            let cloneLeft = clone.slice(0, indexToRemove)
            let cloneRight = clone.slice(indexToRemove + 1)
            clone = [...cloneLeft, ...cloneRight]


        } else {

            clone = [...clone, event.target.value]

        }

        // console.log([...clone])

        setSearch({
            ...search,
            [event.target.name]: clone
        })


    }



    useEffect(() => {

        const getProduct = async () => {

            const allProducts = await productContext.getProducts()
            // console.log(allProducts)
            await setProducts(allProducts)
        }

        getProduct();


        const getTables = async () => {
            let tables = await productContext.getTables()
            await setDifficulty(tables.difficulty)
            await setCategories(tables.categories)
            await setDesigners(tables.designers)
            await setMechanics(tables.mechanics)

            // console.log("apple")
        }
        getTables()

    }, [])


    const searhBtnClick = async () => {

        // console.log(search.min_cost)

        let paramsPayload = {
            'name': search.name,
            'min_cost': parseInt(search.min_cost * 100),
            'max_cost': parseInt(search.max_cost * 100),
            'player_min': parseInt(search.player_min),
            'player_max': parseInt(search.player_max),
            'avg_duration': parseInt(search.avg_duration),
            "min_age": parseInt(search.min_age),
            'difficulty_id': search.difficulty_id,
            'categories': (search.categories.filter(n => n)).toString(),
            'designers': (search.designers.filter(n => n)).toString(),
            'mechanics': (search.mechanics.filter(n => n)).toString(),
        }

        let searchParams = {}

        Object.entries(paramsPayload).forEach(entry => {
            const [key, value] = entry;
            if (value) {
                // console.log(key, value);
                searchParams[key] = value
            }
        });

        // console.log(searchParams)


        const allProducts = await productContext.getProducts(searchParams)
        // console.log(allProducts)

        if (allProducts) {

            await setProducts([])
            await setProducts(allProducts)

        } else {

            toast.error(
                `No results found.`, {
                position: "top-center",
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            let all = await productContext.getProducts()
            await setProducts([])
            await setProducts(all)
        }


    }

    const searchReset = async () => {
        let all = await productContext.getProducts()
        await setProducts([])
        await setProducts(all)

        await setSearch({
            ...search,
            'name': "",
            'min_cost': "",
            'max_cost': "",
            'player_min': "",
            'player_max': "",
            'avg_duration': "",
            "min_age": "",
            'difficulty_id': "",
            'categories': [""],
            'designers': [""],
            'mechanics': [""],
        });

        // console.log(search)
    }

    let pleaseLogin = () => {
        toast(
            `Please login to purchase`, {
            position: "top-center",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

        navigateTo("/customers/login")
    }

    let addToCartOne = (productId, productName) => {
        customerContext.addToCart(productId, productName, 1)
    }

    let checkStockOnBtn = (stock, productId, productName) => {
        if (stock > 0) {
            if (localStorage?.getItem("accessToken")) {
                return <a href="#" className="addToCartBtn btn btn-primary bgColor bgColorBtn"
                    onClick={(e) => {
                        e.preventDefault()
                        addToCartOne(productId, productName)
                    }}
                >Add to Cart</a>
            } else {
                return <button href="#" className="addToCartBtn btn btn-primary bgColor bgColorBtn"
                    onClick={pleaseLogin}
                >Add to Cart</button>
            }
        } else {
            return <a href="#" className="addToCartBtn btn btn-secondary" disabled
            >Out of Stock</a>
        }
    }

    if (difficulty && categories && designers && mechanics && products) {

        return (

            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <h1 className="fontPSP mt-4">Products</h1>
                </div>

                {/* Search bar and button */}
                <div className='p-4'>
                    <div className='border p-3 rounded border-opacity-50' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                        {/* <form method="GET"> */}
                        <label className="mt-3">Name</label>
                        <div className="input flex-nowrap">
                            <input type="text" className="form-control" placeholder="Name of Boardgame" aria-label="Username"
                                name="name" value={search.name} onChange={updateSearch}
                            />
                        </div>


                        <div className="collapse" id="collapseExample">

                            <div className="input flex-nowrap">
                                <label className="mt-3">Budget</label>
                                <div className="d-flex flex-row" >
                                    <input type="number" className="form-control mx-3" placeholder="Min cost in Dollars"
                                        name="min_cost" value={search.min_cost} onChange={updateSearch}
                                    />
                                    <h3>~</h3>
                                    <input type="number" className="form-control mx-3" placeholder="Max cost in Dollars"
                                        name="max_cost" value={search.max_cost} onChange={updateSearch}
                                    />
                                </div>
                            </div>

                            <div className="input flex-nowrap">
                                <label className="mt-3">Players</label>
                                <div className="d-flex flex-row" >
                                    <input type="number" className="form-control mx-3" placeholder="Min Players"
                                        name="player_min" value={search.player_min} onChange={updateSearch}
                                    />
                                    <h3>~</h3>
                                    <input type="number" className="form-control mx-3" placeholder="Max Players"
                                        name="player_max" value={search.player_max} onChange={updateSearch}
                                    />
                                </div>
                            </div>

                            <div className="input flex-nowrap">
                                <label className="mt-3">Average Duration</label>
                                <input type="number" className="form-control" placeholder="Enter whole number in Minutes"
                                    name="avg_duration" value={search.avg_duration} onChange={updateSearch}
                                />
                            </div>

                            <div className="input flex-nowrap">
                                <label className="mt-3">Min Age</label>
                                <input type="number" className="form-control" placeholder="Enter a whole number"
                                    name="min_age" value={search.min_age} onChange={updateSearch}
                                />
                            </div>

                            <div className="input flex-nowrap">
                                <label className="mt-3">Difficulty</label>
                                <select className="form-select" aria-label="multiple select example"
                                    name="difficulty_id" value={search.difficulty_id} onChange={updateSearch}
                                >
                                    <option value="">All Difficulties</option>
                                    {difficulty.map((e, i) => {
                                        return (<option key={i} value={e.id}>{e.difficulty}</option>)
                                    })}
                                </select>
                            </div>


                            <div className="input flex-nowrap">
                                <label className="mt-3">Categories</label>
                                <select className="form-select" multiple aria-label="multiple select example"
                                    name="categories" onChange={updateSearchMultiCate} value={search.categories}
                                >
                                    <option value="" hidden>------ All Categories ------</option>
                                    {categories.map((e, i) => {
                                        return (<option key={i} value={e.id}>{e.category}</option>)
                                    })}
                                </select>
                            </div>



                            <div className="input flex-nowrap">
                                <label className="mt-3">Designers</label>
                                <select className="form-select" multiple aria-label="multiple select example"
                                    name="designers" onChange={updateSearchMultiDes} value={search.designers}
                                >
                                    <option value="" hidden>------ All Designers ------</option>
                                    {designers.map((e, i) => {
                                        return (<option key={i} value={e.id}>{e.designer}</option>)
                                    })}
                                </select>
                            </div>



                            <div className="input flex-nowrap">
                                <label className="mt-3">Mechanics</label>
                                <select className="form-select" multiple aria-label="multiple select example"
                                    name="mechanics" onChange={updateSearchMultiMec} value={search.mechanics}
                                >
                                    <option value="" hidden>------ All Mechanics ------</option>
                                    {mechanics.map((e, i) => {
                                        return (<option key={i} value={e.id}>{e.mechanic}</option>)
                                    })}
                                </select>
                            </div>

                        </div>

                        <div className="d-flex justify-content-center">
                            <a type="submit" className="m-2 btn btn-primary bgColor bgColorBtn" data-bs-toggle="collapse" href="#collapseExample">Advance Search</a>
                            <input type="submit" className="m-2 btn btn-primary bgColor bgColorBtn" value="Search" onClick={searhBtnClick} />
                            <input type="submit" className="m-2 btn btn-primary bgColor bgColorBtn" value="Reset" onClick={searchReset} />
                        </div>

                        {/* </form> */}
                    </div>
                </div>

                {/* Map display of each Product */}
                {
                    products.map((e, i) => {
                        return (
                            <div className="px-4 mb-4">
                            <div className=" mx-2 my-2 d-flex flex-column" key={i}>
                                <div className="card text-bg-dark eachCard " >
                                    <img src={e.images[0].image_url} className="card-img" alt="No Image Found" />
                                    <div className="card-img-overlay d-flex align-items-end">
                                        <div className="d-flex flex-column mb-5 w-100">
                                            <div className="d-flex flex-d justify-content-between changeIfSmall">
                                                <div>
                                                    <h3 className="fontPSP card-title m-0 p-0" style={{color:"white"}}>{e.name}</h3>
                                                    <p className="m-0 p-0">{e.difficulty.difficulty}</p>
                                                </div>
                                                <div>
                                                    <h3 className="card-title">S${(e.cost / 100).toFixed(2)}</h3>
                                                </div>
                                            </div>




                                            <div className="d-flex flex-row flex-wrap my-1 disappearIfSmall">
                                                {e.categories.map((e, i) => {
                                                    return (
                                                        <p className="my-1 mx-1 px-3 rounded-pill flex-nowrap" key={i}
                                                            style={{ color: "#f4eee3", backgroundColor: "#886443" }}>{e.category}
                                                        </p>
                                                    )
                                                })}
                                            </div>


                                            <div className="d-flex flex-row flex-wrap my-1 disappearIfSmall">
                                                {e.mechanics.map((e, i) => {
                                                    return (
                                                        <p className="my-1 mx-1 px-3 rounded-pill flex-nowrap" key={i}
                                                            style={{ color: "#f4eee3", backgroundColor: "#2d6100" }}>{e.mechanic}
                                                        </p>
                                                    )
                                                })}
                                            </div>




                                            <p className="m-0 p-0">{e.player_min} ~ {e.player_max} Players</p>
                                            <p className="m-0 p-0">For ages {e.min_age} above</p>
                                        </div>
                                    </div>
                                </div>
                                {checkStockOnBtn(e.stock, e.id, e.name)}
                            </div>
                            </div>

                        )
                    })}

            </React.Fragment >

        )


    }



}