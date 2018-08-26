import React from "react";
import { navigateTo } from "gatsby-link";

import phone from "../images/on-the-phone.png";
import tech from "../images/one-on-one.png";
import video from "../images/video-chat.png";
import one from "../images/one-hour.png";
import two from "../images/two-hours.png";




function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (




  <div>
    <div className="flex flex-col pl-5 mt-5"> 
    <h2 className="text-center hand purple">Let's talk!</h2>
    <p className="leading-loose text-center">
    The best way to get a hold of me is by filling out the contact form below 👇
    </p>
</div>
<div className="flex flex-col md:flex-row pl-5 mt-4"> 


        <form
          name="contactAlt"
          className="mx-auto md:w-1/2"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label >
              Don’t fill this out:{" "}
              <input 
              
              name="bot-field" 

              onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label className="block font-bold mb-2 text-xs uppercase">
              Your name:<br />
              <input 
              className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            
              placeholder="Elizabeth Lemon"
              type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label className="block font-bold mb-2 text-xs uppercase">
              Your email:<br />
              <input type="email" 
              className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            
              placeholder="tatertotfreak@hotmail.com"
              name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label className="block font-bold mb-2 text-xs uppercase">
              Message:<br />
              <textarea 
              className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            
              placeholder="Do you want to go to that popcorn place?"
              name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button 
            className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white"
            type="submit">Send</button>
          </p>
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
  }
}