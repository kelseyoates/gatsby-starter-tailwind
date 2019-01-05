import React from "react";
import Link from "gatsby-link";
import devices from "../images/devices.png";
import seniorImage from "../images/elien-dumon-635501-unsplash.jpg";
import homeeImage from "../images/henry-co-180108-unsplash.jpg";
import twoLanternsImage from "../images/hunters-race-408744-unsplash.jpg";
import sslcImage from "../images/lucas-vasques-453684-unsplash.jpg";
import sarahImage from "../images/sarahImage.jpg";
import scratchImage from "../images/scratchTheaterActors.jpg";
import ContactForm from "../components/Contact/index.js";

import Websites from "../components/Websites/index.js";
import Design from "../components/Design/index.js";
import Seniors from "../components/Seniors/index.js";


const IndexPage = () => (
<div>
  <div className="flex flex-wrap px-1 pt-a"> 
    <div className="mx-auto md:w-2/3 sm:w-1/1 xsm:w-1/1">
      <h1>Hi, I'm Kelsey Oates.</h1>
      <h2>I make websites, design things, and work one-on-one with seniors.</h2>
      <h2>I also like to use emoji as punctuation 🔥</h2>
      <h2>Check out my work and if you like what you see, 
 
      <Link to="/contact" className="no-underline font-bold"> send me a message</Link> and we can get started on your project today.</h2>
      
    </div>
  </div>
 

  {/* <h2 className="text-center my-9">Selected Work</h2>
  <hr className="text-left"/> */}

  <h3 className="text-center pt-a">Websites</h3>
  <hr className="text-left"/>

<Websites />

<h3 className="text-center pt-a">UX Design</h3>
  <hr className="text-left"/>

<Design />

<h3 className="text-center pt-a">Tech Help for Seniors</h3>
  <hr className="text-left"/>


<div className = "flex flex-wrap">


<div className="xsm:w-1/1 sm:w-2/3 md:w-1/2 mx-auto">
  <div className=" portfolio ">
  <img src={seniorImage}/>
    <h3>Tech Help for Seniors</h3>
    <p>Education: One-on-One Technology Help</p>
    <p><Link to="/seniors" className="py-3 no-underline">
   <button>Learn More</button>
    </Link></p>
  </div>
</div>
</div>

<div className="pt-a">
  <ContactForm />
  </div>
</div>


);

export default IndexPage;
