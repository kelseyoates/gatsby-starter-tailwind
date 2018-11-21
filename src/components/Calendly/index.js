import React from "react";
import Link from "gatsby-link";

import phone from "../../images/on-the-phone.png";
import tech from "../../images/one-on-one.png";
import video from "../../images/video-chat.png";
import one from "../../images/one-hour.png";
import two from "../../images/two-hours.png";

const Calendly = () => (

  <div>
  <div className="flex flex-col px-1 pt-5 font-light"> 
  <h2 className="text-center ">Ready to schedule something?</h2>
  
  <p className="leading-loose mb-8 text-center">
  
  If you're a previous client and you're ready to book a time with me, select what type of appointment you'd like and then select a date and time.
  </p>
  
  </div>
<div className="px-1 pt-5 flex flex-wrap">

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4">
   <div className="card bg-primary text-white">
   <img src={one}/>
     <h3>One-on-One (1hr)</h3>
     <p>We'll meet at the location of your choice.</p>
     <a href="https://calendly.com/kelseyoates/one-on-one" target="blank" className="text-center no-underline">
           <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
 
   </div>
 </div>

  <div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4">
   <div className="card bg-primary text-white">
   <img src={two} />
 <h3>One-on-One (2hrs)</h3>
 <p>We'll meet at the location of your choice.</p>
   <a href="https://calendly.com/kelseyoates/one-on-one-2-hrs" target="blank" className="text-center no-underline">
           <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
   </div>
 </div>

 <div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4">
   <div className="card bg-primary text-white">
   <img src={phone} />
 <h3>Phone Call</h3>
 <p>I'll call you.</p>

   <a href="https://calendly.com/kelseyoates/phone-call" target="blank" className="text-center no-underline">
           <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
   </div>
 </div>



 <div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4">
   <div className="card bg-primary text-white">
   <img src={video} />
 <h3>Video Chat</h3>
 <p>I use Google Hangouts and Skype.</p>
 <a href="https://calendly.com/kelseyoates/video-chat" target="blank" className="text-center no-underline">
           <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
   </div>
 </div>

 </div>

 </div>

);

export default Calendly;
