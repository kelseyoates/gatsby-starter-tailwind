import React from "react";
import Link from "gatsby-link";
import Design from "../components/Design/index.js";


const DesignPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-10"> 
    <h2 className="text-center hand purple">UX Design</h2>
    <p className="leading-loose text-center">
    Here are some case studies and outward links. 
    </p>
</div>

<Design />


  </div>
);

export default DesignPage;
