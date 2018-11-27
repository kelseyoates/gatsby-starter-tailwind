import React from "react";
import Link from "gatsby-link";
import Design from "../components/Design/index.js";


const DesignPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-10"> 
    <h2 className="text-center">UX Design</h2>
    <p className="leading-loose text-center">
    I specialize in Information Architecture and UX Writing.
    </p>
</div>

<Design />


  </div>
);

export default DesignPage;
