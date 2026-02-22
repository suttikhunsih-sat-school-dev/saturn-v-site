import Image from 'next/image';
const LogoGroupTopSubPage = ({
  logoList,
}: {
  logoList: { src: string; alt: string; size?: number }[];
}) => {
  return (
    <div className="w-auto flex justify-center items-center gap-2">
      {logoList.map((logo, index) => {
        const size = logo.size || 80;
        return (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={size}
            height={size}
            className="object-contain"
          />
        );
      })}
    </div>
  );
};

export default LogoGroupTopSubPage;
