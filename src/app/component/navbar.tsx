'use client'
import Link from 'next/link';

interface NavbarProps {
  activeStep: number;
  previousStep:string;
  nextStep:string;
}

const Navbar: React.FC<NavbarProps> = ({ activeStep, previousStep,nextStep }) => {
  return (
    <header className="bg-gray-50 sticky">
      <div className="mx-auto max-w-screen-xl flex justify-center items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex justify-evenly items-center w-full gap-3">
              <Link href={ previousStep}>
       
                  <svg className="w-8 h-8 " viewBox="0 0 24 24" transform="rotate(180)">
                    <path d="M10.811,18.707,9.4,17.293,14.689,12,9.4,6.707l1.415-1.414L16.1,10.586a2,2,0,0,1,0,2.828Z" fill="#23262f" />
                  </svg>
              
              </Link>

              <div className="flex flex-wrap justify-center items-center gap-3">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-20 h-3 rounded-lg ${
                      index + 1 === activeStep ? 'bg-green-500' : 'bg-zinc-300'
                    }`}
                  ></div>
                ))}
              </div>

              <Link href={nextStep}>
             
                  <svg className="w-8" viewBox="0 0 24 24">
                    <path d="M10.811,18.707,9.4,17.293,14.689,12,9.4,6.707l1.415-1.414L16.1,10.586a2,2,0,0,1,0,2.828Z" fill="#23262f" />
                  </svg>
               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
