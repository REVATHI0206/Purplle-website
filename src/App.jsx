
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./index.css"
 import Courosel from './page/Courosel'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Offer from './page/Offer'

import Cart from './Cart'
import Upload from './admin/Upload'
import Update from './admin/Update'
import Edit from './admin/Edit'
import Offupload from './admin/Offupload'
import OffEdit from './admin/OffEdit'
import Offupdate from './admin/offupdate'
import UserLogin from './user/User'






function App() {


  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Courosel />} />

          <Route path='/offer' element={<Offer />}/>
        
       
          <Route path='/cart' element={<Cart/>} />
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/update' element={<Update/>}/>
          
      <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:6222/list/${params.id}`)}/>
      <Route path='/offupload' element={<Offupload/>}/>
          <Route path='/offupdate' element={<Offupdate/>}/>
          
      <Route path='/offedit/:id' element={<OffEdit/>} loader={({params})=>
      fetch(`http://localhost:6222/offList/${params.id}`)}/>

      <Route path='/user' element={<UserLogin/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
