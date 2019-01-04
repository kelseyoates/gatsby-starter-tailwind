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


const IndexPage = () => (
<div>
  <div className="flex flex-wrap px-1 pt-17 bg-index"> 
    <div className="mx-auto">
      <h1 className="gold">Kelsey Oates</h1>
      <h2 className="light-gold">Design | Communications | Tech Help</h2>
    </div>
  </div>
 



  <h2 className="text-center my-9">Selected Work</h2>
  <hr className="text-left"/>

<div className = "flex flex-wrap">
<div className="xsm:w-1/1 sm:w-1/2 ">
  <div className="portfolio">
  <img src={homeeImage} />
    <h3>Homee + Insurance</h3>
    <p>UX Case Study: UX Design | UX Writing</p>
    <p><Link to="/ux/homee" className="py-3 no-underline">
   <button>Learn More</button>
    </Link></p>
  </div>
</div>

<div className="xsm:w-1/1 sm:w-1/2 ">
  <div className= "portfolio">
  <img src={twoLanternsImage}/>
    <h3>Two Lanterns</h3>
    <p>Website: Design | UX Writing | Copyediting</p>
      <p><a href="http://www.twolanterns.co" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>
</div>

</div>

<div className = "flex flex-wrap">
<div className="xsm:w-1/1 sm:w-1/2 ">


  <div className=" portfolio">
  <img src={sslcImage} />
    <h3>South Shore Laboratory Consultants</h3>
    <p>Website: Design | UX Writing | Copyediting</p>
    <p><a href="https://www.sslabconsultants.com" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>


</div>


<div className="xsm:w-1/1 sm:w-1/2 ">
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

<div className = "flex flex-wrap">
<div className="xsm:w-1/1 sm:w-1/2 ">
  <div className=" portfolio">
  <img src={sarahImage} />
    <h3>Sarah Sun and The Contest</h3>
    <p>Book: Writing | Special Needs</p>
    <p><Link to="/special-needs/sarah-sun-and-the-contest" className="py-3 no-underline">
   <button>Read</button>
    </Link></p>
  </div>
</div>


<div className="xsm:w-1/1 sm:w-1/2 ">
  <div className=" portfolio">
  <img src={scratchImage}/>
    <h3>Scratch Theater</h3>
    <p>Plays + Workshops: Writing | Special Needs</p>
    <p><Link to="/special-needs/scratch-theater" className="py-3 no-underline">
   <button>Learn More</button>
    </Link></p>
  </div>
</div>

</div>
<hr />
  <ContactForm />

</div>


);

export default IndexPage;
