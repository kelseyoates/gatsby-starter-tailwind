import React from "react";
import Link from "gatsby-link";

import map from "../../images/map.png";
import bso from "../../images/bso.png";
import homee from "../../images/homee-cover.png";


const Design = () => (


  <div>


<div className=" flex flex-wrap">

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={map} />
      <h3>Medication Administration Program</h3>
      <p>a UX case study</p>
      <Link to="/map" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={bso} />
      <h3>Boston Symphony Orchestra</h3>
      <p>a UX case study</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={homee} />
      <h3>Homee + Insurance</h3>
      <p>a UX case study</p>
      <Link to="/homee" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>


</div>


  </div>

  
);

export default Design;