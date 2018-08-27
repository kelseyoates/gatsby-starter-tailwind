import React from "react";
import Link from "gatsby-link";

import plank from "../images/plank.png";
import plankCover from "../images/plank-cover.png";



const PlankForAutismPage = () => (
  <div>


<div className="pt-5 flex flex-wrap bg-6 items-center text-center">
  <div className="sm:w-1/1 md:w-1/2">
    <h1 className="inline-block">
      Plank for Autism
    </h1>
    <p>
    An infographic for AANE | The Asperger/Autism Network.
    </p>

</div>

 <div className="sm:w-1/1 md:w-1/2">
  <img src={plankCover} className="top"/>
</div>


</div>


<div className="flex flex-col md:flex-row px-8"> 


   <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      Project Overview
    </h3>
    </card>

   <card className="md:w-2/3">
 

        <h3>Client</h3>
        <p>AANE | The Asperger/Autism Network</p>

          <h3>Job</h3>
        <p>Create an infographic for the "Plank for Autism" fundraiser.</p>
        <h3>Tools</h3>
        <p>Piktochart, FlatIcon</p>
        
    </card>


</div>



<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      Deliverables
    </h3>
    </card>

   <card className="md:w-2/3">
   <h3>Plank for Autism - Infographic</h3>

    <img src={plank} className="shadow"/>



</card>
</div>

  </div>
);

export default PlankForAutismPage;
