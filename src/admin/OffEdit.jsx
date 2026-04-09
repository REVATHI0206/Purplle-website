// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Edit = () => {

//   const { id } = useParams()
//   const [productData, setProductData] = useState({
//     title: "",
//     price: "",
//     img: ""
//   })

//   useEffect(() => {
//     fetch(`http://localhost:6222/list/${id}`)
//       .then((res) => res.json())
//       .then(((data) => setProductData(data)))
//   })

//   const handleUpdate = (event) => {
//     event.preventDefault()
//     const form = event.target
//     const title = form.title.value
//     const price = form.price.value
//     const img = form.img.value

//     const productObj = { title, price, img }
//     console.log(productObj)

//     fetch(`http://localhost:6222/update/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(productObj),
//     }).then((res) => res.json()).then((Data) => {
//       alert("product updated")
//       window.location.href = '/'
//     })
//   }

//   return (
//     <div id='upload-whole'>
//       <form onSubmit={handleUpdate}>

//         <div className="upload-title">
//           <label value="title">Title</label>
//           <input type="text" id="title" defaultValue={productData.title} />
//         </div>

//         <div className="upload-num">
//           <label value="price">Price</label>
//           <input type="number" id='price' defaultValue={productData.price} />
//         </div>

//         <div className="upload-img">
//           <label value="img">Image</label>
//           <input type="text" id='img' defaultValue={productData.img} />
//         </div>

//         <input type="submit" name="btn" value='update' id="sub-btn" />

//       </form>
//     </div>
//   )
// }

// export default Edit
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Edit.css'

const OffEdit = () => {
        const API_URL = 'https://cosmetic-je04.onrender.com'

  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    img: "",
  });

  // old value fetch
  useEffect(() => {
    fetch(`${API_URL}offList/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData({
          title: data.title || "",
          price: data.price || "",
          img: data.img || "",
        });
      });
  }, [id]);

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // update submit
  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`${API_URL}offUpdate/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product updated successfully ✅");
        navigate("/update");
      });
  };

  return (
    <div id="upload-whole">
      <form onSubmit={handleUpdate}>
        <div className="upload-title">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
          />
        </div>

        <div className="upload-num">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>

        <div className="upload-img">
          <label>Image</label>
          <input
            type="text"
            name="img"
            value={productData.img}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default OffEdit;