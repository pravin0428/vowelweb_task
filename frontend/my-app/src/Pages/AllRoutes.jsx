import React from 'react'
import {Routes , Route} from "react-router-dom"
import AddPost from './AddPost'
import Cart from './Cart'
import CartSinglePage from './CartSinglePage'
import Edit from './Edit'
import Home from './Home'
import Login from './Login'
import Posts from './Posts'
import Signup from './Signup'
import SinglePost from './SinglePost'
import PrivateRoute from "../Components/PrivateRoute"
// import Payment from './Payment'
import Ordermanage from './OrderManage'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/cart" element={ < Cart />  } />
        <Route path="/signup" element={< Signup/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/user/:id" element={<CartSinglePage />} />
        {/* <Route path="/payment" element={ < Payment />} /> */}
        {/* <Route path="/login/:id" element={< Login/>} /> */}
        <Route path="/posts" element={< Posts />} />
        <Route path="/posts/:id" element={< SinglePost />} />
        <Route path="/posts/:id/edit" element={< Edit />} />  
        <Route path="/addpost" element={< AddPost />} />
        <Route path="/posts/order" element={<Ordermanage/>}></Route>
    </Routes>
  )
}

export default AllRoutes