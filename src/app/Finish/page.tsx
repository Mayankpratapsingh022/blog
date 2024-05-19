import Link from "next/link";
import RIveRunner from "../component/activity1";
import Footer from "../component/footer";
import Heading from "../component/heading";
import LottiePlayer from "../component/Lottieplayer";
import introduction from "../introduction/page";

export default function Finish(){
    return(
        <>
                <div className="bg-zinc-50 w-full h-full flex justify-center items-center flex-col  py-10 px-5 lg:px-10  ">
      <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">
      <Heading text="Conclusion" />
    <div className=" flex justify-center items-center w-full p-5 flex-col bg-gray-100"> <RIveRunner src="card.riv" cs='w-72 h-72' stateMachineName="State Machine 1"/>
    <p>
In conclusion, statistics and probability are powerful tools that help us understand and interpret data in our everyday lives. By learning about concepts such as mean, median, mode, variance, standard deviation, and correlation, we can make informed decisions, draw meaningful conclusions, and gain valuable insights into the world around us. So, let's embrace the world of statistics and probability, and unlock the mysteries hidden within our data. </p>
<Heading text="Do you liked this blog ?" />
<RIveRunner src="rating.riv" cs='w-full h-32' stateMachineName="State Machine 1"/>
<p><b>Congratulations </b>on Completing Your Statistical Journey!</p>
    </div>

<Link href='/'>
<div className="flex justify-end w-full p-10">
        <div className="rounded-2xl border-2 border-dashed border-black bg-green-300 px-6 py-3 font-semibold uppercase text-black transition-all text-center duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Finish

        </div>
        </div>

      </Link>

      </div>

        </div>
        
        </>
    )
}