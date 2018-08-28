import React from "react";
import Link from "gatsby-link";

import mapapp from "../images/map.png";
import mapaffinity from "../images/affinity-map-map.png";
import mapfeatures from "../images/feature-prioritization-map.png";
import map1 from "../images/1-map.png";
import map2 from "../images/6-map.png";
import map3 from "../images/8-map.png";
import map4 from "../images/2-map.png";
import map5 from "../images/3-map.png";
import map6 from "../images/5-map.png";
import mapgif from "../images/map.gif";


const MAPPage = () => (
    <div>
        <div className="flex flex-col md:flex-row items-center bg-map px-8 pt-5"> 
            <div className="md:w-2/3 sm:w-3/3 text-center">
                <img src={mapapp} className="app"/>
            </div>
            <div className="md:w-2/3 sm:w-3/3">
                <h1 className="inline-block">
                Medication Administration Program
                </h1>
                <p>
                A concept project to explore a digital solution for the MAP protocol.
                </p>
            </div>
        </div>


        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
                0 - Project Overview
                </h3>
                </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
 
      <h3>Map and Me</h3>
      <p>
      One of my most rewarding jobs was working in a group home for older adults who had special needs. Every night and morning, one of the staffers would administer medication to the four clients.
  </p>
  <p>
  In order to do this, we had to get MAP-certified and follow an exact protocol every time we administered meds. This protocol would ensure patient-safety and client dignity.    </p>
  <p>
  When I had the opportunity to tackle a project for my General Assembly pre-work, I remembered my time passing meds and opted to create a digital solution for MAP.</p>

        <h3>Problem Statement</h3>
        <p>MAP is time-consuming and subject to human error. The documentation is currently done through pen and paper.</p>
        <h3>Solution Statement</h3>
  <p>
  I designed a MAP-compliant mobile app for direct care staffers to use when administering medication.</p>
  </section>


</div>






<div className="flex flex-col md:flex-row items-top px-1 pt-5 "> 
    <section className="w-1/3 md:w-1/3 px-1 pt-5">
    <h3 className="small">
      1 -  Research
    </h3>
    </section>

   <section className="w-1/3 md:w-2/3 px-1 pt-5 font-light">

   <h3>Reviewing MAP</h3>
   <p>
   I started my project by reviewing the MAP protocol. My first task was to see if there was a digital solution already out there. Once I determined that there was no existing digital solution, I reviewed the MAP guidelines and regulations.  </p>

    <p>The best research tool for me was <a href="https://www.youtube.com/embed/cvIn2hNMUnE">this demonstration video</a> of a med pass.</p>
    <h3>User Research</h3>
   <p>
   After reviewing MAP, I interviewed two current MAP users. I asked them about their experiences with MAP and what they would like to see in a digital version. I then took their feedback and created an affinity map.</p>

     <img src={mapaffinity} />
    <h6>The affinity map.</h6>

      <h3>Feature Prioritization</h3>
   <p>
   After reviewing the user feedback, I thought about what features might address their concerns. I then created a feature prioritization matrix to figure out my priorities.</p>

      <p>Based on my user research and the subsequent analysis, I decided to focus on three primary issues: <br/>
1. security and patient safety<br/>

2. users getting distracted during the med pass<br/>

3. ease of use for a wide range of staffers</p>
<img src={mapfeatures} />
    <h6>The feature prioritization matrix.</h6>

</section>

</div>




<div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
    <section className="w-1/3 md:w-1/3 px-1 pt-5">
    <h3 className="small">
      2 - Sketching
    </h3>
    </section>

 
<section className="w-1/3 md:w-2/3 px-1 pt-5 font-light">
<h3>Translating MAP into an App</h3>
<p>Since MAP is a protocol, I was trying to very literally interpret those steps into digital ones. But within those screens, I was also trying to address the aforementioned user concers.</p>
<p>Here's how I thought about and interpreted the primary three concerns.</p>
<h3>1. Security</h3>
<p>When I initially thought about app security, I had a few rules.<br/>

1. Keep things easy. No complicated passwords, no hard to type symbols.<br/>

2. Any secondary code must be easy to receive and be read on any device.<br/>

3. Each session must require a new passcode.</p>
<p>In order to address this, I added a two-factor authentication solution. The user selects her name and she receives a 5-digit number code on her phone. She enters it in and she's ready to start the med pass.</p>

<img src={map1} />
    <h6>A friendly two-factor authentication screen.</h6>


<h3>2. Keep Users Engaged</h3>
<p>To keep users engaged, I created multiple ways of answering the same question. I would keep the number of patterns low, so that users can be comfortable with what they're doing but not overly automated.</p>
<img src={map2} />
    <h6>Here the user taps to select the right answers. It's familiar and forgiving.</h6>

<img src={map3} />
    <h6>Instead of repeating the first pattern, the next check uses a drag and drop activity.</h6>



<h3>3. Keeping the Client First</h3>
<p>One of the most important aspects of MAP is that it keeps the client front-and-center. Not only does this reduce potential errors, but it helps to preserve the client's dignity.</p>

<p>In order to do this, I put the client face and name on the screen in front of the user. I wanted users to remember not only who they were passing meds to, but why it was so important they pay attention.</p>

<p>For certain screens, the user are not allowed this "hint", which is why the user name and image is not on the screens for the main checks.</p>


<img src={map4} />
    <h6>Staffers must select a client before doing anything else.</h6>


<img src={map5} />
    <h6>With a high staff turnover rate, images can help reinforce client dignity.</h6>


<img src={map6} />
    <h6>The client's image and name stays in the corner, with the exception of the check screens.</h6>


</section>



</div>



<div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
    <section className="w-1/3 md:w-1/3 px-1 pt-5">
    <h3 className="small">
      3 - The Prototype
    </h3>
  
    </section>
  
   <section className="w-1/3 md:w-2/3 px-1 pt-5 font-light">

   <h3>Skipping Ahead</h3>
   <p>As this was a one week project focused on decision-making, I went from sketching to high-fidelity wire frames using Sketch. I then turned these wireframes into a prototype using InVision.</p>

         <p>I recently went back and cleaned up the screens a bit, but this is it.</p>
         <img src={mapgif} />
    </section>
</div>



<div className="flex flex-col md:flex-row items-top px-1 pt-5"> 
    <section className="w-1/3 md:w-1/3 px-1 pt-5 ">
    <h3 className="small">
      4 - Next Steps
    </h3>
  
    </section>
  
   <section className="w-1/3 md:w-2/3 px-1 pt-5 font-light">

<h3>User Research</h3>
<p>First, I would employ more user research . For example, I was very guided by my own experience in this process. In the future, I'd want to explore other situations in which MAP is used. For example, what about day programs where dozens of clients might be receiving medication? Also, how would the MAP App handle liquid medication? Injections?</p>

   <h3>User Testing</h3>
   <p>After more user research and more iterations, I could begin proper user testing. I would probably go back to a paper prototype and start putting it in front of users. Then I could iterate just on sketches, until I felt I could move onto wireframes.</p>
   <h3>Talk to Stakeholders</h3>
   <p>And of course for a project like this, I would have to work with the stakeholders - aka the Massachusetts departments of Mental Health, Children and Family Services, and Developmental Services. So there would be a substantial amount of work before further pursuing this on a professional level. Still, I enjoyed getting to explore this issue in an academic setting and hopefully I'll be able to work on it at a higher level further down the road.</p>
 
     
    </section>


</div>



  </div>
);

export default MAPPage;
