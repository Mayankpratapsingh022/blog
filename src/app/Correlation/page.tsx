import Footer from "../component/footer";
import Heading from "../component/heading";
import Navbar from "../component/navbar";

export default function Correlation(){
    return(
        <>
        <Navbar activeStep={5} previousStep="Variance" nextStep="Finish"/>

<div className="bg-zinc-50 w-full h-full flex justify-center items-center flex-col  py-10 px-5 lg:px-10  ">


      <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">

      <Heading text="Correlation" />
      <div className="p-6 bg-gray-100">
  <h1 className="text-3xl font-bold mb-4">Understanding Correlation</h1>
  <p className="mb-4">
    Correlation is like a measure of how two sets of numbers are related to each other. It tells us if one set of numbers goes up or down at the same time as the other set, and how strong that relationship is.
  </p>
  <h2 className="text-2xl font-bold mb-2">Types of Correlation</h2>
  <div className="mb-4">
    <h3 className="text-xl font-bold mb-1">Positive Correlation</h3>
    <p className="mb-2">
      This is when both sets of numbers go up together, or when one goes up, the other tends to go up too. For example, the more you study for a test, the higher your score might be.
    </p>
  
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-bold mb-1">Negative Correlation</h3>
    <p className="mb-2">
      This is when one set of numbers goes up while the other goes down, or vice versa. For example, the more you exercise, the lower your weight might be.
    </p>
   
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-bold mb-1">No Correlation</h3>
    <p className="mb-2">
      This is when there is no clear relationship between the two sets of numbers. For example, the number of books you read and the color of your shoes are probably not related.
    </p>
   
  </div>
  <p className="mb-4">
    Correlation is measured on a scale from -1 to 1. A correlation of 1 means there is a perfect positive relationship, a correlation of -1 means there is a perfect negative relationship, and a correlation of 0 means there is no relationship at all.
  </p>
  <p className="mb-4">
    It's important to remember that correlation does not mean causation. Just because two sets of numbers are correlated, it doesn't mean that one causes the other to happen.
  </p>
</div>

<Footer showPrevious={true} flexing="justify-between" previousPage="Variance" nextPage="Finish" />

      </div>
      </div>


        </>
    )
}