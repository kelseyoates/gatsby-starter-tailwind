import React from "react";
import Link from "gatsby-link";
import devices from "../images/devices.png";

import map from "../images/map.png";
import bso from "../images/bso.png";
import sslc from "../images/sslc.png";
import hiding from "../images/hiding.png";
import sarah from "../images/sarah-sun-and-the-contest.png";
import scratch from "../images/Scratch-Theater.png";
import plank from "../images/plank-cover.png";
import monthly from "../images/aane-monthly.png";
import level from "../images/level-up.png";
import livingstone from "../images/livingstone.png";
import chris from "../images/chris.png";
import seniors from "../images/tech-help.png";

import GatsbyLink from "gatsby-link";


const IndexPage = () => (
  <div>

       <div className="flex flex-col md:flex-row pl-5 mt-5"> 
    <h1 className="hand purple">
      Hi, I'm Kelsey Oates. 
    </h1>
    </div>
    <div className="flex flex-col pl-5"> 
    <h4>
    I like to design things and to help people.
    </h4>
    <h4>I also like dogs, writing, and using emoji as punctuation 👍</h4>
</div>
    
    <img src={devices} className="block mx-auto w-1" />

   <h2 className="text-center hand my-9">
    Selected Work
    </h2>
    <hr className="text-left"/>
    <h4 className="text-center">Click images to view projects.</h4>

   


  <div className="flex flex-col md:flex-row my-9">
 
  <div className="w-1/4 md:w-1/3">
      <Link to="/map" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
      <img src={map} className="card"/>
            </Link>
    </div>

    <div className="w-1/4 md:w-1/3">
      <Link to="/bso" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
      <img src={bso} className="card"/>
            </Link>
    </div>
    <div className="w-1/4 md:w-1/3">
      <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
      <img src={sslc} className="card"/>
            </Link>
    </div>

    <div className="w-1/4 md:w-1/3">
      <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
      <img src={seniors} className="card"/>
            </Link>
    </div>



  </div>

<div className="flex flex-col md:flex-row my-9"> 
    <div className="w-1/4 md:w-1/3">
   <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
   <img src={hiding} className="card"/>
         </Link>
 </div>

   <div className="w-1/4 md:w-1/3">
   <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
   <img src={sarah} className="card"/>
         </Link>    </div>

             <div className="w-1/4 md:w-1/3">
   <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
   <img src={monthly} className="card" />
         </Link>
 </div>

 <div className="w-1/4 md:w-1/3">
   <Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
   <img src={scratch} className="card"/>
         </Link>
 </div>

</div>

  <div className="flex flex-col md:flex-row my-9">
 

 <div className="w-1/4 md:w-1/3">
<Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
<img src={plank} className="card"/>
      </Link>
</div>


<div className="w-1/4 md:w-1/3">
<Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
<img src={level} className="card"/>
      </Link>    </div>

          <div className="w-1/4 md:w-1/3">
<Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
<img src={livingstone} className="card"/>
      </Link>
</div>

<div className="w-1/4 md:w-1/3">
<Link to="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white">
<img src={chris} className="card"/>
      </Link>
</div>

</div>


    <div className="flex flex-col md:flex-row mt-5">
 

 <div className="md:w-1/3 px-8">

    <h2 className="hand">
      Let's talk!
    </h2>
    <p>
    Send me a message and I'll get back to you as soon as possible.
    </p>
    <p> Ready to schedule something? Check out {" "}
      <a
        href="https://tailwindcss.com/docs/examples/forms"
        className="font-bold no-underline text-grey-darkest"
      >
         my contact page.
      </a>{" "}
 
    </p>

</div>


<div className="md:w-2/3">

 <form className="mx-auto px-8">
    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="first-name"
    >
      First Name
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="first-name"
      type="text"
      placeholder="Leslie"
    />

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="last-name"
    >
      Last Name
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="last-name"
      type="text"
      placeholder="Knope"
    />

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
      Message
    </label>
    <textarea
      className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      placeholder="Say something..."
      rows="8"
    />

    <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
      Submit
    </button>
  </form>
      
      </div>





</div>



  </div>


);

export default IndexPage;
