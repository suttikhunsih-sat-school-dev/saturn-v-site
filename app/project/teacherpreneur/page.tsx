import Image from 'next/image';
import LogoGroupTopSubPage from '../../../components/ProjectPage/LogoGroupTopSubPage';
import Text from '../../../components/Text';
export default function Teacherpreneur() {
  return (
    <div className="flex">
      {/* text content */}
      <div className="p-0 w-[50%]">
        <div className="flex justify-center items-center h-[100px] mt-10">
          {/* logos */}
          <LogoGroupTopSubPage
            logoList={[
              { src: '/logo-main-black.png', alt: 'Logo sat school black' },
              { src: '/logo3.svg', alt: 'Logo saturn v black' },
            ]}
          />
        </div>
        <div className="flex justify-center items-center">
          {/* Page Title */}
          <Text.CardTitle textColor="#1855a5">
            Saturday School Saturn V Project
          </Text.CardTitle>
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
