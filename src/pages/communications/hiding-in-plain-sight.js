import React from "react";
import Link from "gatsby-link";

import hiding from "../../images/hiding-2.png";
import hidingHidden from "../../images/hiding-3.png";


const HidingPage = () => (
  <div>


<div className="pt-5 flex flex-wrap bg-primary items-center text-center">


 <div className="sm:w-1/1 md:w-1/2">
  <img src={hidingHidden} className="top"/>
</div>

  <div className="sm:w-1/1 md:w-1/2">
    <h1 className="text-white">
      Hiding in Plain Sight
    </h1>
    <p className="text-white">
    A video trailer and cover art for the March 2017 AANE Women's Conference for AANE | The Asperger/Autism Network.
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
        <p>Create a video trailer for the 2017 Women's Conference for promotional use in selling the long-form conference videos.</p>
        <h3>Tools</h3>
        <p>Final Cut Pro, Sketch</p>
        
    </section>


</div>



        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Deliverables
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
   <h3>Trailer - Cover Art</h3>
    <img src={hiding} className="shadow"/>

 <h3>Trailer - The Video</h3>
 <a href="https://youtu.be/HSKgwq_0x-k" target="blank" className="no-underline py-3 "><button>Watch the video on YouTube ↗</button></a>

</section>
</div>

  </div>
);

export default HidingPage;
