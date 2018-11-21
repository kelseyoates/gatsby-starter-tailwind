import React from "react";
import Link from "gatsby-link";
import Communications from "../components/Communications/index.js";


const CommunicationsPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-10"> 
    <h2 className="text-center hand purple">Communications</h2>
    <p className="leading-loose text-center">
    I work with clients to produce solutions to their communications problems. Sometimes this means websites, sometimes this means video editing, and sometimes it's creating workflows with various applications. Whatever the client needs, I try to deliver.
    </p>
</div>

<Communications />


  </div>
);

export default CommunicationsPage;
