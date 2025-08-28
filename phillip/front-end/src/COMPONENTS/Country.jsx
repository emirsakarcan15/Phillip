import React, { useState } from 'react'
import "../CSS/styles.css"
import awardPhoto from "../PUBLIC/award.jpg"
import China from "../PUBLIC/china.png"
import France from "../PUBLIC/france.png"
import Turkey from "../PUBLIC/turkey.png"
import Uk from "../PUBLIC/uk.png"
import Australia from "../PUBLIC/australia.png"
import Japan from "../PUBLIC/japan.png"
import Italy from "../PUBLIC/italy.png"
import Usa from "../PUBLIC/usa.png"
import helper from "../HELPERS/functionHelper"
import chinaPhoto from "../PUBLIC/chinaPhoto.jpg"
import usaPhoto from "../PUBLIC/usaPhoto.jpg"
import turkeyPhoto from "../PUBLIC/turkeyPhoto.jpg"
import francePhoto from "../PUBLIC/francePhoto.jpg"
import ukPhoto from "../PUBLIC/ukPhoto.jpg"
import australiaPhoto from "../PUBLIC/australiaPhoto.jpg"
import italyPhoto from "../PUBLIC/italyPhoto.jpg"
import japanPhoto from "../PUBLIC/japanPhoto.jpg"


function Country() {
  
  return (
    <div id="country-wrapper">

      <div id="row-1" >

        <div id="china" onMouseEnter={() => helper.enter(chinaPhoto)} onMouseLeave={helper.leave} className='country'>
          <img className="countryPhoto" src={China} />
        </div>

        <div id="usa" onMouseEnter={() => helper.enter(usaPhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={Usa} />
        </div>

        <div id="turkey" onMouseEnter={() => helper.enter(turkeyPhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={Turkey} />
        </div>

        <div id="france" onMouseEnter={() => helper.enter(francePhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={France} />
        </div>

      </div>

      <div id="row-2" >

        <div id="uk" onMouseEnter={() => helper.enter(ukPhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={Uk} />
        </div>

        <div id="australia" onMouseEnter={() => helper.enter(australiaPhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={Australia} />
        </div>

        <div id="italy" onMouseEnter={() => helper.enter(italyPhoto)} onMouseLeave={helper.leave} className="country">
          <img className="countryPhoto" src={Italy} />
        </div>

        <div id="japan" onMouseEnter={() => helper.enter(japanPhoto)} onMouseLeave={helper.leave} className="country" >
          <img className="countryPhoto" src={Japan} />
        </div>

      </div> 
      <div id="country-text-wrapper" >
        <h1 style={{ color: "#d1d0d0"}} >Our Depots Around The World</h1> 
      </div>
      

    </div>
  )
}

export default Country