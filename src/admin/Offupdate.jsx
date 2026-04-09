import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Update.css'
const Offupdate = () => {
          const API_URL = 'https://cosmetic-je04.onrender.com'


    const [productItems, setProductItems] = useState([])
    useEffect(() => {
        fetch(`${API_URL}offReceive`).then((res) => res.json()).then((data) => setProductItems(data), [])
    })
    const deleteItems = (id) => {
        fetch(`${API_URL}offDelete/${id}`, {
            method: "DELETE"
        }).then((res) => res.json()).then((data) => {
            alert("Data deleted successfully")
            setProductItems((prevProduct) => prevProduct.filter((Item) => Item._id !== id))
        })
    }

    return (
       <div id="update-whole">
  <table border="1">
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Image</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>

    <tbody>
      {productItems.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>
            <img src={item.img} alt="product" width="60" />
          </td>
          <td>
            <button
              id="delete-btn"
              type="button"
              onClick={() => deleteItems(item._id)}
            >
              Delete
            </button>
          </td>
          <td>
            <Link to={`/offedit/${item._id}`} id="edit-btn">
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    )
}

export default Offupdate