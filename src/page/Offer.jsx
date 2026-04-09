import React, { useEffect, useState } from "react";
import "./Offer.css";
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import banner from '../images/banner.jpg'



const Offer = () => {
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
  const [offerItems, setOfferItems] = useState([]); // important []

  useEffect(() => {
    fetch(`${API_URL}/offReceive`)
      .then((res) => res.json())
      .then((data) => {
        setOfferItems(data || []); // safe fallback
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setOfferItems([]);
      });
  }, []);

  return (
    <div className="offer-container">
      <img src={banner} alt="" />
      <h2>Special Offers 🎉</h2>

      <div className="offer-grid">
        {offerItems.length > 0 ? (
          offerItems.map((item) => (
            <div className="offer-card" key={item._id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p className="discount">20% OFF 🔥</p>
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

            </div>
          ))
        ) : (
          <p>No offers available</p>

        )}
        
      </div>
    </div>
  );
};

export default Offer;