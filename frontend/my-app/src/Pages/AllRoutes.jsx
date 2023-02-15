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
import Payment from './Payment'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/signup" element={< Signup/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/login/:id" element={< Login/>} />
        <Route path="/posts" element={< Posts />} />
        <Route path="/posts/:id" element={< SinglePost />} />
        <Route path="/user/:id" element={<CartSinglePage />} />
        <Route path="/posts/:id/edit" element={< Edit />} />  
        <Route path="/addpost" element={< AddPost />} />
        <Route path="/cart" element={ <PrivateRoute>< Cart /></PrivateRoute>  } />
        <Route path="/payment" element={ < Payment />} />
    </Routes>
  )
}

export default AllRoutes