import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
<<<<<<< HEAD
import logo from "../images/ko-logo.png";
=======
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
import "./index.css";

const TemplateWrapper = ({ children }) => (

  
<<<<<<< HEAD
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest bg-light-pink">
=======
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
    <Helmet
      title="K/O - UX Designer and Writer"
      meta={[
        { name: "description", content: "UX designer from Boston, MA, communications for small businesses, one-on-one technology and computer help for senior citizens" },
        { name: "keywords", content: "UX, user experience, communications, design, Canton, Sharon, Stoughton, Norwood, senior citizens, computer help, special needs" }
      ]}
<<<<<<< HEAD
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
    ]}
=======
>>>>>>> f9b44063bbbbc2923d36d3de1c7b1e3d3f0f97bf
    />
    <Header />
    <div className="flex flex-col flex-1 mx-auto w-full">
      {children()}
    </div>

    <Footer />


  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
