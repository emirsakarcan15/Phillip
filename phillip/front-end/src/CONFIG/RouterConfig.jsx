import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../PAGES/Home'
import Products from '../PAGES/Products'
import Contact from "../PAGES/Contact"

function RouterConfig() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={ <Products /> }/>
        <Route path='/contact' element={ <Contact /> } />
    </Routes>
  )
}

export default RouterConfig