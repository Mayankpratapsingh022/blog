
import LottiePlayer from "./component/Lottieplayer";
import DottedButton from "./component/button";
import Link from 'next/link';

export default function Home() {
  return (
  <>
  <div className="bg-zinc-50 w-screen h-screen flex justify-center items-center p-10">

  <div
 
  className="relative block overflow-hidden rounded-lg border border-gray-500 p-4 sm:p-6 lg:p-8 sm:w-4/6 lg:w-2/6"
>
 
<div className="p-3  w-full flex justify-center items-center"> 
<div className="lg:w-1/2">
  
<LottiePlayer src="cards.lottie"/></div>
</div>
<br></br>
<p className="text-zinc-950 text-3xl font-bold">The Game of Chance</p>
<p className="text-zinc-700 md:text-2xl sm:text-xl font-medium "> Understanding Probability and Statistics</p>
<div className="flex justify-end w-full  mt-10">
<Link href="introduction" className="w-full" >
  <DottedButton name = 'Start The Lession'/>
  </Link>
  </div>
</div>

  </div>
  
  </>
  );
}
