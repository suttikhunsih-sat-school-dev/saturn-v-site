interface YellowBoxesWithGrayShadeProps {
  title: string;
  body: string;
  imageSrc: string;
}
import Image from 'next/image';
const YellowBoxesWithGrayShade = ({
  title,
  body,
  imageSrc,
}: YellowBoxesWithGrayShadeProps) => {
  return (
    <div className="relative inline-block max-w-[33rem]">
      <div className={`absolute top-3 left-3 w-full h-full rounded-lg bg-[#9db0ac]`} />
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-20">
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
      <div className="relative bg-sat-school-secondary-yellow p-3 pl-8 rounded-lg">
        <h2 className="text-3xl font-bold text-[#0255a5] [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
          {title}
        </h2>
        <p className="text-2xl">{body}</p>
      </div>
    </div>
  );
};

export default YellowBoxesWithGrayShade;
