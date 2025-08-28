import React from 'react'
import plant from "../PUBLIC/plant.jpg"
import refund from "../PUBLIC/refund.jpg"
import secure from "../PUBLIC/secure.jpg"
import ai from "../PUBLIC/ai.jpg"
import helper from "../HELPERS/functionHelper"

function Boxof4() {


  return (
    <div id="box-wrapper" >
        <div id="row-1-boxof4">
            <div id="secure-div" onMouseEnter={helper.enter2} onMouseLeave={helper.leave2} style={{ background: `url(${secure})`, width:"720px", height:"390px", filter: "grayscale(100%)", display: "flex", alignItems: "center", justifyContent:"center", color: "white", transition: "0.6s" }} >100% Secure Payment</div>
            <div id="plant-div" onMouseEnter={helper.enter3} onMouseLeave={helper.leave3} style={{ background: `url(${plant})`, width:"720px", height:"390px", filter: "grayscale(100%)", display: "flex", alignItems: "center", justifyContent:"center", color: "white", transition: "0.6s" }} >Nature Friendly</div>
        </div>
        <div id="row-2-boxof4" >
            <div id="refund-div" onMouseEnter={helper.enter4} onMouseLeave={helper.leave4} style={{ background: `url(${refund})`, width:"720px", height:"390px", filter: "grayscale(100%)", display: "flex", alignItems: "center", justifyContent:"center", color: "white", transition: "0.6s" }} >Refund Without Additional Charge</div>
            <div id="ai-div" onMouseEnter={helper.enter5} onMouseLeave={helper.leave5} style={{ background: `url(${ai})`, width:"720px", height:"390px", filter: "grayscale(100%)", display: "flex", alignItems: "center", justifyContent:"center", color: "white", transition: "0.6s" }} >AI Solutions</div>
        </div>
    </div>
  )
}

export default Boxof4