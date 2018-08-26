import React from "react";
import Link from "gatsby-link";
import phone from "../images/on-the-phone.png";
import tech from "../images/one-on-one.png";
import video from "../images/video-chat.png";
import one from "../images/one-hour.png";
import two from "../images/two-hours.png";


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



<div className="mt-5 flex flex-wrap">

 <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="contact bg-1">
    <img src={one}/>
      <h3>One-on-One (1hr)</h3>
      <p>We'll meet at the location of your choice.</p>
      <a href="https://calendly.com/kelseyoates/one-on-one" target="blank" className="text-center no-underline">
            <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
  
    </div>
  </div>

   <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="contact bg-1">
    <img src={two} />
  <h3>One-on-One (2hrs)</h3>
  <p>We'll meet at the location of your choice.</p>
    <a href="https://calendly.com/kelseyoates/one-on-one-2-hrs" target="blank" className="text-center no-underline">
            <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="contact bg-1">
    <img src={phone} />
  <h3>Phone Call</h3>
  <p>I'll call you.</p>

    <a href="https://calendly.com/kelseyoates/phone-call" target="blank" className="text-center no-underline">
            <button className="border-grey-darker hover:border-grey-dark bg-dark-purple hover:bg-pink font-bold px-6 py-3 rounded text-sm text-white">View schedule</button></a>
    </div>
  </div>

 

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/4">
    <div className="contact bg-1">
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

export default ContactPage;
