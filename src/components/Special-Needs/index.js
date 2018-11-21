import React from "react";
import Link from "gatsby-link";

import sarah from "../../images/sarah-sun-and-the-contest.png";
import scratch from "../../images/Scratch-Theater.png";
import pen from "../../images/pen-and-ink.png";


const SpecialNeeds = () => (


  <div className=" flex flex-wrap">

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={sarah}/>
      <h3>Sarah Sun & The Contest</h3>
      <p>a book about a stubborn, talented, all-around fabulous 14-year-old girl with Down Syndrome</p>
      <Link to="/sarah-sun-and-the-contest" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={scratch} />
      <h3>Scratch Theater</h3>
      <p>a collection of plays for actors with special needs</p>
      <Link to="/scratch-theater" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Act</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
      <img src={pen} />
      <h3>Pen and Ink</h3>
      <p>a writing workshop</p>
      <Link to="/pen-and-ink" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>


  </div>



  
);

export default SpecialNeeds;
