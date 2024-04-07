'use client'

import Footer from "../component/footer"
import Heading from "../component/heading"
import LottiePlayer from "../component/Lottieplayer"
import Navbar from "../component/navbar"

export default function Real(){
    return(
        <>
        <Navbar activeStep={2} previousStep="introduction" nextStep="fundamental"/>
        <div className="bg-zinc-50 w-full h-full flex justify-center  py-10 px-5 lg:px-10  ">
        <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">

        <p className="text-3xl  font-Medium">Real Life Examples &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
 <br></br>
<p>In various aspects of life, from planning our day to making significant financial decisions, the ability to predict future events plays a crucial role. Weather forecasters analyze past weather patterns to predict whether it will rain tomorrow, helping us prepare accordingly. In sports, coaches use players' past performance data to strategize for future games, enhancing their chances of winning. Similarly, in the stock market, investors analyze past stock performance to make informed decisions about which companies to invest in. Probability and statistics underpin these predictions, enabling us to make better-informed guesses about future outcomes based on past data.</p>


<div className="w-full flex flex-col items-center justify-center py-8 my-5">
  
<Heading text="Weather Forecasting"/>

<div className=" bg-zinc-100 flex  w-full flex-col  gap-4   items-center
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 <div className="w-full lg:w-5/6 flex flex-col gap-2 ">



    <LottiePlayer src='weather.lottie'/>
  </div>



</div>
<p className="py-5">Imagine you're trying to guess if it will rain tomorrow. Weather forecasters use lots of data, like how many times it rained in the past, to make a good guess. They use this information to tell us if we should bring an umbrella or wear a coat.</p>
</div>
<Heading text="Sports Predictions"/>
<div className="w-full flex flex-col items-center justify-center py-8 my-5">
  


<div className=" bg-zinc-100 flex  w-full flex-col  gap-4   items-center
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 <div className="w-full lg:w-5/6 flex flex-col gap-2 ">



    <LottiePlayer src='tennis.lottie'/>
  </div>



</div>
<p className="py-5">Think about a table tennis match. We can use statistics, like how many points a player has scored before, to guess how they might play in the future. This helps coaches decide who should play and how they should play.</p>
</div>


<div className="w-full flex flex-col items-center justify-center py-8 my-5">
  
<Heading text="Stock Market Analysis"/>


<div className=" bg-zinc-100 flex  w-full flex-col  gap-4  items-center
  rounded-lg p-4 shadow-sm shadow-indigo-100 ">
 <div className="w-full lg:w-5/6 flex flex-col gap-2 ">


    <LottiePlayer src='stock.lottie'/>
  </div>



</div>
<p className="py-5">Let's say you have some money to invest in the stock market. People use statistics to look at how a company has done in the past to guess how it might do in the future. This helps them decide which companies to invest in.</p>
</div>


<b className="font-semibold ">In all these examples, probability and statistics help us make better guesses about what might happen in the future based on what has happened in the past.</b>
<br></br>

<Footer showPrevious={true} flexing="justify-between" previousPage="introduction" nextPage="fundamental" />
        </div>




        </div>
        </>
    )
}