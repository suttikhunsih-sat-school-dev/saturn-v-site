import Image from 'next/image';
import React from 'react';

interface YellowBoxesWithBlueShadeProps {
  title: string;
  body: string[];
  imageSrc: string;
  marginTop: string;
}

const YellowBoxesWithBlueShade = ({
  title,
  body,
  imageSrc,
  marginTop = 'mt-0',
}: YellowBoxesWithBlueShadeProps) => {
  return (
    <div className={`relative inline-block w-60 h-110 ${marginTop}`}>
      <div
        className={`absolute top-3 left-3 w-full h-full rounded-lg bg-sat-school-dark-blue`}
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-20">
        <div className="relative w-22 h-22 rounded-full border-6 border-sat-school-blue bg-white overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(29,78,216,0.6)_0%,_white_70%)]"></div>
          <Image
            src={imageSrc}
            alt={title}
            width={96}
            height={96}
            className="object-contain w-3/4 h-3/4 scale-120"
          />
        </div>
      </div>
      <div className="relative bg-sat-school-secondary-yellow p-4 pl-4 rounded-lg text-black w-full h-full pt-16">
        <h2 className="text-4xl font-bold text-shadow-[1px_1px_0_rgba(0,0,0,0.3)] text-center">
          {title}
        </h2>
        <p className="text-3xl pt-4">
          {body.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < body.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default YellowBoxesWithBlueShade;
