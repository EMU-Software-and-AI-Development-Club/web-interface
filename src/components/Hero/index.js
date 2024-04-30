import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.svg';
import { Button } from '@/components/ui';
const Hero = () => {
  return (
    <div className="flex relative flex-col-reversed items-center space-x-8 container justify-between h-screen">
      <div className="space-y-5 max-w-[600px]">
        <h1 className="text-5xl lg:text-6xl font-black">Code Cosmos & EMU.</h1>
        <p className="text-2xl opacity-60">
          Forgot to export your component from the file it defined in, or you
          might have mixed up default and named imports.
        </p>
        <div className="space-x-5 pt-6">
          <Button.Secondary text="Join Us" />
          <Button text="Teams" />
        </div>
      </div>
      <div className="absolute opacity-30 lg:opacity-80 top-10 right-4 lg:right-6 -z-10 lg:relative bg-red-500h sm:min-w-[300px]">
        <Image src={heroImage} alt="hero image" />
      </div>
    </div>
  );
};
export default Hero;
