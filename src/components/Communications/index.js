import React from "react";
import Link from "gatsby-link";

import monthly from "../../images/aane-monthly.png";
import plank from "../../images/plank-cover.png";
import hiding from "../../images/hiding-1.png";


const Communications = () => (



<div className=" flex flex-wrap">


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
    <img src={hiding} />
      <h3>Hiding in Plain Sight</h3>
      <p>video editing, cover art</p>
      <Link to="/hiding-in-plain-sight" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
      <img src={monthly}/>
      <h3>AANE Monthly - May '17</h3>
      <p>video editing, producing</p>
      <Link to="/about" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Watch</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
    <img src={plank} />
      <h3>Plank for Autism</h3>
      <p>infographic</p>
      <Link to="/plank-for-autism" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

</div>

  
);

export default Communications;
