// import React from 'react'
// import "./Navbar.css"
// import logo from "../images/Purplle.jpeg"
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar">
//                      <div className="nav-left">
//     <a href="/">
//       <img src={logo} alt="logo" className="logo" />
//     </a>
//   </div>

//   <div className="nav-group">
//     <div className="nav-right">
//       <a href="/offer">Offers</a>
//       <a href="/new">New</a>
//       <a href="/brand">Brand</a>
//       <a className="icon" href="#">🔍</a>
//       <a className="icon" href="#">❤</a>
//       <a className="icon" href="#">🛒</a>
//     </div>
//     </div>

//                 {/* ✅ DROPDOWN */}
//          <li className="dropdown">
//   <span>Admin ▾</span>
//   <ul className="dropdown-menu">
//     <li><Link to="/" className="drop-link">Admin</Link></li>
//     <li><Link to="/upload" className="drop-link">Upload</Link></li>
//     <li><Link to="/update" className="drop-link">Update</Link></li>
//   </ul>
// </li>
//             </nav>

//         </div>
//     )
// }

// export default Navbar

import React from "react";
import "./Navbar.css";
import logo from "../images/Purplle.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* left */}
      <div className="nav-left">
        
          <img src={logo} alt="logo" className="logo" />
        
      </div>

      {/* right */}
      <div className="nav-group">
        <div className="nav-right">
          <Link to="/offer">Offers</Link>
          <Link to="/">New</Link>
          <Link>Brand</Link>
          <a className="icon" href="#">🔍</a>
          <a className="icon" href="#">❤</a>
          <a className="icon" href="/Cart">🛒</a>
          
        </div>

        <li className="dropdown">
         <Link id="login" to='/user'>
         Login
         </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;