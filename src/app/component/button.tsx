'use client'
import React from 'react';

interface DottedButtonProps {
  name: string;
  onClick?: () => void;
  link?: string;
}

const DottedButton: React.FC<DottedButtonProps> = ({ name, onClick, link }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button
      className="rounded-2xl border-2 border-dashed w-full border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default DottedButton;
