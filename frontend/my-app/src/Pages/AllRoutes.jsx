import React from 'react'
import {Routes , Route} from "react-router-dom"
import AddPost from './AddPost'
import CartSinglePage from './CartSinglePage'
import Edit from './Edit'
import Home from './Home'
import Posts from './Posts'
import Signup from './Signup'
import SinglePost from './SinglePost'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/posts" element={< Posts />} />
        <Route path="/posts/:id" element={< SinglePost />} />
        <Route path="/user/:id" element={< CartSinglePage />} />
        <Route path="/posts/:id/edit" element={< Edit />} />  
        <Route path="/addpost" element={< AddPost />} />
    </Routes>
  )
}

export default AllRoutes