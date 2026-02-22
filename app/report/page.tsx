import Image from 'next/image';
import ReportImageCard from '../../components/ReportImageCard';
import ReportInfoBox from '../../components/ReportInfoBox';

const infoBoxesData = [
  {
    imageSrc: '/pic-report1.png',
    title: '1Page / Impact Report',
    body: 'สรุปข้อมูลหรือข้อเสนอทั้งหมดให้อยู่ในหน้าเดียว เน้นสาระสำคัญ อ่านเร็ว\n เข้าใจทันที ใช้เพื่อพรีเซนต์ไอเดียแบบกระชับ',
  },
  {
    imageSrc: '/pic-report2.png',
    title: 'Data',
    body: 'ข้อมูลเชิงตัวเลขหรือข้อเท็จจริงที่นำมาใช้วิเคราะห์ ตัดสินใจ หรือสนับสนุนข้อเสนอ\n เช่น สถิติ ตัวเลข ผลสำรวจ',
  },
  {
    imageSrc: '/pic-report3.png',
    title: 'Visual',
    body: 'การนำเสนอข้อมูลแบบภาพ เช่น อินโฟกราฟิก กราฟ ไดอะแกรม เพื่อให้เข้าใจง่าย \nเห็นภาพเร็ว และดึงดูดความสนใจ',
  },
];

export default function Report() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <Image
        src="/bg-home-page.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="flex h-full relative">
        {/* Left Column */}
        <div className="flex-[0.75] px-8 pl-0 py-6">
          {/* Image and Blue Banner Container */}
          <div className="relative mb-2">
            {/* Blue Banner */}
            <div className="bg-sat-school-dark-blue p-8 flex items-center gap-6 h-46 w-[760px] relative">
              <div className="flex items-center font-bold text-white bg-transparent p-2 gap-6 absolute top-[-50px] left-20">
                {/* The Giant S */}
                <h1 className="text-[300px] leading-[0.8] tracking-tighter drop-shadow-[8px_8px_0px_#6f8aac]">
                  S
                </h1>
                {/* The Stacked Text */}
                <div className="flex flex-col justify-between h-[190px] ml-[-1px] pt-4">
                  <span className="text-[60px] leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                    ATURDAY
                  </span>
                  <span className="text-[60px] leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                    CHOOL
                  </span>
                  <span className="text-[60px] leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                    ATURN V
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image - Overlapped */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/2 w-[180px] h-[180px] z-20">
              <Image
                src="/pic-report11.png"
                alt="Report Icon"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Yellow Title Box */}
          <div className="bg-[#fff7d0] rounded-xl pl-4 mb-4 ml-4">
            <h2 className="text-[38px] text-sat-school-blue font-bold text-start -py-2">
              {' '}
              การรายงานผลหลังจบโครงการ (Report)
            </h2>
          </div>

          {/* Three Info Boxes */}
          <div className="space-y-4 pl-4">
            {infoBoxesData.map((box, index) => (
              <ReportInfoBox
                key={index}
                imageSrc={box.imageSrc}
                title={box.title}
                body={box.body}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="w-130 relative pl-10 pr-8 py-12 flex flex-col gap-6 justify-start -mt-4">
          {/* 1Page/Impact Report Image */}
          <ReportImageCard
            mainImage="/report-4.png"
            mainAlt="1Page/impact"
            badgeIcon="/pic-report7.png"
            badgeText="1 page /impact"
          />

          {/* Data Image */}
          <ReportImageCard
            mainImage="/report-5.png"
            mainAlt="Data Report"
            badgeIcon="/pic-report8.png"
            badgeText="Data"
          />

          {/* Visual Image */}
          <ReportImageCard
            mainImage="/report-6.png"
            mainAlt="Visual Report"
            badgeIcon="/pic-report9.png"
            badgeText="Visual"
          />
        </div>

        {/* Yellow Vertical Band - Far Right */}
        <div className="w-20 bg-sat-school-primary-yellow flex-shrink-0"></div>
      </div>
    </div>
  );
}
