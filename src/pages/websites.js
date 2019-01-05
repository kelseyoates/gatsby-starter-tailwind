import React from "react";
import Link from "gatsby-link";
import Websites from "../components/Websites/index.js";

const WebsitesPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-a mx-auto sm:w-1/1 md:w-2/3"> 
    <h3 className="text-center">Websites</h3>

    <p className="leading-loose">
    I specialize in designer-managed static websites (like this one) and client-managed websites on Squarespace, Wordpress, and Google Sites.
    </p>

</div>

<Websites />

  </div>
);

export default WebsitesPage;
