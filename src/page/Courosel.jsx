import React from 'react'
import img from '../images/img1.png'
import imgs from '../images/img2.png'
import imge from '../images/img3.png'
import first from "../images/card01.png"
import two from "../images/card04.png"
import three from "../images/card02.png"
import four from "../images/card03.png"
import five from "../images/card011.png"
import six from "../images/card022.png"
import seven from "../images/card033.png"
import eight from "../images/card044.png"
import nine from "../images/fc1.png"
import ten from "../images/fc2.png"
import eleven from "../images/bh1.png"
import tweleve from "../images/nbae1.png"
import thirteen from "../images/video.mp4"
import "./Courosel.css"

import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const courosel = () => {
            const API_URL = 'https://cosmetic-je04.onrender.com'

    const cartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    const addCart = (item) => {
        alert("Item added to cart")
        dispatch(addToCart(item))
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
    const [cosmetics, setCosmetics] = useState([])
    useEffect(()=>{
        fetch(`${API_URL}/receive`)
        .then((res)=>res.json())
        .then((data)=>setCosmetics(data))
    },[])
    return (


        <div className="container-fluid">

            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src={img}
                            className="d-block w-100"
                            height="500"
                            alt="slide1"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src={imgs}
                            className="d-block w-100"
                            height="500"
                            alt="slide2"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src={imge}
                            className="d-block w-100"
                            height="500"
                            alt="slide3"
                        />
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

            <div className="container-fluid"><h2 className="hnd">HANDPICKED ITEMS</h2>
                
                <ul id='cards7'>
                    {cosmetics.map((item) => {
                        return (
                            <li id="il" key={item._id}>
                                <img src={item.img} alt="" />
                                <h4>{item.title}</h4>
                                <p className='off'>{item.offer}</p>
                                <h3>{item.price}</h3>

                                {cartProducts.find(product => product._id === item._id) ? (
                                    <button
                                        className="remove-btn"
                                        onClick={() => deleteCart(item)}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="add-btn"
                                        onClick={() => addCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                )}

                            </li>
                        )
                    })}
                </ul>
                {/* <div className='con2'>
                    <video className='vid' src={thirteen} controls width="400"></video>
                </div> */}
               
            </div>
        </div>







    )
}

export default courosel


