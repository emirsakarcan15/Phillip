import React from 'react'
import "../CSS/styles.css"
import dhl from "../PUBLIC/dhl.svg"
import ups from "../PUBLIC/ups.png"
import surat from "../PUBLIC/surat.png"
import fedex from "../PUBLIC/fedex.png"
import moller from "../PUBLIC/moller.svg"
import post from "../PUBLIC/post.svg"

function CompaniesMarquee() {
  return (
    <div id="company" >
        <div id="company-header-wrapper" >
            <h1>Shipping Companies We Work With</h1>
        </div>
        <div className="marquee-container">
            <div className="marquee">
                <img src={dhl} alt="dhl" style={{ width: "200px", filter:"grayscale(100%)"}} />
                <img src={ups} alt="ups" style={{ width: "60px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={surat} alt="surat" style={{ width: "150px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={fedex} alt="fedex" style={{ filter:"grayscale(100%)" }} />
                <img src={moller} alt="moller" style={{ filter:"grayscale(100%)" }} />
                <img src={post} alt="post" style={{ width: "200px", filter:"grayscale(100%)" }} />
                {/* Tekrar logolar */}
                <img src={dhl} alt="dhl" style={{ width: "200px", filter:"grayscale(100%)"}} />
                <img src={ups} alt="ups" style={{ width: "60px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={surat} alt="surat" style={{ width: "150px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={fedex} alt="fedex" style={{ filter:"grayscale(100%)" }} />
                <img src={moller} alt="moller" style={{ filter:"grayscale(100%)" }} />
                <img src={post} alt="post" style={{ width: "200px",filter:"grayscale(100%)" }} />
                <img src={dhl} alt="dhl" style={{ width: "200px", filter:"grayscale(100%)"}} />
                <img src={ups} alt="ups" style={{ width: "60px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={surat} alt="surat" style={{ width: "150px", height:"50px", filter:"grayscale(100%)" }} />
                <img src={fedex} alt="fedex" style={{ filter:"grayscale(100%)" }} />
                <img src={moller} alt="moller" style={{ filter:"grayscale(100%)" }} />
                <img src={post} alt="post" style={{ width: "200px", filter:"grayscale(100%)" }} />
            </div>
        </div>

    </div>
    
  )
}

export default CompaniesMarquee