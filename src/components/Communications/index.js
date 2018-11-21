import React from "react";
import Link from "gatsby-link";

<<<<<<< HEAD
import plank from "../../images/plank-cover.png";
import hiding from "../../images/hiding-1.png";
import twoLanterns from "../../images/two-lanterns.png";
=======
import monthly from "../../images/aane-monthly.png";
import plank from "../../images/plank-cover.png";
import hiding from "../../images/hiding-1.png";
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
import sslc from "../../images/sslc.png";

const Communications = () => (

<<<<<<< HEAD
<div className = "flex flex-wrap">


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-primary text-white">
    <img src={twoLanterns} />
      <h3>Two Lanterns</h3>
      <p>web design, copywriting, copyediting</p>
      <a href="https://www.twolanterns.co" target="blank" className="no-underline py-3 "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold my-3 px-6 py-3 rounded text-sm text-white">Visit ↗️</button></a>
=======


<div className=" flex flex-wrap">


  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
    <div className="portfolio text-center bg-1">
    <img src={hiding} />
      <h3>Hiding in Plain Sight</h3>
      <p>video editing, cover art</p>
      <Link to="/hiding-in-plain-sight" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
        <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">Learn More</button>
      </Link>
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
    </div>
  </div>

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
<<<<<<< HEAD
    <div className="portfolio text-center bg-primary text-white">
    <img src={sslc}/>
      <h3>South Shore Laboratory Consultants</h3>
      <p>web design, copyediting</p>
=======
    <div className="portfolio text-center bg-1">
    <img src={sslc}/>
      <h3>South Shore Laboratory Consultants</h3>
      <p>communications, web design</p>
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
        <a href="http://www.sslabconsultants.com" target="blank" className="no-underline py-3 "><button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold my-3 px-6 py-3 rounded text-sm text-white">Visit ↗️</button></a>
    </div>
  </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/3 xlg:w-1/3">
<<<<<<< HEAD
    <div className="portfolio text-center bg-primary text-white">
=======
    <div className="portfolio text-center bg-1">
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
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
