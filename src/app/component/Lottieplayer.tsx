'use client'
import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface LottiePlayerProps {
  src: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src }) => {
  return (
    <div className='flex   justify-center items-center'>
      <DotLottiePlayer
        src={src}
        autoplay
        loop
      >
      
      </DotLottiePlayer>
    </div>
  );
};

export default LottiePlayer;
