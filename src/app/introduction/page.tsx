'use client'



import RIveRunner from "../component/activity1"
import Footer from "../component/footer"
import Heading from "../component/heading"
import LottiePlayer from "../component/Lottieplayer"
import Navbar from "../navbar/page"


export default function introduction(){

    return <>
   
    <Navbar activeStep={1} previousStep="/" nextStep="Real"/>
     <div className="bg-zinc-50 w-full h-full flex justify-center  py-10 px-5 lg:px-10  ">


<div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">

 <p className="text-3xl font-Medium">Introduction to <br></br> Probability and Statistics</p>
 <br></br>
<div className="w-full items-center justify-center">
 <div className="lg:w-5/6">
<LottiePlayer src="catdance.lottie"/>
</div>
</div>
 <p className="mt-10 text-xl"> Ayush was playing with his curious cat in a room filled with five boxes.  He has hidden his cat in one of them as part of a game. However, while Ayush was momentarily distracted, the mischievous feline managed to sneak out of the box and hide in another one. Now, Ayush was puzzled, trying to figure out which box his cat had escaped to. He knew that the probability of choosing the correct box at random was 1 out of 5, but he was determined to find his furry friend.</p>
 <div className="w-full flex flex-col items-center justify-center py-8 ">

  <Heading text="Activity "/>
   
<div className=" bg-zinc-100 flex  flex-col  w-full gap-4  border-t-8 border-zinc-900 items-center 
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 
 <div className="w-full flex flex-col gap-2 ">
  <div className="w-12 h-12 flex items-center justify-center text-zinc-900 font-medium rounded-full bg-gray-200" >
    
    1 </div>  
    <p className="font-semibold"> Can you help Ayush find his cat by picking one of the boxes?</p>
  </div>
  
  
    <div className="flex flex-wrap gap-4 justify-center ">
<RIveRunner src='box.riv' cs='w-20 h-20' stateMachineName="open"/>

<RIveRunner src='box.riv' cs='w-20 h-20' stateMachineName="open"/>

<RIveRunner src='box.riv' cs='w-20 h-20' stateMachineName="open"/>

<RIveRunner src='box.riv' cs='w-20 h-20' stateMachineName="open"/>

<RIveRunner src='cat.riv' cs='w-20 h-20' stateMachineName="State Machine 1"/>
</div>
</div>
</div>
<div className="h-50 w-50"></div>
<p className="text-zinc-900">We know that only one of these boxes contains his cat. This means that the probability of choosing the correct box, which contains the cat, is 1 out of 5.

In probability theory, the probability of an event is a number between 0 and 1 that indicates the likelihood of the event occurring. A probability of 0 means the event will not occur, while a probability of 1 means the event will definitely occur. For the scenario with Ayush's cat, the probability of choosing the box with the cat is 1 out of 5, which can be written as:
</p>
<p className="font-semibold text-center p-2">P(Choosing the correct box)= 1/5
</p>

<p>

This notation represents the probability (P) of choosing the correct box out of the total number of boxes (5).

When we have a set of possible outcomes (like the five boxes), the sum of the probabilities of all possible outcomes is always 1. This is because one of the outcomes must occur. In this case, the sum of the probabilities of choosing each of the five boxes is:
</p>
<p className="font-semibold text-center p-2">P(Choosing any box)= 1 = 1/5 + 1/5 + 1/5 + 1/5 + 1/5
</p>
<hr></hr>
<p>Now, let's think about tossing a coin. When you toss a coin, there are two possible outcomes: it can land on heads or tails. So, the probability of getting heads (or tails) is 1 out of 2, because there is only one head (or tail) side out of the two sides of the coin.</p>

<div className="w-full flex flex-col items-center justify-center py-8 my-5">
<Heading text="Activity "/>
<div className=" bg-zinc-100 flex  w-full flex-col  gap-4  border-t-8  border-zinc-900 items-center 
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 <div className="w-full flex flex-col gap-2 ">
  <div className="w-12 h-12 flex items-center justify-center text-zinc-900 font-medium rounded-full bg-gray-200" >
    
    2 </div>  
    <p className="font-semibold"> Toss a Coin, "Head" or "Tail" both has 50-50 chance</p>
  </div>
  
<RIveRunner src="toss.riv" cs='w-72 h-72' stateMachineName="toss"/>


</div>
<p className="py-5">So, probability is like a way of talking about how likely something is to happen. If there are more ways for something to happen, the probability is higher. If there are fewer ways for something to happen, the probability is lower.

Probability helps us understand how likely things are to happen. It's like guessing if it will rain or not.</p>
</div>
<hr></hr>
<p className="py-5">You are the creator of the world

just toggle the button to decide weather you want to rain on earth today or not</p>
<div className="w-full flex flex-col items-center justify-center py-8 my-5">
  
<Heading text="Activity "/>

<div className=" bg-zinc-100 flex  w-full flex-col  gap-4  border-t-8 border-zinc-900 items-center
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 <div className="w-full lg:w-5/6 flex flex-col gap-2 ">
  <div className="w-12 h-12 flex items-center justify-center text-zinc-900 font-medium rounded-full bg-gray-200" >
    
    3</div>  
    <p className="font-semibold">Control the Weather by toggling the button</p>
  </div>
  
  <RIveRunner src="weather.riv" cs='w-80 h-80' stateMachineName="State Machine 1"/>


</div>

</div>
<p>
We use probability when we play games, like guessing which color a spinner will land on. It helps us make choices based on what might happen.
<br></br>
We will learn <b>Real Life Examples</b> in the next chapter
</p>
<Footer showPrevious={false} nextPage="Real" flexing="justify-end" />
</div>

     </div>

  
  
    </>
}