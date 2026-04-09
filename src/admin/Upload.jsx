import React from 'react'
import "./Upload.css"
import { Link } from 'react-router-dom'

const Upload = () => {

    


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const price = form.price.value
        const img = form.img.value
        const quantity = 1

        if (title === '' || price === '' || img === '' || quantity === '') {
            alert("Fill the required fields")
        }
        else {
            const obj = { title, price, img, quantity }
            console.log(obj)

            fetch(`http://localhost:6222/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then((res) => res.json()).then((data) => {
                alert('Data added successfully')
                form.reset()
                window.location.href = '/update'
            })

        }
    }
    return (
        <div id='upload-whole'>
            <div id="category">
                <ul id='category-ul'>
                    <li>
                        <Link to='/upload' >Home</Link>
                    </li>
                    <li>
                        <Link to='/Offupload' >Offer</Link>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>

                <h2>Home</h2>

                <div className="upload-title">
                    <label value="title">Title</label>
                    <input type="text" id="title" />
                </div>

                <div className="upload-num">
                    <label value="price">Price</label>
                    <input type="text" id='price' />
                </div>

                <div className="upload-img">
                    <label value="img">Image</label>
                    <input type="text" id='img' />
                </div>

                <input type="submit" name="btn" value='submit' id="sub-btn" />

            </form>
            <li>
                <Link to='/update' id='updateBtn' >Update➡️</Link>
            </li>
        </div>
    )
}

export default Upload