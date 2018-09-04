import React from "react";
import Link from "gatsby-link";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("/thanks"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (

    <div>


      <div className="flex flex-col px-1 pt-5"> 
      <h2 className="text-center hand purple">Let's talk!</h2>
      <p className="leading-loose text-center">
      The best way to get a hold of me is by filling out the contact form below 👇
      </p>
  </div>
  

<div className="flex flex-col md:flex-row px-1 pt-5"> 
        <form
          name="contact"
          className="mx-auto md:w-1/2 sm:w-2/3 xsm:w-1/1"
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

</div>


    );
  }
}



