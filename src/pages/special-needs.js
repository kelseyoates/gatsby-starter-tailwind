import React from "react";
import Link from "gatsby-link";
import SpecialNeeds from "../components/Special-Needs/index.js";


const SpecialNeedsPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-a mx-auto sm:w-1/1 md:w-2/3"> 
    <h3 className="text-center">Special Needs</h3>

    <p className="leading-loose">
    After college, I started and ran Scratch Theater - a small theater group for adolescents with special needs. Out of that grew <span className="font-bold">Sarah Sun and The Contest</span> as well as the <span className="font-bold">Pen and Ink</span> workshop.
    </p>
    <p className="leading-loose">
    In addition to running my theater group, I also worked in a group home for individuals with special needs.
    </p>
    <p className="leading-loose">
    Everything I've written in this area is available to read for free. Enjoy!
    </p>

</div>


<SpecialNeeds />


  </div>
);

export default SpecialNeedsPage;
