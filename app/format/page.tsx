import Image from 'next/image';
import Text from '../../components/Text';
export default function Format() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="w-full h-[40px] bg-sat-school-dark-blue absolute top-0 left-0"></div>
      <div className="w-full absolute top-0 left-[50%] transform -translate-x-1/2 flex items-center justify-center gap-4 py-2">
        <div className="w-[480px] h-[80px] bg-sat-school-dark-blue text-center text-white font-bold text-xl rounded-4xl flex items-center justify-center">
          <Text.Header>รูปแบบการจัดโครงการ</Text.Header>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-20 pt-24">
        <div className="flex flex-col gap-6">
          <Image
            src="/camp-format-content-text-container.png"
            alt="Format container"
            width={960}
            height={380}
            className="object-cover rounded-xl shadow-lg"
          />
          <Image
            src="/camp-format-content-text-container.png"
            alt="Format container"
            width={960}
            height={380}
            className="object-cover rounded-xl shadow-lg"
          />
          <Image
            src="/camp-format-content-text-container.png"
            alt="Format container"
            width={960}
            height={380}
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
