import React from "react";
import Link from "gatsby-link";
import devices from "../images/devices.png";

import map from "../images/map.png";
import bso from "../images/bso.png";
import homee from "../images/homee-cover.png";

import sslc from "../images/sslc.png";
import hiding from "../images/hiding-1.png";
import sarah from "../images/sarah-sun-and-the-contest.png";
import scratch from "../images/Scratch-Theater.png";
import plank from "../images/plank-cover.png";
import monthly from "../images/aane-monthly.png";
import level from "../images/level-up.png";
import livingstone from "../images/livingstone.png";
import seniors from "../images/tech-help.png";



import GatsbyLink from "gatsby-link";


const IndexPage = () => (
  <div>

      <div className="flex flex-wrap px-1 pt-5"> 
       <div className="md:w-2/3 mx-auto">
        <h1 className="hand purple">
          Hi, I'm Kelsey Oates. 
        </h1>
        <h4>
        I like to design things and to help people.
        </h4>
        <h4>I also like dogs, writing, and using emoji as punctuation 👍</h4>
    </div>
</div>
    
    <img src={devices} className="block mx-auto w-1" />

   <h2 className="text-center hand my-9">
    Selected Work
    </h2>
    <hr className="text-left"/>

<div className=" flex flex-wrap">
  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={seniors}/>
      <h3>Tech Help for Seniors</h3>
      <p>one-on-one help with computers, tablets, and phones</p>
      <Link to="/about" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={map} />
      <h3>Medication Administration Program</h3>
      <p>a UX case study</p>
      <Link to="/map" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={bso} />
      <h3>Boston Symphony Orchestra</h3>
      <p>a UX case study</p>
      <Link to="/bso" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={homee} />
      <h3>Homee + Insurance</h3>
      <p>a UX case study</p>
      <Link to="/" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker  font-bold px-6 py-3 rounded text-sm text-white">Coming Soon</button>
      </Link>
    </div>
  </div>



<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
    <img src={sslc}/>
      <h3>South Shore Laboratory Consultants</h3>
      <p>communications, web design</p>
     
    
        <a href="http://www.sslabconsultants.com" target="blank" className="no-underline py-3 "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold my-3 px-6 py-3 rounded text-sm text-white">Visit ↗️</button></a>
       
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
    <img src={hiding} />
      <h3>Hiding in Plain Sight</h3>
      <p>video editing, cover art</p>
      <Link to="/about" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={sarah}/>
      <h3>Sarah Sun & The Contest</h3>
      <p>a book about a stubborn, talented, all-around fabulous 14-year-old girl with Down Syndrome</p>
      <Link to="/sarah-sun-and-the-contest" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Read</button>
      </Link>
    </div>
  </div>


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={scratch} />
      <h3>Scratch Theater</h3>
      <p>a collection of plays for actors with special needs</p>
      <Link to="/scratch-theater" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Act</button>
      </Link>
    </div>
  </div>



  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={monthly}/>
      <h3>AANE Monthly - May '17</h3>
      <p>video editing, producing</p>
      <Link to="/about" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Watch</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
    <img src={plank} />
      <h3>Plank for Autism</h3>
      <p>infographic</p>
      <Link to="/plank-for-autism" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={livingstone} />
      <h3>The Livingstone Company</h3>
      <p>web design</p>
      <a href="http://www.livingstonecompany.com" target="blank" className="no-underline "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 my-3  rounded text-sm text-white">Visit ↗️</button></a>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/4 ">
    <div className="portfolio text-center bg-1">
      <img src={level} />
      <h3>Level Up Donations</h3>
      <p>a new project</p>
      <Link to="/" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker font-bold px-6 py-3 rounded text-sm text-white">Coming Soon</button>
      </Link>
    </div>
  </div>

</div>


  </div>


);

export default IndexPage;
