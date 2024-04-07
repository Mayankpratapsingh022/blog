'use client'

import Footer from "../component/footer";
import Heading from "../component/heading";
import Navbar from "../navbar/page";

export default function Fundamentals(){
    return(
        <>
      <Navbar activeStep={3} previousStep="Real" nextStep=""/>
      <div className="bg-zinc-50 w-full h-full flex justify-center  py-10 px-5 lg:px-10  ">
      <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">

      <p className="text-3xl font-Medium">Fundamental Concepts of Probability & Statistics</p>
 <br></br>
<h1>Let's break down each concept</h1>
 <Heading text="Probability Distribution" />


<Footer showPrevious={true} flexing="justify-between" previousPage="Real" nextPage="" />


      </div>



      </div>
        </>
    )
}