import React from "react";
import Link from "gatsby-link";

import plankImage from "../../images/ben-white-124388-unsplash.jpg";
import hidingImage from "../../images/elijah-m-henderson-194586-unsplash.png";
import twoLanternsImage from "../../images/hunters-race-408744-unsplash.jpg";
import sslcImage from "../../images/lucas-vasques-453684-unsplash.jpg";
import jtptImage from "../../images/chris-benson-609702-unsplash.jpg";
import livingstoneImage from "../../images/fancycrave-219666-unsplash.jpg";
const Communications = () => (

<div className = "flex flex-wrap">


<div className="xsm:w-1/1 sm:w-1/2">
  <div className= "portfolio">
  <img src={twoLanternsImage}/>
    <h3>Two Lanterns</h3>
    <p>Website: Design | UX Writing | Copyediting</p>
      <p><a href="http://www.twolanterns.co" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>
</div>

<div className="xsm:w-1/1 sm:w-1/2">
<div className=" portfolio">
  <img src={sslcImage} />
    <h3>South Shore Laboratory Consultants</h3>
    <p>Website: Design | UX Writing | Copyediting</p>

    <p><a href="https://www.sslabconsultants.com" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>

  </div>


<div className="xsm:w-1/1 sm:w-1/2">
<div className=" portfolio">
  <img src={jtptImage} />
    <h3>Jay Thebado Personal Training</h3>
    <p>Website: Design | UX Writing | Copyediting</p>

    <p><a href="https://www.jtpt.fitness" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>

  </div>

  <div className="xsm:w-1/1 sm:w-1/2">
<div className=" portfolio">
  <img src={livingstoneImage} />
    <h3>The Livingstone Company</h3>
    <p>Website: Design | UX Writing | Copyediting</p>

    <p><a href="https://www.livingstonecompany.com" target="blank" className="no-underline py-3 "><button>Visit ↗</button></a></p>
  </div>

  </div>

<div className="xsm:w-1/1 sm:w-1/2">
<div className=" portfolio">
<img src={plankImage} />
      <h3>Plank for Autism</h3>
      <p>Infographic: Design | Copywriting</p>
      <p><Link to="/communications/plank-for-autism" className="py-3 no-underline">
    <button>Learn More</button>
    </Link></p>
  </div>

  </div>

<div className="xsm:w-1/1 sm:w-1/2">
<div className=" portfolio">
<img src={hidingImage} />
      <h3>Hiding in Plain Sight</h3>
      <p>Video: Cover Design | Video Editing</p>
      <p><Link to="/communications/hiding-in-plain-sight" className="py-3 no-underline">
    <button>Learn More</button>
    </Link></p>
  </div>

  </div>


</div>

  
);

export default Communications;
