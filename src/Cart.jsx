import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, deleteFromCart  } from "./store/cartslice/Cartslice";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  if (cartProducts.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      {/* <Link to='/'>Home</Link>
  <h1>My Cart</h1> */}

  <ul className="cart-list">
    {cartProducts.map((item) => (
      <li key={item.id} className="cart-item">

        <img src={item.img} alt={item.name} />

        <div className="cart-info">
          <h2>{item.name}</h2>
          <p>{item.off}</p>
          <div className="cart-price">{item.price}</div>
        </div>

        <div className="cart-quantity">
          <button onClick={() => decrementCart(item._id, item.quantity)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => incrementCart(item._id, item.quantity)}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() => deleteCart(item)}
        >
          Remove
        </button>

      </li>
    ))}
  </ul>
</div>
  );
};

export default Cart;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateQuantity, deleteFromCart } from "./store/cartslice/Cartslice";
// import './Cart.css';
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const cartProducts = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   // Remove item from cart
//   const handleRemove = (id) => {
//     dispatch(deleteFromCart(id));
//   };

//   // Increase quantity
//   const handleIncrement = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity: quantity + 1 }));
//   };

//   // Decrease quantity (not below 1)
//   const handleDecrement = (id, quantity) => {
//     if (quantity > 1) {
//       dispatch(updateQuantity({ id, quantity: quantity - 1 }));
//     }
//   };

//   // Calculate total price
//   const totalPrice = cartProducts.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   if (cartProducts.length === 0) {
//     return (
//       <div className="empty-cart">
//         <h2>Your cart is empty</h2>
        
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h1>My Cart</h1>
//       <ul className="cart-list">
//         {cartProducts.map((item) => (
//           <li key={item._id} className="cart-item">
//             <img src={item.img} alt={item.name} className="cart-img" />

//             <div className="cart-info">
//               <h2>{item.name}</h2>
//               <p>{item.off}</p>
//               <div className="cart-price">₹{item.price * item.quantity}</div>
//             </div>

//             <div className="cart-quantity">
//               <button
//                 className="quantity-btn"
//                 onClick={() => handleDecrement(item._id, item.quantity)}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 className="quantity-btn"
//                 onClick={() => handleIncrement(item._id, item.quantity)}
//               >
//                 +
//               </button>
//             </div>

//             <button
//               className="remove-btn"
//               onClick={() => handleRemove(item._id)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className="cart-summary">
//         <h2>Total: ₹{totalPrice}</h2>
//         <Link to="/checkout" className="checkout-btn">
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;