import Image from 'next/image';
import Text from '../../components/Text';
export default function Target() {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src="/target-page-bg-image.png"
        alt="Background"
        fill
        className="object-cover -z-10 p-5 pt-25"
        priority
      />
      <div className="w-full h-[80px] bg-sat-school-dark-blue absolute top-0 left-0"></div>
      <div className="w-full absolute top-0 left-[50%] transform -translate-x-1/2 flex items-center justify-center gap-4 py-2">
        <div className="mt-10 pb-10 w-[480px] h-[100px] bg-sat-school-dark-blue text-center  rounded-4xl flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center -space-x-3">
              <Image
                src="/logo2.svg"
                alt="Logo 2"
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src="/logo1.svg"
                alt="Logo 1"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <Text.Header noShadow fontSize="40px">
                ระยะเวลาการจัดโครงการ
              </Text.Header>
              <Text.Header noShadow fontSize="40px">
                {' '}
                และกลุ่มเป้าหมายในการจัดโครงการ
              </Text.Header>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full pointer-events-none flex pt-20">
        <div className=" w-[100%] h-[32vh]  grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-6 md:pl-12 pt-26">
          {/* text content */}
          <div className="w-full bg-sat-school-secondary-yellow rounded-2xl p-10 pt-4 pr-0 pb-6 w-[50%] flex flex-col justify-start items-start">
            <Text.Subtitle>ระยะเวลาการจัดโครงการ</Text.Subtitle>
            <div>
              <ul className="list-disc list-inside text-3xl text-black font-bold">
                <li>1 วัน</li>
                <li>1-3 เดือน</li>
                <li>3 เดือนขึ้นไป</li>
                <li>ทำต่อเนื่องหลายปี ปีละ season</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-[100%] h-[32vh]  grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-6 md:pr-12 pt-26">
          {/* text content */}
          <div className="w-full bg-sat-school-secondary-yellow rounded-2xl p-10 pt-4 pr-0 pb-6 w-[50%] flex flex-col justify-start items-start">
            <Text.Subtitle>กลุ่มเป้าหมาย</Text.Subtitle>
            <div className="flex gap-10">
              <ul className="list-disc list-inside text-3xl text-black font-bold">
                <li>คุณครู</li>
                <li>เด็กนักเรียนประถมศึกษา</li>
                <li>เด็กนักเรียนมัธยมศึกษา</li>
                <li>นักศึกษา</li>
              </ul>
              <ul className="list-disc list-inside text-3xl text-black font-bold">
                <li>ผู้ปกครอง</li>
                <li>พนักงานในบริษัท</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-4 md:px-6 md:pr-12 md:pl-12 pt-32">
        {/* text content */}
        <div className="w-full bg-sat-school-secondary-yellow rounded-2xl p-10 pt-1 pb-4 w-[50%] flex flex-col justify-center items-center">
          <Text.Subtitle>ภาคการศึกษาของนักเรียน และนักศึกษา</Text.Subtitle>
          <div className="flex gap-10 w-full justify-center h-full">
            <div className="bg-[#fff7d0] rounded-2xl w-[50%] h-[200px]">
              <p className="text-center text-black font-bold text-2xl mt-2">
                Timeline โรงเรียนประถมศึกษา และมัธยมศึกษา{' '}
              </p>
              <div className="flex justify-center items-center mt-4 h-14">
                <Image
                  src="/target-page-school-1.png"
                  alt="Timeline School"
                  width={180}
                  height={180}
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <ul className="list-disc list-inside text-2xl text-black font-bold">
                  <li>ภาคเรียนที่ 1: เดือนพฤษภาคม ถึง เดือนตุลาคม</li>
                  <li>ภาคเรียนที่ 2: เดือนพฤศจิกายน ถึง เดือนมีนาคม</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#fff7d0] rounded-2xl w-[50%] h-[200px]">
              <p className="text-center text-black font-bold text-2xl mt-2">
                Timeline มหาวิทยาลัย{' '}
              </p>
              <div className="flex justify-center items-center mt-4 h-14">
                <Image
                  src="/target-page-university-1.png"
                  alt="Timeline School"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <ul className="list-disc list-inside text-2xl text-black font-bold">
                  <li>ภาคการศึกษาที่ 1: เดือนสิงหาคม ถึง เดือนธันวาคม</li>
                  <li>ภาคการศึกษาที่ 2: เดือนมกราคม ถึง เดือนพฤษภาคม</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
