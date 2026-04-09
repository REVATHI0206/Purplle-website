import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./cartslice/Cartslice";
 const store=configureStore({
    reducer:{
        cart:Cartslice,
    },
    devTools:true
})
export default store