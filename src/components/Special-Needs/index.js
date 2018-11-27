import React from "react";
import Link from "gatsby-link";

import sarah from "../../images/sarah-sun-and-the-contest.png";
import scratch from "../../images/Scratch-Theater.png";
import pen from "../../images/pen-and-ink.png";
import penImage from "../../images/gift-habeshaw-517714-unsplash.jpg";
import sarahImage from "../../images/sarahImage.jpg";
import scratchImage from "../../images/scratchTheaterActors.jpg";


const SpecialNeeds = () => (


  <div className=" flex flex-wrap">
  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">

  <div className="portfolio">
  <img src={sarahImage} />
    <h3>Sarah Sun and The Contest</h3>
    <p>Book: Writing | Special Needs</p>
    <p><Link to="/special-needs/sarah-sun-and-the-contest" className="py-3 no-underline">
    <button>Read</button>
    </Link></p>
  </div>
  </div>


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
  <div className="portfolio">
  <img src={scratchImage}/>
    <h3>Scratch Theater</h3>
    <p>Plays + Workshops: Writing | Special Needs</p>
    <p><Link to="/special-needs/scratch-theater" className="py-3 no-underline">
    <button>Learn More</button>
    </Link></p>
  </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
  <div className="portfolio">
  <img src={penImage}/>
    <h3>Pen and Ink</h3>
    <p>A Writing Workshop: Writing | Special Needs</p>
    <p><Link to="special-needs/pen-and-ink" className="py-3 no-underline">
    <button>Learn More</button>
    </Link></p>
  </div>
  </div>


  </div>



  
);

export default SpecialNeeds;
