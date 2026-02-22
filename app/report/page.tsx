import Image from 'next/image';
import Text from '../../components/Text';
export default function Report() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
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
          {/* Blue Banner */}
          <div className="bg-sat-school-dark-blue p-8 mb-4 flex items-center gap-6 h-56">
            <div className="flex items-center font-bold text-white bg-transparent p-0 gap-6 absolute top-[-16px] left-20">
              {/* The Giant S */}
              <h1 className="text-[340px] leading-[0.8] tracking-tighter drop-shadow-[8px_8px_0px_#6f8aac]">
                S
              </h1>
              {/* The Stacked Text */}
              <div className="flex flex-col justify-between h-[190px] ml-[-1px] pt-2">
                <span className="text-6xl leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                  ATURDAY
                </span>
                <span className="text-6xl leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                  CHOOL
                </span>
                <span className="text-6xl leading-none drop-shadow-[2px_2px_0px_#6f8aac]">
                  ATURN V
                </span>
              </div>
            </div>
          </div>

          {/* Yellow Title Box */}
          <div className="bg-[#fff7d0] rounded-xl p-2 mb-4">
            <h2 className="text-5xl text-sat-school-blue font-bold text-center">
              {' '}
              การรายงานผลหลังจบโครงการ (Report)
            </h2>
          </div>

          {/* Three Info Boxes */}
          <div className="space-y-6 pl-4">
            {/* 1Page Box */}
            <div className="bg-sat-school-secondary-yellow rounded-3xl p-2 flex items-center gap-0 max-h-[140px]">
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center">
                <Image
                  src="/report-1.png"
                  alt="Data Icon"
                  width={500}
                  height={500}
                  className="object-contain scale-160 pt-2 rounded"
                />
              </div>
              <div className="text-black pl-4 pr-8">
                <Text.Subtitle textColor="black"> 1Page / Impact Report</Text.Subtitle>
                <p className="text-black text-2xl">
                  สรุปข้อมูลหรือข้อเสนอทั้งหมดให้อยู่ในหน้าเดียว เน้นสาระสำคัญ อ่านเร็ว
                  เข้าใจทันที ใช้เพื่อพรีเซนต์ไอเดียแบบกระชับ
                </p>
              </div>
            </div>
            <div className="bg-sat-school-secondary-yellow rounded-3xl p-2 flex items-center gap-0 max-h-[140px]">
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center">
                <Image
                  src="/report-2.png"
                  alt="Data Icon"
                  width={500}
                  height={500}
                  className="object-contain scale-160 rounded"
                />
              </div>
              <div className="text-black pl-4 pr-8">
                <Text.Subtitle textColor="black"> Data</Text.Subtitle>
                <p className="text-black text-2xl">
                  ข้อมูลเชิงตัวเลขหรือข้อเท็จจริงที่นำมาใช้วิเคราะห์ ตัดสินใจ
                  หรือสนับสนุนข้อเสนอ เช่น สถิติ ตัวเลข ผลสำรวจ
                </p>
              </div>
            </div>
            <div className="bg-sat-school-secondary-yellow rounded-3xl p-2 flex items-center gap-0 max-h-[140px]">
              <div className="w-40 h-40 rounded-2xl flex items-center justify-center">
                <Image
                  src="/report-3.png"
                  alt="Data Icon"
                  width={500}
                  height={500}
                  className="object-contain scale-160 rounded"
                />
              </div>
              <div className="text-black pl-4 pr-8">
                <Text.Subtitle textColor="black"> Visual</Text.Subtitle>
                <p className="text-black text-2xl">
                  การนำเสนอข้อมูลแบบภาพ เช่น อินโฟกราฟิก กราฟ ไดอะแกรม เพื่อให้เข้าใจง่าย
                  เห็นภาพเร็ว และดึงดูดความสนใจ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="w-96 relative pr-8 py-12 flex flex-col gap-6 justify-start">
          {/* 1Page/Impact Report Image */}
          <div className="relative rounded-3xl overflow-hidden h-80 border-4 border-sat-school-primary-yellow">
            <Image
              src="/report-1page.jpg"
              alt="1Page Impact Report"
              fill
              className="object-cover"
            />
          </div>

          {/* Data Image */}
          <div className="relative rounded-3xl overflow-hidden h-80 border-4 border-sat-school-primary-yellow">
            <Image src="/report-data.jpg" alt="Data" fill className="object-cover" />
          </div>

          {/* Visual Image */}
          <div className="relative rounded-3xl overflow-hidden h-80 border-4 border-sat-school-primary-yellow">
            <Image src="/report-visual.jpg" alt="Visual" fill className="object-cover" />
          </div>
        </div>

        {/* Yellow Vertical Band - Far Right */}
        <div className="w-24 bg-sat-school-primary-yellow flex-shrink-0"></div>
      </div>
    </div>
  );
}
