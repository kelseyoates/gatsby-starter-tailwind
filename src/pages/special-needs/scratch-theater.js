import React from "react";
import Link from "gatsby-link";

import scratchCover from "../../images/Scratch-Theater.png";
import zParty from "../../images/the-z-party.png";
import katie from "../../images/everybody-loves-katie.png";
import zoo from "../../images/lifes-a-zoo.png";
import fighters from "../../images/the-fighters.png";
import techiya2 from "../../images/techiya-my-world-2-0.png";
import soccer from "../../images/the-soccer-game.png";
import dojo from "../../images/the-dojo.png";

import beiberCanada from "../../images/beiber-saves-canada.png";
import techiyaWorld from "../../images/techiya-saves-the-world.png";
import tea from "../../images/the-best-tea-party.png";
import prom from "../../images/the-prom-party.png";

import babes from "../../images/babes-on-farms.png";
import mercury from "../../images/mercurys-messengers.png";
import deadline from "../../images/the-deadline.png";
import hungry from "../../images/the-hungry-games.png";
import debate from "../../images/the-debate.png";



const ScratchPage = () => (
  <div>


<div className="py-8 flex flex-wrap bg-primary items-center text-center bg-primary text-white">
  <div className="sm:w-1/1 md:w-1/2">
    <h1 className="text-white">
      Scratch Theater
    </h1>
    <p className="text-white">
    Read online for free or purchase to download.
    </p>

</div>

 <div className="sm:w-1/1 md:w-1/2">
  <img src={scratchCover} className="top"/>
</div>


</div>

        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Details
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 ">
 

        <h3>Description</h3>
        <p>Scratch Theater was a theater group for adolescents with special needs. I ran classes, workshops, and wrote plays specifically for the actors participating in the program. </p>

          <h3>Purchase to Download</h3>
        <p>Buy the anthology and you'll receive the downloadable ebook with all of the plays.</p>

           <a href="https://gum.co/OQnT" target="blank" className="no-underline "><button>Buy the  Anthology</button></a>

    </section>


</div>




        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Short Plays
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 ">
   
<div className="flex flex-wrap">

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays text-center">
      <img src={zParty} />
      <h3>The Z-Party</h3>
      <p>Come to the Z-Party! A totally normal, not full of zombies party that you should definitely come to.</p>
      <Link to="/special-needs/scratch-theater/the-z-party" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={katie}/>
      <h3>Everybody Loves Katie</h3>
      <p>A play written for my cousin, the eponymous Katie, for her birthday.</p>
      <Link to="/special-needs/scratch-theater/everybody-loves-katie" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


 <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={zoo} />
      <h3>Life's a Zoo</h3>
      <p>Filming an animated movie about zoo animals can be tricky - especially when your nemeses arrive. </p>
      <Link to="/special-needs/scratch-theater/lifes-a-zoo" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={fighters}/>
      <h3>The Fighters</h3>
      <p>2 fighters. 1 ring. Who will win?</p>
      <Link to="/special-needs/scratch-theater/the-fighters" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


 <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={techiya2} />
      <h3>Techiya My World 2.0</h3>
      <p>International singing sensation Techiya must choose between her many suitors before a big concert.</p>
      <Link to="/special-needs/scratch-theater/techiya-my-world-2-0" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={soccer}/>
      <h3>The Soccer Game</h3>
      <p>When Faye and her friends set out to play a soccer game, mayhem ensues and she must save her friends' lives.</p>
      <Link to="/special-needs/scratch-theater/the-soccer-game" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={dojo}/>
      <h3>The Dojo</h3>
      <p>When some hooligans interrupt their karate practice, Faye must defend her friends and save the day.</p>
      <Link to="/special-needs/scratch-theater/the-dojo" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>


  </div>

</section>
</div>


        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Medium-Length Plays
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 ">
   
<div className="flex flex-wrap">
  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={beiberCanada}/>
      <h3>Beiber Saves Canada</h3>
      <p>An attack on Canada. A concert in front of millions. What's a Canadian pop star to do?</p>
      <Link to="/special-needs/scratch-theater/beiber-saves-canada" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={techiyaWorld} />
      <h3>Techiya Saves The World</h3>
      <p>When an evil dictator threatens to take over the world, only one 16-year-old can save it.</p>
      <Link to="/special-needs/scratch-theater/techiya-saves-the-world" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>



  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={tea}/>
      <h3>The Best Tea Party</h3>
      <p>When a group of travelers finds themselves at the same bed and breakfast, they notice that not everything is as it seems.</p>
      <Link to="/special-needs/scratch-theater/the-best-tea-party" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={prom} />
      <h3>The Prom Party</h3>
      <p>Rival schools must attend the same prom. Fun and dancing ensues.</p>
      <Link to="/special-needs/scratch-theater/the-prom-party" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  </div>

</section>
</div>

        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Long Plays
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 ">
   
<div className="flex flex-wrap">
  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={babes}/>
      <h3>Babes on Farms</h3>
      <p>A rag-tag group of actors have to put on a show and save a farm, all in one short summer. Inspired by the Mickey and Judy films and Summer Stock.</p>
      <Link to="/special-needs/scratch-theater/babes-on-farms" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={mercury} />
      <h3>Mercury's Messengers</h3>
      <p>Two brilliant teens take the adventure of a lifetime when they get transported into their very own video game. </p>
      <Link to="/special-needs/scratch-theater/mercurys-messengers" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>




  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={deadline}/>
      <h3>The Deadline</h3>
      <p>Dorothy Dot must fight off a rival newspaperwoman to get the scoop of the day and save her career.</p>
      <Link to="/special-needs/scratch-theater/the-deadline" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

  <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={hungry} />
      <h3>The Hungry Games</h3>
      <p>A super silly spoof of The Hunger Games.</p>
      <Link to="/special-needs/scratch-theater/the-hungry-games" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>

    <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
    <div className="plays">
      <img src={debate}/>
      <h3>The Debate</h3>
      <p>A heated election. A contentious debate. Who will win and rule the great nation of Candyland?</p>
      <Link to="/special-needs/scratch-theater/the-debate" className="block md:inline-block py-3 md:mt-0 no-underline text-white">
       <button>Read</button>
      </Link>
    </div>
  </div>



  </div>

</section>
</div>




  </div>
);

export default ScratchPage;
