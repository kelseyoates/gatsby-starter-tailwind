import React from "react";
import Link from "gatsby-link";

import pen from "../../images/pen-and-ink.png";
import fourWeddings from "../../images/four-weddings-and-no-funerals.png";
import better from "../../images/better-faster-stronger.png";
import liquidBlack from "../../images/liquid-black.png";


const PenAndInkPage = () => (
  <div>


<div className="py-8 flex flex-wrap bg-primary items-center text-center">
  <div className="sm:w-1/1 md:w-1/2">
    <h1 className="text-white">
      Pen and Ink
    </h1>
    <p className="text-white">
    A writer's workshop for individuals who have special needs. 
    </p>

</div>

 <div className="sm:w-1/1 md:w-1/2">
  <img src={pen} className="top"/>
</div>


</div>



        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
                <h3 className="small">
      Details
    </h3>
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
 

        <h3>Description</h3>
        <p>Pen and Ink is a writing workship for individuals who have special needs. I've run this once so far and hope to do hold more workshops in the future. The following are stories written by the participants.</p>

    </section>

</div>




        <div className="flex flex-col md:flex-row px-1 pt-5"> 
          
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">
      Faye's Story
    </h3>
    <img src={fourWeddings} />
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
   <h3 className="small">
      Four Weddings and No Funerals
    </h3>
<p>One summer day there was a wedding on a beach and it was under a sunset. Joel asked me, Faye, to get married.</p>
<p>“Wow,” I said, “this is awesome and a romantic place to have it.”</p>
<p>Faye’s friend Victoria said, “Yes, it is. I am your maid of honor and I can’t wait.”</p>
<p>Chrissy, another friend of Faye’s and a fellow actress, added, “I can’t wait to be your bridesmaid and it is going to
be awesome.”</p>
<p>Unable to hold her excitement, Jen said, “I will do a speech for Faye.”</p>
<p>Just as my friends were congratulating me, the boys made a grand entrance.</p>
<p>Joel, James D, Ben, and Robert joined us.</p>
<p>Joel said, “Hey, James D., I can’t wait to get married to Faye and I think she is beautiful.”</p>
<p>James D said, “I love Victoria because she watches my show Big Time Rush and she likes it.”</p>
<p>Ben joined in on the conversation and added, “I think everyone will do well at this wedding because I love weddings.”</p>
<p>Joel’s soon-to-be father-
in-law Robert said, “I can’t believe my daughter is getting married to Joel.”</p>
<p>Just as we thought everything was going to be perfect,
there was a huge gang who wanted to ruin the wedding by throwing the flowers on the floor and tossing around paint bombs, but Doug put a stop to that. He said, “This wedding
is too beautiful for you to ruin. Be gone with your bad selves!”</p>
<p>Despite Doug’s strong proclamation, someone ran in and kidnapped me! I was bound and gagged, with duct tape keeping me from calling out to
my friends. Fortunately, Joel was quick to try to rescue me and shouted, “Where is my fiancee?”</p>
<p>Robert said, “I don’t know, Joel, I saw her just a minute ago.”</p>
<p>Joel cried out, “Faye, are you okay?!”</p>
<p>I managed to get the
duct tape off my mouth and shouted, “I’m okay, Joel!
And let’s invite Kelsey to the wedding while we’re at it!”</p>
<p>Needless to say, we got married and have lived happily ever after.</p>
    </section>

</div>



        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">
      Janine's Story
    </h3>
    <img src={better} />
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
 
   <h3 className="small">
      Better Faster Stronger
    </h3>
        <p>The Janinettes were down one point. Catherine was about to score for the other team. Like a cheetah, Janine pounced and stole the ball. She dribbled up the court, soared through the air, and dunked like a championship oreo eater and won the game.</p>
        <p>The team lifted Janine up
in the air while chanting her name, forever grateful that Janine had saved the day and won the championship.</p>

    </section>

</div>




        <div className="flex flex-col md:flex-row px-1 pt-5"> 
            <section className="w-1/3 md:w-1/3 px-1 pt-5">
            <h3 className="small">
      Katie's Story
    </h3>
    <img src={liquidBlack} />
    </section>

   <section className="md:w-2/3 px-1 pt-5 font-light">
   <h3 className="small">
      Liquid Black
    </h3>
        <p>Rob gets an iced coffee at the Dunkin Donuts and gets black iced coffee and he puts sugar in his black iced.</p>
        <p>Rob gets two cups of iced coffee and Rob gets three cups of coffee.</p>
        <p>After the fourth coffee, he is crazy and Rob yells at the class.</p>
        <p>He uses an alarm clock to wake up for school and Rob reads a book in school for my classmates.</p>
        <p>Fin.</p>



    </section>

</div>



  </div>
);

export default PenAndInkPage;
