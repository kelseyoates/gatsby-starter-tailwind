import React from "react";
import Link from "gatsby-link";

import plank from "../images/plank.png";
import plankCover from "../images/plank-cover.png";



const PlankForAutismPage = () => (
  <div>


<div className="pt-5 flex flex-wrap bg-6 items-center text-center">

 <div className="sm:w-1/1 md:w-1/2">
  <img src={plankCover} className="top"/>
</div>


  <div className="sm:w-1/1 md:w-1/2">
    <h1 className="text-white">
      Plank for Autism
    </h1>
    <p className="text-white">
    An infographic for AANE | The Asperger/Autism Network.
    </p>

</div>



</div>

        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Project Overview
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
 
        <h3>Client</h3>
        <p>AANE | The Asperger/Autism Network</p>

          <h3>Job</h3>
        <p>Create an infographic for the "Plank for Autism" fundraiser.</p>
        <h3>Tools</h3>
        <p>Piktochart, FlatIcon</p>
        
    </section>


</div>



        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Deliverables
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
   <h3>Plank for Autism - Infographic</h3>

    <img src={plank} className="shadow"/>



</section>
</div>

  </div>
);

export default PlankForAutismPage;
