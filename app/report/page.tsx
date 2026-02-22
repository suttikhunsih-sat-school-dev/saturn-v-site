import Image from 'next/image';
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
        <div className="flex-1 px-8 pl-0 py-6">
          {/* Blue Banner */}
          <div className="bg-sat-school-dark-blue rounded-3xl p-8 mb-8 flex items-center gap-6 h-56">
            <div className="flex items-center font-bold text-white bg-transparent p-0 gap-6 absolute top-[-16px] left-20">
              {/* The Giant S */}
              <h1 className="text-[350px] leading-[0.8] tracking-tighter drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                S
              </h1>
              {/* The Stacked Text */}
              <div className="flex flex-col justify-between h-[190px] ml-[-1px] pt-2">
                <span className="text-6xl leading-none drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                  ATURDAY
                </span>
                <span className="text-6xl leading-none drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                  CHOOL
                </span>
                <span className="text-6xl leading-none drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                  ATURN V
                </span>
              </div>
            </div>
          </div>

          {/* Yellow Title Box */}
          <div className="bg-sat-school-primary-yellow rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-sat-school-dark-blue mb-4">
              การรายงานผลหลังจบโครงการ (Report)
            </h2>
          </div>

          {/* Three Info Boxes */}
          <div className="space-y-6">
            {/* 1Page Box */}
            <div className="bg-sat-school-primary-yellow rounded-3xl p-6 flex items-center gap-4">
              <div className="w-20 h-20 bg-sat-school-dark-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="text-4xl">📄</div>
              </div>
              <div className="text-black">
                <h3 className="text-2xl font-bold mb-2">1Page / Impact Report</h3>
                <p className="text-sm">
                  สรุปข้อมูลหรือข้อเสนอแนะ หนนด給ผู้เกี่ยวข้อง เบิ้งสรระด้านคณ ดำนาแรว
                  ผ้ำใใจกับมิ ใช้ข้อมูนรีสยตไเครแนนประบัน
                </p>
              </div>
            </div>

            {/* Data Box */}
            <div className="bg-sat-school-primary-yellow rounded-3xl p-6 flex items-center gap-4">
              <div className="w-20 h-20 bg-sat-school-dark-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="text-4xl">📊</div>
              </div>
              <div className="text-black">
                <h3 className="text-2xl font-bold mb-2">Data</h3>
                <p className="text-sm">
                  ข้อมูลเชิงอำเมิจฟึจจอแนนฟีจฟึดรตั้นนหภาใช้นิเคระฅ ศึกษิมใน หรือ
                  สนับสนุนข้อเสนอ เบ่า สถิติ ตัวเลข ผลสำารวจ
                </p>
              </div>
            </div>

            {/* Visual Box */}
            <div className="bg-sat-school-primary-yellow rounded-3xl p-6 flex items-center gap-4">
              <div className="w-20 h-20 bg-sat-school-dark-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="text-4xl">📈</div>
              </div>
              <div className="text-black">
                <h3 className="text-2xl font-bold mb-2">Visual</h3>
                <p className="text-sm">
                  การนำเสนอข้อมูลแบบนำภาพ เป็น อินโฟรมติก การบ โครงแบบ เผิ่ดให้เข้าใจง่าย
                  เบิ้นภาพแรว และศึก์ศูดความสนใจ
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
