import { useRef } from "react";
import { useInView } from "framer-motion";
import "../CSS/styles.css"
import aboutUsPhoto from "../PUBLIC/about-us.jpg"
import awardPhoto from "../PUBLIC/award.jpg"
import customerPhoto from "../PUBLIC/customer.jpg"
import depotPhoto from "../PUBLIC/depot.jpg"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Country from "./Country"
import CompaniesMarquee from "./CompaniesMarquee";
import getStarted from "../PUBLIC/getStarted.jpg"
import Boxof4 from "./Boxof4";
import first from "../PUBLIC/1st.jpg"
import universal from "../PUBLIC/universal.jpg"
import dailymoney from "../PUBLIC/dailymoney.jpg"
import { useNavigate } from "react-router-dom";


const card1 = (
  <React.Fragment>
    <CardContent sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${awardPhoto})`, color: "#d1d0d0", cursor: "default" }, border:"none"  }} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        3rd
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        ranking of the 2025 most visited websites
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent id="card2" sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${customerPhoto})`, color: "#d1d0d0", cursor: "default" } }} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        2m
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        number of active customers on phillip
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent id="card3" sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${depotPhoto})`, color: "#d1d0d0", cursor: "default" }}} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        45k
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        active sellers and affiliates on phillip
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent id="card4" sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${first})`, color: "#d1d0d0", cursor: "default" }}} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        1st
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        ranking of the 2025 most visited website in Turkey
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card5 = (
  <React.Fragment>
    <CardContent id="card5" sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${dailymoney})`, color: "#d1d0d0", cursor: "default" }}} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        $23m
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        amount of money been processed on a daily average
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card6 = (
  <React.Fragment>
    <CardContent id="card6" sx={{ height: "200px", backgroundColor: "#988686", "&:hover": { backgroundImage: `url(${universal})`, color: "#d1d0d0", cursor: "default" }}} >
      <Typography sx={{ fontWeight: "500" }} variant="h1" component="div">
        98
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="body2">
        number of depots around the world
      </Typography>
    </CardContent>
  </React.Fragment>
);

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 3.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.01s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {

  const navigate = useNavigate()
  
  const handleProductsClick = () => {
    navigate("/products")
  }

  return (
    <>
      <Section>
        <div id="section-1-div" >
            <h1 id="section-1-header" >Phillip is here to make your everyday choices easier, smarter, and more enjoyable.</h1>
            <img id="section-1-photo" src={aboutUsPhoto} />
        </div>
      </Section>
      <Section>
        <div id="section-2-div">
          <div id="row-1-section-2">
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", }}>
                <Card>{card1}</Card>
            </Box>
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", marginLeft: "40px" }}>
                <Card>{card2}</Card>
            </Box>
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", marginLeft: "40px" }}>
                <Card>{card3}</Card>
            </Box>
          </div>
          <div id="row-2-section-2">
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", }}>
                <Card>{card4}</Card>
            </Box>
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", marginLeft: "40px" }}>
                <Card>{card5}</Card>
            </Box>
            <Box sx={{ width: 300, backgroundColor: "#988686", border: "2px solid none", borderRadius: "10px", marginLeft: "40px" }}>
                <Card>{card6}</Card>
            </Box>
          </div>
            
        </div>
      </Section>
      <Section id="section-4" >
        <Country />
      </Section>
      <Section>
        <CompaniesMarquee />
      </Section>
      <Section>
        <Boxof4 /> 
      </Section>
      <Section>
        <div id="get-started-wrapper" >
          <img src={getStarted} style={{ width: "400px", height: "490px", border: "2px solid none", borderRadius:"30px" }} />
          <div is="text-and-button" >
            <h1 id="section-7-header" >Get started now! With just one click, create your account and begin exploring our platform with exclusive benefits.</h1>
            <button onClick={handleProductsClick} id="section-7-button" >Click To Start Shopping</button>
          </div>
        </div>
      </Section>
    </>
  );
}