'use client'

import Footer from "../component/footer";
import Heading from "../component/heading";
import LottiePlayer from "../component/Lottieplayer";
import Navbar from "../component/navbar";

export default function Fundamentals(){
    return(
        <>
      <Navbar activeStep={3} previousStep="Real" nextStep="Variance"/>
      <div className="bg-zinc-50 w-full h-full flex justify-center  py-10 px-5 lg:px-10  ">
      <div className="text-xl text-zinc-950 lg:w-2/6  md:w-5/6">

      <p className="text-3xl font-Medium">Fundamental Concepts of Probability & Statistics</p>
 <br></br>
<h1>Let's break down each concept</h1>
 <Heading text="Probability Distribution" />
 <div className="p-6 bg-gray-100">
  
 <LottiePlayer src='distrubution.lottie'/>
  <h1 className="text-3xl font-bold mb-4">Understanding Probability Distributions</h1>
  <p className="mb-4">
    Probability distributions describe how the values of a random variable are distributed. They show the likelihood of different outcomes in an experiment.
  </p>
  <h2 className="text-2xl font-semibold mb-3">Random Variable</h2>
  <p className="mb-4">
    A variable whose possible values are numerical outcomes of a random phenomenon. For example, the number of heads when flipping a coin three times.
  </p>
  <h2 className="text-2xl font-semibold mb-3">Probability Distribution</h2>
  <p className="mb-4">
    It gives the probabilities of different possible outcomes of a random variable. There are two main types:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>
      <strong>Discrete Probability Distribution</strong>: Deals with discrete random variables, which have countable outcomes. Example: Rolling a die (possible outcomes: 1, 2, 3, 4, 5, 6).
    </li>
    <li>
      <strong>Continuous Probability Distribution</strong>: Deals with continuous random variables, which have infinite possible outcomes within a given range. Example: The height of students in a class.
    </li>
  </ul>
  <h3 className="text-xl font-medium mb-2">Discrete Probability Distribution Example</h3>
  <p className="mb-4">
    For a fair six-sided die, the probability distribution is:
  </p>
  <ul className="list-disc list-inside mb-4 ml-4">
    <li>P(1) = 1/6</li>
    <li>P(2) = 1/6</li>
    <li>P(3) = 1/6</li>
    <li>P(4) = 1/6</li>
    <li>P(5) = 1/6</li>
    <li>P(6) = 1/6</li>
  </ul>
  <h3 className="text-xl font-medium mb-2">Continuous Probability Distribution Example</h3>
  <p className="mb-4">
    For heights of students, we might use a normal distribution (bell curve), which is characterized by its mean (average) and standard deviation (spread).
  </p>
  <h2 className="text-2xl font-semibold mb-3">Key Points</h2>
  <ul className="list-disc list-inside mb-4">
    <li><strong>Probability Mass Function (PMF)</strong>: Used for discrete distributions, gives the probability that a discrete random variable is exactly equal to some value.</li>
    <li><strong>Probability Density Function (PDF)</strong>: Used for continuous distributions, describes the likelihood of a random variable to take on a given value. The area under the curve represents probabilities.</li>
    <li><strong>Cumulative Distribution Function (CDF)</strong>: Shows the probability that a random variable will take a value less than or equal to a given value.</li>
  </ul>
  <h2 className="text-2xl font-semibold mb-3">Why It Matters</h2>
  <p className="mb-4">
    Probability distributions are crucial in statistics and data analysis as they help in understanding data, making predictions, and informed decisions. For instance, knowing the distribution of customer ages can help in targeted marketing strategies.
  </p>


</div>


<Heading text="Understanding the Mean" />
<div className="p-6 bg-gray-100">
    <p className="mb-4">
    The mean is like the average of a group of numbers. To find the mean, you add up all the numbers in the group and then divide by how many numbers there are.
  </p>
  <p className="mb-4">
    The formula to calculate the mean (or average) of a set of numbers is:
  </p>
  <div className="p-4 border rounded mb-4">
    <p className="font-semibold text-center">
      Mean = <span className="inline-block align-middle">(Sum of all numbers)</span> / <span className="inline-block align-middle">(Number of numbers)</span>
    </p>
  </div>
  <p className="mb-4">
    You add up all the numbers in the group and then divide by how many numbers there are.
  </p>
  <p className="mb-4">
    For example, if you have the numbers 2, 4, 6, and 8, you add them all up to get 20. Then, since there are 4 numbers, you divide 20 by 4 to get 5. So, the mean (or average) of these numbers is 5.
  </p>
  <LottiePlayer src='mean.lottie'/>
  <div className=" p-4 border rounded">
    <p className="font-semibold">Example Calculation:</p>
    <p>Numbers: 2, 4, 6, 8</p>
    <p>Sum: 2 + 4 + 6 + 8 = 20</p>
    <p>Number of numbers: 4</p>
    <p>Mean: 20 / 4 = 5</p>
  </div>
</div>

<Heading text="Understanding the Median" />


<div className="p-6 bg-gray-100">

  <p className="mb-4">
    The median is like the middle number in a group of numbers. To find the median, you first arrange the numbers in order from smallest to largest. Then, if there is an odd number of numbers, the median is the middle number. If there is an even number of numbers, the median is the average of the two middle numbers.
  </p>
  <p className="mb-4">
    For example, let's say we have the numbers 1, 3, 5, 7, and 9. When we arrange them in order, we get 1, 3, 5, 7, 9. The middle number is 5, so the median of these numbers is 5.
  </p>
  <LottiePlayer src='median.lottie'/>

  <p className="mb-4">
    The formula to calculate the median depends on whether there is an odd or even number of numbers:
  </p>
  <div className=" p-4 border rounded mb-4">
    <p className="font-semibold">
      <span className="block mb-2">- If there is an odd number of numbers: <span className="font-normal">Median = Middle number</span></span>
      <span className="block">- If there is an even number of numbers: <span className="font-normal">Median = (Middle two numbers added together) / 2</span></span>
    </p>
  </div>
  <p className="mb-4">
    For example, if we have the numbers 1, 2, 3, 4, the median would be (2 + 3) / 2 = 2.5.
  </p>
  <div className="p-4 border rounded">
    <p className="font-semibold">Example Calculation:</p>
    <p>Numbers: 1, 2, 3, 4</p>
    <p>Middle numbers: 2, 3</p>
    <p>Sum of middle numbers: 2 + 3 = 5</p>
    <p>Median: 5 / 2 = 2.5</p>
  </div>
</div>



<Heading text="Understanding the Mode" />

<div className="p-6 bg-gray-100">
  <p className="mb-4">
    The mode is like the most popular fruit in a basket. It's the number that appears the most frequently in a group of numbers.
  </p>
  <p className="mb-4">
    For example, if you have a basket with 3 apples and 2 oranges, the mode is apple because there are more apples than any other fruit.
  </p>
  <LottiePlayer src='mode.lottie'/>

  <p className="mb-4">
    The formula for finding the mode is simply to look for the number that appears most often in a set of numbers. If two or more numbers appear the same number of times and more often than any other number, then the set of numbers is said to be bimodal or multimodal, respectively.
  </p>
  <p className="mb-4">
    The mode is the number that appears most frequently in a group of numbers. In other words, it's the number that occurs the most times. For example, in the set of numbers 2, 2, 3, 4, 4, 4, 5, the mode is 4 because it appears more times than any other number.
  </p>
  <div className=" p-4 border rounded">
    <p className="font-semibold">Example Calculation:</p>
    <p>Numbers: 2, 2, 3, 4, 4, 4, 5</p>
    <p>Mode: 4 (since it appears 3 times, more frequently than any other number)</p>
  </div>
</div>



<Footer showPrevious={true} flexing="justify-between" previousPage="Real" nextPage="Variance" />


      </div>



      </div>
        </>
    )
}