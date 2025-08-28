import React from 'react'
import "../CSS/styles.css"
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate("/")
  }

  const handleProductsClick = () => {
    navigate("/products")
  }

  const handleContactClick = () => {
    navigate("/contact")
  }

  return (
    <div>

        <div id="footer" >

            <h1 id="footer-header">P</h1>

            <div id="footer-pages-1" >
                <button onClick={handleHomeClick} className='footer-buttons'><h6>Home</h6></button>
                <button onClick={handleProductsClick} className='footer-buttons'><h6>Products</h6></button>
                <button onClick={handleContactClick} className='footer-buttons'><h6>Contact</h6></button>
            </div>

            <div id="footer-pages-2" >
                <button className='footer-buttons'><h6>News</h6></button>
                <button className='footer-buttons'><h6>Community</h6></button>
                <button className='footer-buttons'><h6>Careers</h6></button>
            </div>
        </div>
    </div>
  )
}

export default Footer