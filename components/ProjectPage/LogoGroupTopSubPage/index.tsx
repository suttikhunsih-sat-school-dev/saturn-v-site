import Image from 'next/image';
const LogoGroupTopSubPage = ({
  logoList,
}: {
  logoList: { src: string; alt: string }[];
}) => {
  return (
    <div className="w-[70px] flex justify-center items-center gap-2">
      {logoList.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={80}
          height={80}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export default LogoGroupTopSubPage;
