import React from "react";
import Link from "gatsby-link";

import homeeApp from "../images/homee-cover.png";
import existingApp from "../images/existing-app.png";
import existingApp2 from "../images/existing-app-2.png";
import homeeCA from "../images/homee-ca.png";
import homeeBill from "../images/david-siglin-87978-unsplash-1.jpg";
import homeeMatt from "../images/matt.jpg";
import homeeSketch from "../images/sketchStudio.png";
import homeeUsabilityTesting from "../images/usabilityTesting.png";
import homeePrototypeImage from "../images/prototypeImage.png";

const HomeePage = () => (
<div>
    <div className="flex flex-col md:flex-row items-center bg-homee px-1 pt-5"> 
        <div className="md:w-2/3 sm:w-3/3 text-center">
            <img src={homeeApp} className="app"/>
        </div>
        <div className="md:w-2/3 sm:w-3/3">
            <h1 className="inline-block text-white">Homee + Insurance</h1>
            <p className="text-white">Adding insurance to the Homee app.</p>
        </div>
    </div>

    <div className="flex flex-col md:flex-row px-1 pt-5"> 
        <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">0 - Project Overview</h3>
        </section>
        <section className="md:w-2/3 px-1 pt-5 ">
            <h3>Project Details</h3>
            <p><strong>Timeline: </strong> 3 Weeks</p>
            <p><strong>Teammates: </strong> Tom, Peter, Jason</p>
            <p><strong>My Roles: </strong> Project Manager</p>
            <h3>Problem Statement</h3>
            <p>Users of the Homee app need general liability insurance (GLI).</p>
            <h3>Solution Statement</h3>
            <p>Create entry points in the Homee app where users can purchase GLI.</p>
        </section>
    </div>

    <div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
        <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">1 - Research</h3>
        </section>

        <section className="md:w-2/3 px-1 pt-5 ">
            <h3>Meeting the Client</h3>
            <p>We started by meeting our client, a national insurance company. We asked our questions and they generously provided us with numerous materials. After the introduction ended, we got to work.</p>
            <h3>The Homee app</h3>
            <p>We studied the Homee app to look for points of entry. We quickly identified the sign-up flow as a potential set of entry points.</p>
            <img src={existingApp} />
            <img src={existingApp2} />
            <h6>Homee's original sign-up screens</h6>
            <h3>Competitive Analysis</h3>
            <p>Jason worked on a comprehensive competitive analysis. He found that most home service provider apps did not mention insurance, that many of the apps strove to create a sense of community, and that they wanted purchasing insurance to be approachable.</p>
            <img src={homeeCA} />
            <h6>Our competitive analysis.</h6>
        </section>
    </div>

    <div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
        <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">2 - User Research + Personas</h3>
        </section>

        <section className="md:w-2/3 px-1 pt-5 ">
            <h3>User Research</h3>
            <p>While Jason was investigating the app and its competitors, Tom, Peter, and I reached out to potential users for interviews. We found a few key similarities and put together the personas.</p>

            <h3>Bill</h3>
            <img src={homeeBill} className="medium"/>
            <h6>Bill! Photo by <a href="https://unsplash.com/@dsiglin">David Siglin</a> on Unsplash</h6>
            <p>Bill is a 62 year old handyman who has been in the game for forty years. He learned how to fix things when he was a boy and after a stint at community college, he followed his passion and established Sullivan and Sons. He did not actually have a son at the time, but he thought it made him sound older and more experienced. </p>    
            <p>Times have changed for Bill. He and his wife had four children and after finally paying off their college tuition, Bill is looking forward to a relaxed semi-retirement. Since he wants to continue working but no longer wants to put in the effort to market himself, he has decided to join the Homee app.</p>
            <p>When it comes to insurance, Bill's not only got *a* guy, Bill's got *the* guy. They've been friends for fifty years and since their kids were little, their families have gone on a yearly vacation to New Hampshire. Now that the kids are older, Bill, Dave, Mary, and Karen get together more frequently for weekend trips and Saturday nights at the local wine bar. </p>
            <p>Because Bill is so close with Dave, he would never seek out a new agent. Even if you presented him with savings of five hundred dollars, he would always put friendship first. When Bill signs up to the Homee app, he wants to simply import his existing insurance and manage it from the app.</p>

            <img src={homeeMatt} className="medium"/>
            <h6>Matt! Photo by <a href="https://unsplash.com/@masonauguste">Mason Wilkes</a> on Unsplash</h6>
            <h3>Matt</h3>
            <p>Matt is a 30-year-old plumber who also has skills as a general handyman. </p>
            <p>For the past few years, Matt has been apprenticing for his boss, Bill. Now that Bill is reducing his workload, Matt has decided to launch his own business. Because Matt has skills and wants to keep his costs down, he decides to advertise in the local paper as well as sign up for the Homee app. 
            </p>
            <p>Matt has never had to think about insurance, but he talked to Bill and got some suggestions for numbers. Matt wants to keep his costs down and does not care who his agent is. Matt also would like to do this quickly and without making any phone calls if possible. The faster the better and price is his only concern.</p>
            <p>Matt wants to use the Homee app as a one-stop shop for all his business needs. He wants to obtain insurance as well as to manage it, all in-app.</p>
        </section>
    </div>



    <div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
        <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">3 - Designing and Iterating</h3>
        </section>
    
        <section className="md:w-2/3 px-1 pt-5 ">
            <h3>Sketch Studio</h3>
            <p>After splitting for the competitive analysis and user research, we came back together for a sketch studio. We generated sketches individually and then synthesized them as a team.</p>
            <img src={homeeSketch} />
            <h6>We wanted a quote flow and a management flow.</h6>

            <h3>Usability Testing</h3>
            <p>We brought our low and medium fidelity wireframes out for testing. The primary paiin point was with the social security number requirement. Most users balked at the requirement, so for an iteration, we removed the prompt from the flow. It was required in the existing app, but we were losing focus during testing.</p>
            <img src={homeeUsabilityTesting} />
            <h6>We wanted a quote flow and a management flow.</h6>
        </section>
    </div>

    <div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
        <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">4 - The Prototype and Next Steps</h3>
        </section>
    
        <section className="md:w-2/3 px-1 pt-5 ">
            <h3>The Digital Prototype</h3>
            <img src={homeePrototypeImage} />
            <h6>Our quote flow.</h6>
            <p><a href="https://invis.io/E4NJUVG8HMF" target="new">Digital Prototype</a></p>
            <h3>Next Steps</h3>
            <p>After presenting our quote flow, we received feedback on the wording of the app's relationship with the insurance. In future iterations, we would adjust the language for real-world accuracy.</p>
        </section>
    </div>
</div>
);

export default HomeePage;
