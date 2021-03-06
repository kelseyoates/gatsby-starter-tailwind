import React from "react";
import Link from "gatsby-link";
import ContactForm from "../components/Contact/index.js";
import Calendly from "../components/Calendly";


const SeniorsPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-a mx-auto sm:w-1/1 md:w-2/3"> 
    <h3 className="text-center">Tech Help for Seniors</h3>
    <p className="leading-loose">
    I provide one-on-one technology help for seniors. I can meet you at your preferred location, be it a local library or your home. 
    </p>
    <p className="leading-loose">
    If you're in the <strong>Greater Boston </strong> area, send me a message and we can set something up.
    </p>

</div>





<ContactForm />

<Calendly />

  </div>
);

export default SeniorsPage;
