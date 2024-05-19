import Footer from "../component/footer";
import Heading from "../component/heading";
import Navbar from "../component/navbar";

export default function Variance(){
    return(
        <>
        
        <Navbar activeStep={4} previousStep="fundamental" nextStep="Correlation"/>
        <div className="bg-zinc-50 w-full h-full flex justify-center items-center flex-col  py-10 px-5 lg:px-10  ">
      <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">
      <p className="text-3xl font-Medium">Understanding Variance and Standard Deviation</p>
      <Heading text="Variance" />

        <div className="p-6 bg-gray-100">

  <p className="mb-4">
    Variance is like a measure of how spread out the numbers in a group are.
  </p>
  <div className="flex justify-between items-center mb-4">
    <div className=" p-4 border rounded">
      <p className="font-semibold text-center">Numbers close together</p>
      <p className="text-center">1, 2, 3, 4, 5</p>
      <p className="text-center">Low Variance</p>
    </div>
    <div className=" p-4 border rounded">
      <p className="font-semibold text-center">Numbers far apart</p>
      <p className="text-center">1, 1, 1, 5, 9</p>
      <p className="text-center">High Variance</p>
    </div>
  </div>
  <p className="mb-4">
    Formally, variance is the average of the squared differences from the mean. It gives us an idea of how much the numbers in a group vary from the average.
  </p>
  <p className="mb-4">
    The formula to calculate variance is:
  </p>
  <div className=" p-4 border rounded mb-4">
    <p className="font-semibold text-center">
      Variance = <span className="inline-block align-middle">(Sum of (each number - mean)<sup>2</sup>)</span> / <span className="inline-block align-middle">(Number of numbers)</span>
    </p>
  </div>
  <p className="mb-4">
    This formula might look a bit complicated, but it's just a way to add up the squared differences from the mean and then divide by how many numbers there are.
  </p>

</div>
  <Heading text="Standard Deviation" />
<div className="p-6 bg-gray-100">
  <p className="mb-4">
    Standard deviation is like a measure of how spread out the numbers are in a group. If the numbers are all close together, the standard deviation is low. But if they are spread out, the standard deviation is high.
  </p>
  <p className="mb-4">
    For example, imagine you have a group of friends and you want to know how far apart they live from each other. If they all live close by, the standard deviation is low. But if they live far apart, the standard deviation is high.
  </p>
  <p className="mb-4">
    So, standard deviation helps us understand how much the numbers in a group vary from the average, just like variance. It's another way to measure the spread of numbers in a group.
  </p>
  <div className=" p-4 border rounded mb-4">
    <p className="font-semibold text-center">
      Standard Deviation = &radic;Variance
    </p>
  </div>
</div>
<Footer showPrevious={true} flexing="justify-between" previousPage="fundamental" nextPage="Correlation" />

</div>
</div> 

        
        </>
    )
}