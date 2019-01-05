import React from "react";
import Link from "gatsby-link";
import dog from "../images/dog.png";
import tennis from "../images/tennis.png";
import bicycle from "../images/bicycle.png";
import music from "../images/music.png";

const AboutPage = () => (
  <div>

   <div className="flex flex-col px-1 pt-a mx-auto sm:w-1/1 md:w-2/3"> 
    <h3 className="text-center">About Me</h3>
    <p className="leading-loose">
    Here's some info beyond my resume. If you'd like to know more about my work history and education, connect with me on  
      <a
          href="https://www.linkedin.com/in/kelsey-oates"
          className="font-bold no-underline"
        > LinkedIn
        </a> or <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/459919/KelseyOates_Resume.pdf" target="blank"> view and download my resume</a>.
    </p>
    
</div>


<div className="pt-5 flex flex-wrap">
  <div className="sm:w-1/2 md:w-1/2 xlg:w-1/4">
    <div className="card bg-primary">
    <img src={dog}/>
  <h3 className="text-white">Dogs</h3>
  <p className="text-left">
  I have a goldendoodle, Molly, and a cockapoo, Pepper. Molly is a model/athlete who can countersurf with the best of them. Pepper is a lovable 12-pound goofball who enjoys sunbathing and following me into the bathroom. They like each other okay.</p>

    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 xlg:w-1/4">
    <div className="card">
    <img src={music}/>
  <h3>Musical Theater</h3>
  <p className="text-left">
  Ever since seeing Godspell when I was 7, I've been hooked on musical theater. Current favorites are Natasha, Pierre, and The Great Comet of 1812 and Waitress. Favorite performers include Sutton Foster, Gavin Creel, Audra McDonald, and Kate Rockwell.</p>

    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 xlg:w-1/4">
    <div className="card">
    <img src={bicycle} />
  <h3>SoulCycle</h3>
  <p className="text-left">
  Last year SoulCycle opened a studio near my house. After initially being too intimidated to go, I went to a class and I've been going 2-3 times a week ever since. When I'm not SoulCycling, I can be found jamming out to a Peloton ride. Favorites are Cody and Jess.</p>

    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 xlg:w-1/4">
    <div className="card bg-primary">
    <img src={tennis} />
  <h3 className="text-white">Tennis</h3>
  <p className="text-left">
  I've been playing tennis since I was in the fifth grade and played first singles for my high school team. I taught for many summers and was even a certified pro for a bit. My playing style is built on scrappiness and speed. I will forever be working on my serve.</p>

    </div>
  </div>
  </div>




  </div>
);

export default AboutPage;
