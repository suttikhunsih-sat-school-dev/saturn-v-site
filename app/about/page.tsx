import Image from 'next/image';
import YellowBoxesWithGrayShade from '../../components/InfoBoxes/YellowBoxesWithGrayShade';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="bg-sat-school-dark-blue text-white py-2 px-2">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <div className="flex items-center -space-x-3">
            <Image src="/logo1.svg" alt="Saturn V Logo" width={120} height={120} />
            <Image src="/logo2.svg" alt="Saturday School Logo" width={120} height={120} />
          </div>
          <div className="flex flex-col tracking-widest [text-shadow:2px_2px_0_rgba(10,34,51,0.6)]">
            <div className="text-4xl font-bold text-white">SATURDAY SCHOOL</div>
            <div className="text-4xl font-bold text-white">
              SATURN V <span className="text-[#F4E28A]">คืออะไร ทำไมถึงต้องเลือกเรา</span>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto py-4 px-6 flex gap-10 items-center">
        {/* LEFT BOX */}
        <div className="relative w-90 h-90">
          <div className="absolute top-3 left-3 w-full h-full bg-sat-school-blue rounded-xl"></div>
          <div className="relative bg-[#F4E28A] p-6 rounded-xl h-full">
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
              <div className="w-40 h-40 rounded-full border-8 border-sat-school-blue overflow-hidden bg-white">
                <Image
                  src="/logo3.svg"
                  alt="Saturn V"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full scale-90"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mt-24">SATURN V</h2>
            <p className="text-2xl mt-3 text-center text-sat-school-blue font-bold [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
              การร่วมกับหน่วยงานรัฐ และเอกชน <br />
              เพื่อนำจุดแข็งของแต่ละองค์กรมาพัฒนา <br />
              ศักยภาพของเด็กไทย และขับเคลื่อนด้วยกัน <br />
              ผ่านรูปแบบ กิจกรรม Co Creation อาทิ <br />
              ค่าย หลักสูตร เวิร์คช็อป เป็นต้น
            </p>
          </div>
        </div>

        {/* CENTER ARROW  */}
        <div className="relative w-[200px] flex-shrink-0">
          <div className="relative">
            <div className="bg-gradient-to-r from-amber-400 via-amber-100 to-white h-20 w-40"></div>
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] h-[140px] blur-md scale-110 opacity-90 bg-gradient-to-l from-amber-400 to-white"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            ></div>
          </div>

          {/* TEXT OVERLAY ON ARROW */}
          <div
            className="absolute inset-0 flex items-center justify-start leading-tight
                  text-black text-xl text-center px-2 [text-shadow:0.5px_0.5px_0_rgba(10,34,51,0.6)]"
          >
            เพื่อพาน้องๆ ไปสู่ 4 เป้าหมาย <br /> ที่จะเติบโตไปด้วยกัน
          </div>
        </div>

        {/* RIGHT BOXES*/}
        <div className="flex flex-col gap-5 flex-1">
          <YellowBoxesWithGrayShade
            title="1. ความคิดแบบพัฒนาได้ (Growth Mindset)"
            body="ความเชื่อและความเข้าใจว่าความสามารถ และสติปัญญาเป็นสิ่งที่พัฒนา เปลี่ยนแปลงได้โดยการใช้เวลาและความพยายาม"
            imageSrc="/icon-about1.png"
          />

          <YellowBoxesWithGrayShade
            title="2. การล้มแล้วลุก (Resilience)"
            body="ความสามารถที่จะปรับตัวและฟื้นตัว เมื่อตกอยู่ในสถานการณ์ยากลำบาก มีแรงกดดันหรือมีความเครียดสูง หรือเมื่อเจอกับความล้มเหลว"
            imageSrc="/icon-about2.png"
          />

          <YellowBoxesWithGrayShade
            title="3. การรับรู้และเข้าใจตนเอง (Self Awareness)"
            body="การรับรู้และเข้าใจว่าตนเองกำลังคิด ทำหรือรู้สึกอะไรรวมถึงการรับรู้และเข้าใจจุดเด่นจุดด้อยสิ่งที่ตนให้คุณค่าและความสนใจของตนเอง"
            imageSrc="/icon-about3.png"
          />

          <YellowBoxesWithGrayShade
            title="4. พฤติกรรมเอื้อสังคม (Prosocial Behavior)"
            body="พฤติกรรมที่ตั้งใจทำออกมา เพื่อให้เป็นประโยชน์ต่อคนอื่นและสิ่งรอบตัว"
            imageSrc="/icon-about4.png"
          />
        </div>
      </div>
    </div>
  );
}
