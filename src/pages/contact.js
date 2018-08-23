import React from "react";
import Link from "gatsby-link";
import phone from "../images/phone-receiver.png";
import tech from "../images/laptop.png";
import video from "../images/video-chat.png";
import coffee from "../images/coffee.png";

const ContactPage = () => (

  <div>
    <div className="flex flex-col pl-5 mt-5"> 
    <h2 className="text-center hand purple">Let's talk!</h2>
    <p className="leading-loose text-center">
    The best way to get a hold of me is by filling out the contact form below 👇
    </p>
</div>
<div className="flex flex-col md:flex-row pl-5 mt-4"> 
  <form className="mx-auto md:w-1/2">
  

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
      placeholder="Elizabeth"
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
      placeholder="Lemon"
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

    <div className="flex flex-col pl-5 mt-5"> 
<h2 className="text-center hand ">Ready to schedule something?</h2>

<p className="leading-loose mb-8 text-center">

If you're a previous client and you're ready to book a time with me, select what type of appointment you'd like and then select a date and time.
</p>

</div>


<div className="flex flex-col md:flex-row "> 


    <card className="w-1/4 md:w-1/3 about">
    <a href="https://calendly.com/kelseyoates/phonecall" target="blank" className="text-center no-underline">
  <img src={phone} className="small"/>
  <h3>Schedule a Phone Call</h3>
  </a>
</card>


   <card className="w-1/4 md:w-1/3 about">
   <a href="https://calendly.com/kelseyoates/tech-help" target="blank" className="text-center no-underline">
  <img src={tech} className="small"/>
  <h3 className="no-underline">Tech Help One-on-One</h3>
  </a>
</card>

   <card className="w-1/4 md:w-1/3 about">
   <a href="https://calendly.com/kelseyoates/video-call" target="blank" className="text-center no-underline">

  <img src={video} className="small"/>
  <h3>Video Chat</h3>
</a>
</card>

   <card className="w-1/4 md:w-1/3 about">
   <a href="https://calendly.com/kelseyoates/meet-at-rutas" target="blank" className="text-center no-underline">
  <img src={coffee} className="small"/>
  <h3>Meet at Ruta's</h3>
</a>

</card>


</div>



</div>


);

export default ContactPage;
