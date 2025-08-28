import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom"

const Navigation = () => { 
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate("/")
  }

  const handleHomeClick = () => {
    navigate("/")
  }

  const handleProductsClick = () => {
    navigate("/products")
  }

  const handleContactClick = () => {
    navigate("/contact")
  }

  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 90]);

  return (
    <motion.div
      id="navigation"
      style={{
        background,
        height
      }}
    >
      <div id="nav-bar">
        <h1 onClick={handleLogoClick} id="logo" >P</h1>
        <div id="nav-buttons">
          <button onClick={handleHomeClick} className="nav-bar-buttons" >Home</button>
          <button onClick={handleProductsClick} className="nav-bar-buttons" >Products</button>
          <button onClick={handleContactClick} className="nav-bar-buttons" >Contact</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
