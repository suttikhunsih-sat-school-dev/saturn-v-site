import Image from 'next/image';
import LogoGroupTopSubPage from '../../../components/ProjectPage/LogoGroupTopSubPage';
import Text from '../../../components/Text';
import WhiteDotSpan from '../../../components/WhiteDot';
export default function Teacherpreneur() {
  return (
    <div className="flex">
      {/* text content */}
      <div className="p-10 pt-8 w-[50%]">
        <div className="flex justify-center items-center h-[70px] mt-2">
          {/* logos */}
          <LogoGroupTopSubPage
            logoList={[
              { src: '/logo-main-black.png', alt: 'Logo sat school black' },
              { src: '/logo3.svg', alt: 'Logo saturn v black' },
            ]}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Page Title */}
          <Text.SubtitleBlue textColor="#1855a5">
            Saturday School Saturn V Project
          </Text.SubtitleBlue>
          <Text.SubtitleDarkBlueNoShadow textColor="#0e3c73">
            Teacherpreneur (Deloitte)
          </Text.SubtitleDarkBlueNoShadow>
        </div>
        {/* text box */}
        <div className="p-4 bg-sat-school-dark-blue rounded-lg flex justify-center items-center mt-6">
          <p className="text-lg text-white">
            <WhiteDotSpan />
            The Teacherpreneur project is a collaboration between Saturday School and
            Deloitte, aimed at empowering educators with digital skills and
            entrepreneurial mindset.
          </p>
        </div>
      </div>
      {/* image content */}
      <div className="p-10">
        <Image
          src="/teacherpreneur.jpg"
          alt="Teacherpreneur Image"
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
