import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import "../CSS/products.css"
import Carousel from "./Carousel";
import Products from "./Products";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../REDUX/productSlice";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section className="p" ref={ref}>
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

export default function App() {
  return (
    <>
      <Section className="p" >
        <Carousel />
      </Section>
      <Section className="p" >
        <div style={{ display:"flex", flexDirection:"row" }} >
            <Filter /> 
            <Products />
        </div>
      </Section>
    </>
  );
}
