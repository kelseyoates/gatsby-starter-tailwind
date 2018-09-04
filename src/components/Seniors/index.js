import React from "react";
import Link from "gatsby-link";

import seniors from "../../images/tech-help.png";

const Seniors = () => (


<div className=" flex flex-wrap">

    <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3 mx-auto">
      <div className="portfolio text-center bg-1">
        <img src={seniors}/>
        <h3>Tech Help for Seniors</h3>
        <p>one-on-one help with computers, tablets, and phones</p>
        <Link to="/seniors" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
          <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
        </Link>
      </div>
    </div>

   </div>

  
);

export default Seniors;
