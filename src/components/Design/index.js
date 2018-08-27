import React from "react";
import Link from "gatsby-link";

import map from "../../images/map.png";
import bso from "../../images/bso.png";
import homee from "../../images/homee-cover.png";
import level from "../../images/level-up.png";
import livingstone from "../../images/livingstone.png";
import sslc from "../../images/sslc.png";



const Design = () => (


  <div>


<div className=" flex flex-wrap">

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={map} />
      <h3>Medication Administration Program</h3>
      <p>a UX case study</p>
      <Link to="/map" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={bso} />
      <h3>Boston Symphony Orchestra</h3>
      <p>a UX case study</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={homee} />
      <h3>Homee + Insurance</h3>
      <p>a UX case study</p>
      <Link to="/" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker  font-bold px-6 py-3 rounded text-sm text-white">Coming Soon</button>
      </Link>
    </div>
  </div>

    <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={level} />
      <h3>Level Up Donations</h3>
      <p>a new project</p>
      <Link to="/" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker font-bold px-6 py-3 rounded text-sm text-white">Coming Soon</button>
      </Link>
    </div>
  </div>


<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
    <img src={sslc}/>
      <h3>South Shore Laboratory Consultants</h3>
      <p>communications, web design</p>
        <a href="http://www.sslabconsultants.com" target="blank" className="no-underline py-3 "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold my-3 px-6 py-3 rounded text-sm text-white">Visit ↗️</button></a>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={livingstone} />
      <h3>The Livingstone Company</h3>
      <p>web design</p>
      <a href="http://www.livingstonecompany.com" target="blank" className="no-underline "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 my-3  rounded text-sm text-white">Visit ↗️</button></a>
    </div>
  </div>

</div>


  </div>

  
);

export default Design;
