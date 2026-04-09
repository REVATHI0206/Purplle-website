import { createSlice } from "@reduxjs/toolkit"

const storedItems = localStorage.getItem("cartItems")

const initialState = {
  cartItems: storedItems ? JSON.parse(storedItems) : []
}

const CartSlice = createSlice({
  name: "/Cart",
  initialState,

  reducers: {

    addToCart: (state, action) => {

      const newItem = action.payload

      const existingItem = state.cartItems.find(
        item => item._id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } 
      else {
        state.cartItems.push({
          _id: newItem._id,
          name: newItem.name,
          img: newItem.img,
          des: newItem.des,
          price: newItem.price,
          quantity: 1
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },


    deleteFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        item => item._id !== action.payload._id
      )

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },


    updateQuantity: (state, action) => {

      const { _id, quantity } = action.payload

      const itemToUpdate = state.cartItems.find(
        item => item._id === _id
      )

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

  }
})

export const { addToCart, deleteFromCart, updateQuantity } = CartSlice.actions

export default CartSlice.reducer