import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../CSS/contact.css"
import contactTurkey from "../PUBLIC/contactTurkey.jpg"
import contactUk from "../PUBLIC/contactUk.jpg"
import contactFrance from "../PUBLIC/contactFrance.jpg"
import helper from "../HELPERS/functionHelper"
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="c" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function ScrollContact() {
  return (
    <>
      <Section className="c" >
        <div id="contact-body" >
          <div id="contact-turkey" style={{ background: `url(${contactTurkey})`, width:"500px", height:"785px", filter: "grayscale(100%)",display:"flex", alignItems:"center", justifyContent: "center", transition:"0.6s" }} >
            <div onMouseEnter={helper.enter6} onMouseLeave={helper.leave6} style={{ width:"300px", height:"350px", backgroundColor:"black", borderRadius:"30px", opacity:"0.8", display:"flex", flexDirection:"column", alignItems:"center" }} >
              <h6 style={{ color:"#d1d0d0", letterSpacing:"0", marginTop:"30px" }} >Office In Turkey</h6>
              <hr style={{ width:"300px", color:"#d1d0d0", marginTop:"10px" }} ></hr>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"50px" }} >
                <BsTelephone style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >+90 212-212 12 12</p>
              </div>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"10px" }}>
                <MdOutlineMail style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >pp@gmail.com.tr</p>
              </div>
              <button style={{marginTop:"40px" }} className="google-maps-button" >View On Google Maps</button>

            </div>
            
          </div>
          <div id="contact-uk" style={{ background: `url(${contactUk})`, width:"500px", height:"785px", filter: "grayscale(100%)", display:"flex", alignItems:"center", justifyContent: "center", transition:"0.6s" }} >
            <div onMouseEnter={helper.enter7} onMouseLeave={helper.leave7} style={{ width:"300px", height:"350px", backgroundColor:"black", borderRadius:"30px", opacity:"0.8", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }} >
              <h6 style={{ color:"#d1d0d0", letterSpacing:"0", marginTop:"30px" }} >Office In UK</h6>
              <hr style={{ width:"300px", color:"#d1d0d0", marginTop:"10px" }} ></hr>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"50px" }} >
                <BsTelephone style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >+44 212-212 12 12</p>
              </div>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"10px" }}>
                <MdOutlineMail style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >pp@gmail.com.uk</p>
              </div>
              <button style={{marginTop:"40px" }} className="google-maps-button" >View On Google Maps</button>

            </div>

          </div>
          <div id="contact-france" style={{ background: `url(${contactFrance})`, width:"500px", height:"785px", filter: "grayscale(100%)", display:"flex", alignItems:"center", justifyContent: "center", transition:"0.6s" }}>
            <div onMouseEnter={helper.enter8} onMouseLeave={helper.leave8} style={{ width:"300px", height:"350px", backgroundColor:"black", borderRadius:"30px", opacity:"0.8", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }} >
              <h6 style={{ color:"#d1d0d0", letterSpacing:"0", marginTop:"30px" }} >Office In France</h6>
              <hr style={{ width:"300px", color:"#d1d0d0", marginTop:"10px" }} ></hr>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"50px" }} >
                <BsTelephone style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >+33 212-212 12 12</p>
              </div>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"10px" }}>
                <MdOutlineMail style={{ width:"30px", color:"#d1d0d0", marginRight:"20px" }} />
                <p style={{ letterSpacing:"0", color:"#d1d0d0", fontSize:"25px" }} >pp@gmail.com.fr</p>
              </div>
              <button style={{marginTop:"40px" }} className="google-maps-button" >View On Google Maps</button>

            </div>

          </div>
        </div>
      </Section>
    </>
  )
}

export default ScrollContact