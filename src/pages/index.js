import React from "react";
import Link from "gatsby-link";
import devices from "../images/devices.png";

import Design from "../components/Design/index.js";
import Seniors from "../components/Seniors/index.js";
import Communications from "../components/Communications/index.js";
import SpecialNeeds from "../components/Special-Needs/index.js";




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


<Seniors />
<Design />
<Communications />
<SpecialNeeds />





  </div>


);

export default IndexPage;
