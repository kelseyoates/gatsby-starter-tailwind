import React from "react";
import oprah from "../images/oprah.gif";

const ThanksPage = () => (

<div className=" flex flex-wrap">
  <div className="sm:w-1/1 md:w-1/2 px-4 text-center">
    <img src={oprah} />
    </div>
    <div className="sm:w-1/1 md:w-1/2 px-4">
    <h2>
      And you get a confirmation message! And you get a confirmation message! And you get a confirmation message!
    </h2>
    <h3>But seriously, your message has gone through and I will get back to you as soon as possible. Thanks!</h3>
    </div>
  </div>
);

export default ThanksPage;
