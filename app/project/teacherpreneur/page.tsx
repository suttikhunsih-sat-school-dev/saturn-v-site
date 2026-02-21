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
        {/* dark box, project objective */}
        <div className="p-2 bg-sat-school-dark-blue rounded-xl flex justify-start items-start mt-6 pt-4">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              รายละเอียดโครงการ :{' '}
            </span>
            โครงการปั้นผู้ประกอบการรุ่นเยาว์
            เป็นความร่วมมือระหว่างมูลนิธิโรงเรียนวันเสาร์และบริษัท ดีลอยท์ ประเทศไทย
            มีเป้าหมายเพื่อศักยภาพของครูในการส่งเสริมการเรียนรู้ด้านแนวคิด
            และทักษะความเป็นผู้ประกอบการให้กับนักเรียน และพัฒนาทักษะและความรู้ของเยาวชน
            การสร้างความรู้และทักษะที่เกี่ยวข้องกับการเป็นผู้ประกอบการ
          </p>
        </div>
        {/* two blue box - project content */}
        <div className="p-2 bg-sat-school-blue rounded-xl flex justify-start items-start mt-6 pt-4">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              ความถนัดและความรู้ด้านต่าง ๆ :{' '}
            </span>
            ได้รับความรู้และวิธีคิดแบบผู้ประกอบการ ทักษะการทำธุรกิจ
            และแลกเปลี่ยนไอเดียในการเป็นผู้ประกอบการทำธุรกิจ
          </p>
        </div>
        <div className="p-2 bg-sat-school-blue rounded-xl flex justify-start items-start mt-6 pt-4">
          <WhiteDotSpan />
          <p className="text-2xl text-white px-2 font-bold">
            <span className="text-2xl text-sat-school-primary-yellow">
              สิ่งที่คุณครูจะได้หลังจากจบโครงการ :{' '}
            </span>
            ผู้เข้าร่วมโครงการจะได้รับการเสริมทักษะและวิธีคิดแบบผู้ประกอบการ
            ผ่านกิจกรรมอบรมเชิงปฎิบัติการ
            โดยวิทยากรผู้เชี่ยวชาญและนำองค์ความรู้ที่ได้ไปจัดแผนการสอนเพื่อนำไปสอนกับนักเรียน
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
