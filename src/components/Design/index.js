import React from "react";
import Link from "gatsby-link";

import map from "../../images/map.png";
import bso from "../../images/bso.png";
import homee from "../../images/homee-cover.png";
import homeeImage from "../../images/henry-co-180108-unsplash.jpg";
import bsoImage from "../../images/spencer-imbrock-487035-unsplash.jpg";
import mapImage from "../../images/rawpixel-626041-unsplash.jpg";

const Design = () => (


  <div>

  <div className = "flex flex-wrap">
  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
  <div className="portfolio">
  <img src={homeeImage} />
    <h3>Homee + Insurance</h3>
    <p>UX Case Study: UX Design | UX Writing</p>
    <p><Link to="/ux/homee" className="py-3 no-underline">
    <button>Read</button>
    </Link></p>
  </div>
</div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
  <div className= "portfolio">
  <img src={bsoImage}/>
  <h3>Boston Symphony Orchestra</h3>
  <p>UX Case Study: UX Design | UX Writing</p>
  <p><Link to="/ux/bso" className="py-3 no-underline">
    <button>Read</button>
    </Link></p>
  </div>
</div>


<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
  <div className="portfolio">
  <img src={mapImage} />
      <h3>Medication Administration Program</h3>
    <p>UX Case Study: UX Design | UX Writing</p>
    <p><Link to="/ux/map" className="py-3 no-underline">
    <button>Read</button>
    </Link></p>
  </div>
</div>
</div>

  </div>

  
);

export default Design;
