import React from "react";
import Link from "gatsby-link";

import bsoapp from "../images/bso-app.png";
import bsoresearch from "../images/research.png";
import bsocompetitive from "../images/competitive-analysis.png";
import bsouserresearch from "../images/user-research-overview.png";
import bsoaffinity from "../images/user-research-affinity.png";
import bsorishi from "../images/melody-jacob-634668-unsplash.jpg";
import bsonaomi from "../images/kyle-loftus-597219-unsplash.jpg";
import bsotest from "../images/bsotest.png";
import bsouserflows from "../images/user-flows.png";
import bsoappmap from "../images/app-map.png";
import bsotickets from "../images/tickets-300.gif";
import bsodiscover from "../images/discover-300.gif";

const BSOPage = () => (
  <div>
  <div className="flex flex-col md:flex-row bg-bso items-center pl-5"> 
  <div className="md:w-2/3">
    <h1 className="inline-block">
      Boston Symphony Orchestra
    </h1>
    <p>
    A concept project to attract millennials to the BSO via their mobile app.
    </p>

 

</div>

<div className="md:w-1/">
  <img src={bsoapp} className="app"/>
</div>


</div>


<div className="flex flex-col md:flex-row px-8"> 


   <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      0 - Project Overview
    </h3>
    </card>

   <card className="md:w-2/3">
 


        <h3>Project Details</h3>
        <p>
   <strong>Timeline: </strong> 2 Weeks
    </p>
    <p>
    <strong>Teammates: </strong> Mary and Peter 
    </p>
    <p>
    <strong>My Roles: </strong>IA, UX Writing
    </p>


        <h3>Problem Statement</h3>
        <p>The BSO audience is getting older and the BSO is having trouble attracting a younger one.</p>

          <h3>Solution Statement</h3>
  <p>
  Create new functionality in the existing app to show millennials how classical music is relevant to their lives today.</p>
    </card>


</div>



<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      1 - Client Research
    </h3>
    </card>

   <card className="md:w-2/3">
   <h3>The BSO App</h3>
   <p>
   The first thing we did was look at the BSO app's existing app.
     </p>

    <p>While the app had "tickets" prominently displayed, we could not intuit where their youth ticket programs were. We eventually found these programs under "special offers".</p>
    <p>Additionally, we noticed that the concerts that were listed did not yet have tickets for sale. This inhibited our ability to understand their full ticketing process. There was also no way of being notified of tickets going on sale. The user would have to mark it on their own calendars and return to the app on that day.</p>
    <img src={bsoresearch} />
<h6>The relevant BSO app screens.</h6>

    <h3>Competitive Analysis</h3>
   <p>
   After looking specifically at the BSO's app, I tried to view other apps for a competitive analysis. Quickly, though, I realized that all of these apps were the same.</p>
    <p>I discovered that there was one company that had made apps for seemingly all of the theaters, museums, and aquariums in America. In order to gain inspiration, we ended up looking towards apps like Spotify and SoundCloud.</p>
    <img src={bsocompetitive} />
    <h6>Our competitive analysis.</h6>
</card>

</div>


<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      2 - User Research
    </h3>
    </card>

 
<card className="w-1/3 md:w-2/3">
<h3>User Research</h3>
<p>Once we had a better understanding of the BSO and what its existing offers were, we started on user research.</p>
 <img src={bsouserresearch} />
 <h6>Our user research overview.</h6>

 <h3>Affinity Mapping</h3>
<p>After working separately, we came back together to synthesize and create starter personas. I continued work on the personas over the weekend.</p>
 <img src={bsoaffinity} />
 <h6>Our user research affinity map.</h6>
</card>


</div>



<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      3 - Personas
    </h3>
  
</card>
  
   <card className="w-1/3 md:w-2/3">
    <img src={bsorishi} className="medium" />
    <h6>Photo by <a href="https://unsplash.com/@melodyjacob1">Melody Jacob</a> on Unsplash</h6>
    

   <h3>Rishi</h3>
   <p>
      <strong>Age: </strong> 
  28
       </p>
  <p>
      <strong>Resides: </strong> 
  Cambridge
       </p>

         <p>
      <strong> Occupation: </strong> 
      PhD student at MIT, neurochemistry.
       </p>
     <p>
      <strong> Ideal Saturday night: </strong> 
      Going out with friends.
       </p>
          <p>
      <strong>Typical Weekend: </strong> 
      Rishi likes to hit the gym early Saturday morning and is sure to be at the dog park with her dog Rufus by noon. Rufus has a girlfriend there, so he worries if he's not on time. Typical Husky. 
       </p>
   <p>
   Every Saturday afternoon, Rishi plans to get her laundry and errands done, but she usually ends up watching TV for the afternoon. Depending on what her friends are up to, she might grab dinner with them or see a show. She loves seeing live performances, but with her schedule it can be hard to make time. She also likes to get back at a reasonable hour for Rufus.
       </p>
   <p>
      <strong>Relationship with the BSO: </strong> 
      Since Rishi is so busy, she doesn't like to stay out too late or drink too much. She's also in a lab coat most days, so getting dressed up for a special event would be a great way for her to spend a Saturday.
       </p>
   <p>
      <strong>Musical Background: </strong> 
      Rishi was trained in classical piano, but hasn't played since finishing high school. She continues to appreciate a variety of music and loves going to shows with or without friends. She can talk as much about the instrumentation of To Pimp a Butterfly as she can about Katy Perry's mid-aughts transformation.
       </p>
          <p>
      <strong>Fun Fact: </strong> 
      Rishi had her heart set on a French bulldog, but saw Rufus at the shelter and couldn't say no. She worried that her apartment would be too small for him, but since she likes to get up early and run, it's been working out perfectly. 
       </p>
                 <p>
      <strong>Family: </strong> 
      Rishie has three little sisters who she loves very much but who also tremendously annoy her. Her mom is a professor of mathematics at UCLA and her dad is a cardiologist. They were sad to see her move to Boston, but are also excited to see her accomplishing her goals. But they still hope she'll move back to California one day. Boston's way too cold.
       </p>
    <p>
      <strong>Favorite Concerts: </strong> 
      Kendrick Lamar, Florence and The Machine, Taylor Swift, Beyonce, and Miranda Lambert (her friend dragged her there, but she actually really enjoyed it).
       </p>
    <p>
      <strong>Celebrity Who Would Play Me In A Movie: </strong> 
      Lupita Nyong'o.
       </p>
   <p>
      <strong>Favorite TV Show: </strong> 
      Westworld.
       </p>
       <p>
      <strong>Favorite Movie: </strong> 
      Black Panther.
       </p>
      <p>
      <strong>Motto: </strong> 
      "Go away I'm studying."  Also, "If it doesn't challenge you, it doesn't change you."
       </p>
    <p>
      <strong>Life goal: </strong> 
      To cure debilitating diseases like Alzheimer's.
      </p>

<img src={bsonaomi} className="medium" />
<h6>Photo by <a href="https://unsplash.com/@kalvisuals">Kyle Loftus</a> on Unsplash</h6>
<h3>Naomi</h3>
<p>Once we had a better understanding of the BSO and what its existing offers were, we started on user research.</p>
    <p>
      <strong>Age: </strong> 
      30
       </p>
    <p>
      <strong>Resides: </strong> 
      Boston.
       </p>
         <p>
      <strong> Occupation: </strong> 
      Hostess, Yoga Instructor
       </p>
     <p>
      <strong> Ideal Saturday night: </strong> 
      Exploring the city with friends.
       </p>
          <p>
      <strong>Typical Weekend: </strong> 
      Naomi has to be up early to teach her 8am and 9am yoga classes. After that she takes a nap before her 12pm yoga class. Once she's done with her classes, Naoimi likes to get out and do stuff.
       </p>
   <p>
   Naomi's a recent transplant from New York, so she's enjoying learning about all Boston has to offer. She likes to stick with free events during the day, saving her money for concerts at night. For shows, she prefers small venues where she can really hear and enjoy the music and take in the experience. 
       </p>
<p>Her friends have a wide variety of musical tastes, so she's been to a lot of different concerts. The music is not as important to her as the experience. If it's a cool place with good friends, she's all set.</p>
   <p>
      <strong>Relationship with the BSO: </strong> 
      Naoimi isn't familiar with the BSO, but she'd be willing to check it out.
       </p>
   <p>
      <strong>Musical Background: </strong> 
      Naomi has taken a few guitar lessons and sang in the chorus in high school, but hasn't done any training beyond that.
       </p>
          <p>
      <strong>Fun Fact: </strong> 
      Naomi once taught yoga to Kelly Ripa. She said she was very polite and was a good student. Naomi could not believe how tiny Kelly was. 
       </p>
                 <p>
      <strong>Family: </strong> 
      Naomi grew up with a single mom and they are super close. Her mom is an art teacher for the New York City public school system and raised Naomi to be kind and caring. Naomi has no siblings, but is very close to a few of her cousins.
       </p>
    <p>
      <strong>Favorite Concerts: </strong> 
      Lizzo, Sheer Mag, Hinds, Goldfrapp, Beyonce.
       </p>
    <p>
      <strong>Celebrity Who Would Play Me In A Movie: </strong> 
      Zoe Kravitz
       </p>
   <p>
      <strong>Favorite TV Show: </strong> 
      Grey's Anatomy.
       </p>
       <p>
      <strong>Favorite Movie: </strong> 
      The Heat.
       </p>
      <p>
      <strong>Motto: </strong> 
      "People won't remember what you said, they won't remember what you did, but they'll remember how you made them feel." - Maya Angelou       </p>
    <p>
      <strong>Life goal: </strong> 
      To live life to the fullest and be grateful for every moment.
      </p>

</card>

</div>




<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      4 - Developing the Design
    </h3>
    </card>

 
<card className="w-1/3 md:w-2/3">
<h3>Sketching and Wireframes</h3>
   <p>
   To kick off the design part of our process, we ran a sketch studio. My teammates and I each would sketch for a minute or two and then talk about the results. We did this for several rounds until we had a more comprehensive set of sketches.
    </p>
    <p>While I was working on personas, my teammate Mary created the paper prototype, with my teammate Peter then bringing that prototype to life in Sketch.</p>

    <h3>Usability Testing</h3>
   <p>
   After sketching and creating wireframes, we started with usability testing. I wrote a simple test script and we each conducted a usability test. We collected our feedback on one page for easy synthesis.
    </p>
 <img src={bsotest} />
 <h6>Our user testing script.</h6>
</card>


</div>



<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      5 - Iterating
    </h3>
    </card>

 
<card className="w-1/3 md:w-2/3">
<h3>Clarifying the Flows</h3>
   <p>
   We quickly iterated to address the major concerns, which were:
    <br/>
- unsure of how the new feature worked  <br/>
- confused by the navigation  <br/>
- unsure of what 20 under 40 was  
    </p>
    <p>To address these concerns, we did the following:<br/>

- revised the copy for clarity<br/>
- improved the ticketing process navigation by highlighting current month and adding a headline label<br/>
- removed unnecessary steps in the user flows</p>
<p>As my teammates worked on the Sketch files, I used our work to create user flows and an app map.</p>

   <h3>User Flows and App Map</h3>
   <p>
   After sketching and creating wireframes, we started with usability testing. I wrote a simple test script and we each conducted a usability test. We collected our feedback on one page for easy synthesis.
    </p>
 <img src={bsouserflows} />
 <h6>Our user flows.</h6>
 <img src={bsoappmap} />
 <h6>The app map for "Tickets and Events" and "Listen and Learn".</h6>
</card>


</div>






<div className="flex flex-col md:flex-row items-top px-8"> 
    <card className="w-1/3 md:w-1/3">
    <h3 className="inline-block">
      6 - The Prototype
    </h3>
    </card>

 
<card className="w-1/3 md:w-2/3">
<h3>A Clickable Prototype</h3>
   <p>
   Our two-weeks up, my teammates put the final touches on the prototype while I worked on our presentation.<br/>
- unsure of how the new feature worked  <br/>
- confused by the navigation  <br/>
- unsure of what 20 under 40 was  
    </p>

   <h3>Listen and Learn</h3>
   <img src={bsodiscover} />


    <h3>Tickets and Events</h3>
    <img src={bsotickets} />


</card>

</div>



  </div>
);

export default BSOPage;
