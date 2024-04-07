'use client'
interface HeadingProps {
    text: string;
  }
  
  const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
      <blockquote className="border-l-8 w-full border-gray-950 bg-zinc-100 my-8 pl-4 py-4">
        <p className="text-lg font-semibold">{text}</p>
      </blockquote>
    );
  };
  
  export default Heading;
  