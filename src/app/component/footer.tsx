'use client'
import Link from 'next/link';

interface FooterProps {
  showPrevious: boolean;
  previousPage?: string ;
  nextPage: string;
  flexing:string;
}

const Footer: React.FC<FooterProps> = ({ showPrevious, previousPage = '/', nextPage ,flexing}) => {
  return (
    <div className={`w-full bg-zinc-100 border-t-2 border-zinc-950 p-1 py-5 gap-5 flex ${flexing} items-evenly`}>
      {showPrevious?(
        <Link href={previousPage}>
          <div className={`rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>
            Previous
          </div>
        </Link>
      ):''}
      <Link href={nextPage}>
        <div className="rounded-2xl border-2 border-dashed border-black bg-green-300 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Next
        </div>
      </Link>
    </div>
  );
};

export default Footer;
